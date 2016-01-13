echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-02-cleanup-subordinates-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-02-cleanup-subordinates.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
