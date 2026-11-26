#!/bin/bash
# Builds the modified MPXJ jar used by MPP Viewer (mpxj-16.11.0-fk1.jar) from the unmodified MPXJ 16.11.0 jar and our patch.
# Usage: make-patched-jar.sh <mpxj-16.11.0.jar> <mpxj-16.11.0-sources.jar> <mpxj-16.11.0-fk1.patch> <out.jar>
# Needs: a JDK 17+ (javac, jar) and patch. The other MPXJ dependencies are not needed to compile the one patched class
# if you pass the two jars it refers to: CP=xercesImpl-2.12.2.jar:jakarta.xml.bind-api-3.0.1.jar
set -euo pipefail
JAR=$(cd "$(dirname "$1")" && pwd)/$(basename "$1"); SRC=$(cd "$(dirname "$2")" && pwd)/$(basename "$2"); PATCH=$(cd "$(dirname "$3")" && pwd)/$(basename "$3"); OUT=$4
W=$(mktemp -d); mkdir -p "$W/src" "$W/cls"
(cd "$W/src" && unzip -q "$SRC" org/mpxj/common/UnmarshalHelper.java)
# the patch was made against mpxj-src/src/… and patch/… paths; apply it to the single file
patch -s "$W/src/org/mpxj/common/UnmarshalHelper.java" < "$PATCH"
javac -nowarn -cp "$JAR${CP:+:$CP}" -d "$W/cls" "$W/src/org/mpxj/common/UnmarshalHelper.java"
cp "$JAR" "$OUT"
(cd "$W/cls" && jar uf "$OLDPWD/$OUT" org/mpxj/common/UnmarshalHelper*.class 2>/dev/null || jar uf "$OUT" org/mpxj/common/UnmarshalHelper*.class)
echo "wrote $OUT"
