echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-02-cleanup-echo-subordinates-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-02-cleanup-echo-subordinates.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
