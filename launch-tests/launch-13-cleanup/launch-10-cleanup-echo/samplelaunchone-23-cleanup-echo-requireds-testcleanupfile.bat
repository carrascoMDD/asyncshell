echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-03-cleanup-echo-requireds-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-23-cleanup-echo-requireds.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
