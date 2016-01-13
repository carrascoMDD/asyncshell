echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-05-cleanup-echo-imports-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-05-cleanup-echo-imports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
