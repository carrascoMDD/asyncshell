echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-28-housekeeping-fakememorysnapshots-expectfailure-missingattempt.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
