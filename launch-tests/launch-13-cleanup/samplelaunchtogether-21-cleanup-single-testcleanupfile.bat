echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchtogether.js" "@testspath/cleanup/launchables-con-suite-01-cleanup-single-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-01-cleanup-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
