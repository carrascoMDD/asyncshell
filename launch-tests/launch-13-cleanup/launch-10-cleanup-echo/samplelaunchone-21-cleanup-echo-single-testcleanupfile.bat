echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-01-cleanup-echo-single-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-01-cleanup-echo-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
