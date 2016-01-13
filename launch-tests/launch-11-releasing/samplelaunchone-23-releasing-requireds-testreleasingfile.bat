echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-03-releasing-requireds-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-23-releasing-requireds.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
