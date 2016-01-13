echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/releasing/releasing-echo/launchables-con-suite-01-releasing-echo-single-test.json" --testReleasingFile="@testspath/releasing/releasing-echo/testreleasingfile-01-releasing-echo-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
