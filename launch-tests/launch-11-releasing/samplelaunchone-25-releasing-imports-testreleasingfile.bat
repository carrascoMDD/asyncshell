echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-05-releasing-imports-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-05-releasing-imports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
