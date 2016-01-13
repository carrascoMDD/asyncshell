echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/releasing-echo/suite-03-releasing-echo-requireds-test.json" --testReleasingFile="@testspath/releasing/releasing-echo/testreleasingfile-23-releasing-echo-requireds.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
