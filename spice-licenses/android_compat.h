/* android_compat.h — 안드로이드 API 24 bionic 에 없는 함수 메우기(빌드 때 -include 로 끼움).
 * getpwent/endpwent 는 API 26 부터 있다. ngspice 는 탭 자동완성(complete.c)에서만 쓴다. */
#ifndef NG_ANDROID_COMPAT_H
#define NG_ANDROID_COMPAT_H
#include <stdlib.h>
#if defined(__ANDROID__) && __ANDROID_API__ < 26
#include <pwd.h>
static inline struct passwd *ng_compat_getpwent(void) { return (struct passwd *)0; }
static inline void ng_compat_endpwent(void) { }
#define getpwent ng_compat_getpwent
#define endpwent ng_compat_endpwent
#endif
/* bionic 에는 옛 BSD 함수 finite() 가 없다(configure 는 컴파일러 내장 때문에 있다고 잘못 판단).
 * 원 오류: com_fft.c:482 call to undeclared library function 'finite' */
#if defined(__ANDROID__)
#define finite(x) __builtin_isfinite(x)
#endif
#endif
