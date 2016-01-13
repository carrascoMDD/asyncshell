echo off
node --max-old-space-size=2000 --expose-gc "../../lib/xloader-test/xloader-async-test.js"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
