echo off
node --max-old-space-size=2000 --expose-gc "../../lib/xloader-test/xloader-sync-test.js"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
