echo off
PUSHD ".."
node --max-old-space-size=2000 --expose-gc "./lib/launchtop.js" "@testspath/#testsroot/browserlaunchables.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
