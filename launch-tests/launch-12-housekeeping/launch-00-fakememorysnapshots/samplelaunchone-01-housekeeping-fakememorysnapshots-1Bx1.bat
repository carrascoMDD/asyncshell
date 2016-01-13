echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/housekeeping/fakememorysnapshots/suite-01-housekeeping-fakememorysnapshots-1Bx1-test"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
