echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/releasing-echo/suite-04-releasing-echo-exports-test.json" --testReleasingFile="@testspath/releasing/releasing-echo/testreleasingfile-04-releasing-echo-exports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
