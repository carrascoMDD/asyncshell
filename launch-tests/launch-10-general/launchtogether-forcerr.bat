echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchtogether.js" "@testspath/general/launchables-forcerr.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
