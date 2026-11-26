#!/bin/bash
# Replaces the MPXJ library inside an MPP Viewer APK with your own build of MPXJ and re-signs the APK with your key.
# (LGPL-2.1 section 6: you may modify the library and relink the application with it.)
# Usage: relink.sh <MPPViewer.apk> <your-mpxj.jar> <keystore.jks> <key-alias> <out.apk>
# Needs: Java 17+, apktool 2.9+, and the Android SDK build-tools (d8, zipalign, apksigner) on PATH or in $BUILD_TOOLS.
# The app keeps the org.mpxj classes unshrunk and unrenamed, so your jar only has to keep the same public API that the
# app calls (the classes in org.mpxj used by com.vismstudio.fkmpxj.ScheduleEngine).
# The re-signed APK has a different signature: uninstall the store version first (your library of opened files is removed with it).
set -euo pipefail
APK=$1; JAR=$2; KS=$3; ALIAS=$4; OUT=$5
BT=${BUILD_TOOLS:-}; t() { if [ -n "$BT" ]; then echo "$BT/$1"; else echo "$1"; fi; }
W=$(mktemp -d)
apktool d -r -f -o "$W/app" "$APK" >/dev/null
# 1) remove the bundled MPXJ classes from every dex
n=0; for d in "$W"/app/smali*; do if [ -d "$d/org/mpxj" ]; then rm -rf "$d/org/mpxj"; n=$((n+1)); fi; done
[ $n -gt 0 ] || { echo "org.mpxj not found in the APK"; exit 1; }
# 2) compile your MPXJ jar to dex and add it as one more dex
mkdir "$W/dex"; "$(t d8)" --release --min-api 24 --output "$W/dex" "$JAR"
last=$(ls -d "$W"/app/smali_classes* 2>/dev/null | sed 's/.*smali_classes//' | sort -n | tail -1); next=$(( ${last:-1} + 1 ))
apktool b -o "$W/rebuilt.apk" "$W/app" >/dev/null
# Only the code is replaced: resources, manifest and native libraries stay byte-for-byte as in the original APK
# (rebuilding the whole APK with apktool loses optimized resources and the app fails to start).
cp "$APK" "$W/unsigned.apk"
zip -q -d "$W/unsigned.apk" 'classes*.dex' 'META-INF/*.SF' 'META-INF/*.RSA' 'META-INF/*.EC' 'META-INF/MANIFEST.MF' || true
mkdir "$W/code"; (cd "$W/code" && unzip -q -o ../rebuilt.apk 'classes*.dex' && zip -q -0 ../unsigned.apk classes*.dex)
i=$next; for f in "$W"/dex/classes*.dex; do cp "$f" "$W/classes$i.dex"; (cd "$W" && zip -q -0 unsigned.apk "classes$i.dex"); i=$((i+1)); done
# 3) align and sign with your key
"$(t zipalign)" -f -p 4 "$W/unsigned.apk" "$W/aligned.apk"
"$(t apksigner)" sign --ks "$KS" --ks-key-alias "$ALIAS" --out "$OUT" "$W/aligned.apk"
rm -rf "$W"
echo "wrote $OUT (dex files: $((i-1)))"
