echo off
node --max-old-space-size=2000 --expose-gc "../../lib/pathsloader-test/pathsloader-sync-async-test.js"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
