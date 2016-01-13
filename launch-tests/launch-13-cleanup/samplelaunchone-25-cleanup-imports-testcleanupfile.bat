echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-05-cleanup-imports-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-05-cleanup-imports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
