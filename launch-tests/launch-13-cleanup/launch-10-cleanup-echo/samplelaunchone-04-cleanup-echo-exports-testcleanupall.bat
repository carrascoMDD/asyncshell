echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-04-cleanup-echo-exports-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
