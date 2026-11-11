#!/bin/bash
# 안드로이드 교차 빌드: libngspice.so + libngnumparam.so + 코드 모델(table 뺌)
# 쓰는 법: [NOHICUM=0] bash build_android.sh [arm64-v8a|x86_64]
# NDK 27.1.12297006 clang, API 24, 16KB 페이지 정렬.
set -euo pipefail
E="$(cd "$(dirname "$0")" && pwd)"
SRC="$E/src/ngspice-47"
ABI="${1:-arm64-v8a}"
NOHICUM="${NOHICUM:-1}"   # 1(기본) = hicum2 뺌(C++·MPL 없음) · 0 = hicum2 넣음(libc++_shared.so 필요)
case "$ABI" in
  arm64-v8a) TRIPLE=aarch64-linux-android ;;
  x86_64)    TRIPLE=x86_64-linux-android ;;
  *) echo "모르는 ABI $ABI"; exit 1 ;;
esac
API=24
NDK="$HOME/Library/Android/sdk/ndk/27.1.12297006"
TC="$NDK/toolchains/llvm/prebuilt/darwin-x86_64"
CC="$TC/bin/${TRIPLE}${API}-clang"
CXX="$TC/bin/${TRIPLE}${API}-clang++"
AR="$TC/bin/llvm-ar"; RANLIB="$TC/bin/llvm-ranlib"; STRIP="$TC/bin/llvm-strip"; READELF="$TC/bin/llvm-readelf"; NM="$TC/bin/llvm-nm"
B="$E/build/android-$ABI"
LOG="$E/out"; T="android_${ABI}"
PAGE="-Wl,-z,max-page-size=16384"
mkdir -p "$B/stub" "$B/numparam_split" "$LOG"
cd "$B"

# bionic 에는 libpthread 가 따로 없다(libc 안에 있음). configure·Makefile 이 -lpthread 를 찾으므로 빈 보관 파일을 둔다.
[ -f stub/libpthread.a ] || "$AR" rc stub/libpthread.a

# 1) configure
if [ ! -f Makefile ]; then
  nice -n 10 "$SRC/configure" --host="$TRIPLE" --with-ngshared --enable-xspice \
    --disable-osdi --disable-klu --disable-openmp --disable-cider --disable-debug \
    --without-x --with-readline=no --with-editline=no --with-fftw3=no \
    --prefix="$B/inst" \
    CC="$CC" CXX="$CXX" AR="$AR" RANLIB="$RANLIB" STRIP="$STRIP" NM="$NM" \
    CFLAGS="-O2 -fPIC" CXXFLAGS="-O2 -fPIC" LDFLAGS="-L$B/stub $PAGE" \
    CC_FOR_BUILD=/usr/bin/clang > "$LOG/${T}_configure.log" 2>&1
fi

# 2) 생성된 Makefile 고치기(소스는 그대로)
sed -i.orig -E 's/^(CMDIRS = .*) table( .*)$/\1\2/' src/xspice/icm/GNUmakefile          # GPL table 코드 모델 뺌
sed -i.orig -E 's/^(SUBDIRS = mif cm enh evt idn cmpp icm) verilog vhdl$/\1/' src/xspice/Makefile   # GPL vpi 모듈 뺌
# 교차 빌드 함정 2개(코드 모델 쪽 Makefile 이 '빌드하는 기계'를 보고 정함):
#  - modpath.lst 를 읽을 때 대상(arm64)용 cmpp 를 실행하려다 실패(원 오류: ../cmpp/cmpp: cannot execute binary file) → 빌드 기계용 cmpp 로
#  - uname 이 Darwin 이면 링크 옵션을 -bundle -flat_namespace 로 잡음(원 오류: ld.lld: error: undefined symbol: main) → -shared 로
sed -i.tmp -E 's|^([[:space:]]*cmpp = )\.\./cmpp/cmpp$|\1../cmpp/build/cmpp|' src/xspice/icm/GNUmakefile
sed -i.tmp -E "s|LDFLAGS = -bundle -flat_namespace -undefined suppress|LDFLAGS = -shared $PAGE|" src/xspice/icm/makedefs
grep -n 'cmpp = ' src/xspice/icm/GNUmakefile; grep -n 'LDFLAGS = ' src/xspice/icm/makedefs
grep -n '^CMDIRS' src/xspice/icm/GNUmakefile; grep -n '^SUBDIRS' src/xspice/Makefile

# 내보내는 심볼: 공개 API + numparam 이 본체에서 부르는 것만. 나머지는 지역(local)
{ echo "{"; echo "  global:"; sed 's/^/    /; s/$/;/' "$E/exports_api.txt" "$E/exports_numparam_bridge.txt"; echo "  local: *;"; echo "};"; } > exports_android.map

[ -f src/Makefile.pristine ] || cp src/Makefile src/Makefile.pristine
cp src/Makefile.pristine src/Makefile
sed -i.tmp -E '/^[[:space:]]*frontend\/numparam\/libnumparam\.la[[:space:]]*\\$/d' src/Makefile
# -avoid-version: soname 을 libngspice.so 로(안드로이드는 판 번호 붙은 이름을 못 씀)
sed -i.tmp -E "s|^libngspice_la_LDFLAGS = -shared -lstdc\+\+|libngspice_la_LDFLAGS = -shared -avoid-version -L$B/numparam_split -lngnumparam -Wl,--version-script=$B/exports_android.map $PAGE CXXLIB_PLACEHOLDER|" src/Makefile
if [ "$NOHICUM" = 1 ]; then
  # hicum2(C++ · MPL-2.0 인 cppduals 머리말을 씀)를 뺀다 → 바이너리에 MPL 코드 0, C++ 런타임 의존 0.
  # 소스는 그대로 두고, 고친 dev.c 사본을 빌드 폴더에 둔다(make 는 빌드 폴더의 파일을 먼저 씀).
  sed -e '/#include "hicum2\/hicum2itf.h"/d' -e '/^[[:space:]]*get_hicum_info,$/d' "$SRC/src/spicelib/devices/dev.c" > src/spicelib/devices/dev.c
  [ -f src/spicelib/devices/Makefile.pristine ] || cp src/spicelib/devices/Makefile src/spicelib/devices/Makefile.pristine
  sed -E 's/(^|[[:space:]])hicum2([[:space:]]|$)/\1\2/g' src/spicelib/devices/Makefile.pristine > src/spicelib/devices/Makefile
  sed -i.tmp -E '/^[[:space:]]*spicelib\/devices\/hicum2\/libhicum2\.la[[:space:]]*\\$/d' src/Makefile
  sed -i.tmp -E 's/-lstdc\+\+//g; s/ CXXLIB_PLACEHOLDER//' src/Makefile
  rm -f src/spicelib/devices/dev.lo src/spicelib/devices/libdev.la
  # configure 가 LIBS 에 넣은 -lstdc++ 가 모든 Makefile 과 이미 만든 .la 의 dependency_libs 에 남아
  # libc++_shared.so 가 NEEDED 로 붙는다 → 전부에서 지운다.
  find . -type f -name Makefile -not -path './inst/*' -exec sed -i.tmp -E 's/ -lstdc\+\+//g' {} +
  find . -type f -name '*.la' -not -path './inst/*' -exec sed -i.tmp -E 's/ -lstdc\+\+//g' {} +
  rm -f src/libngspice.la
else
  # hicum2 를 두면 C++ 런타임이 필요하다. RN 앱에는 libc++_shared.so 가 이미 들어 있으므로 그것에 동적 연결(-lstdc++ 는 NDK 가 libc++ 로 바꿔 줌).
  rm -f src/spicelib/devices/dev.c
  [ -f src/spicelib/devices/Makefile.pristine ] && cp src/spicelib/devices/Makefile.pristine src/spicelib/devices/Makefile
  sed -i.tmp -E 's/ CXXLIB_PLACEHOLDER//' src/Makefile
fi
grep -n 'libngspice_la_LDFLAGS =' src/Makefile

# configure 가 붙이는 -fvisibility=hidden 을 빼야 numparam↔본체가 서로 찾는다(내보내기는 위 map 으로 좁힘)
# API 24 의 bionic 에는 getpwent/endpwent 가 없다(API 26 부터) → android_compat.h 로 메운다(C++ 파일에는 CXXFLAGS 라 안 끼워짐).
# (원 오류: complete.c:200 call to undeclared function 'getpwent')
MK=("CFLAGS=-O2 -fPIC -include $E/android_compat.h")

# 3) numparam 먼저 → libngnumparam.so
nice -n 10 make -C src/frontend/numparam -j2 "${MK[@]}" > "$LOG/${T}_make_numparam.log" 2>&1
"$CC" -shared -o numparam_split/libngnumparam.so \
  src/frontend/numparam/.libs/spicenum.o src/frontend/numparam/.libs/xpressn.o src/frontend/numparam/.libs/mystring.o \
  -Wl,-soname,libngnumparam.so $PAGE -lm

# 4) 전부
nice -n 10 make -j2 "${MK[@]}" > "$LOG/${T}_make.log" 2>&1
nice -n 10 make install "${MK[@]}" > "$LOG/${T}_make_install.log" 2>&1

# 5) 앱에 넣을 모양으로 모으기: jniLibs/<ABI>/lib*.so (코드 모델도 lib*.so 이름이어야 APK 에 들어감)
OUT="$E/android-libs/$ABI"; mkdir -p "$OUT/unstripped"
cp inst/lib/libngspice.so "$OUT/unstripped/"
cp numparam_split/libngnumparam.so "$OUT/unstripped/"
for m in analog xtradev spice2poly digital xtraevt tlines; do cp "inst/lib/ngspice/$m.cm" "$OUT/unstripped/libngcm_$m.so"; done
for f in "$OUT"/unstripped/*.so; do "$STRIP" --strip-unneeded -o "$OUT/$(basename "$f")" "$f"; done
ls -la "$OUT" "$OUT/unstripped"
echo "빌드 끝: $OUT"
