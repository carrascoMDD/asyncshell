echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchtogether.js" "@testspath/releasing/launchables-con-suite-01-releasing-single-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-01-releasing-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
