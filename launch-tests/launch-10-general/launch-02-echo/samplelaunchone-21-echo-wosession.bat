echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/general/suite-21-echo-wosession-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
