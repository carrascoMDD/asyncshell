echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/releasing-echo/suite-02-releasing-echo-subordinates-test.json" --testReleasingFile="@testspath/releasing/releasing-echo/testreleasingfile-02-releasing-echo-subordinates.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
