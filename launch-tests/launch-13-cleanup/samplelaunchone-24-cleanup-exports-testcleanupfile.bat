echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-04-cleanup-exports-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-04-cleanup-exports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
