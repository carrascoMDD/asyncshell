echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-03-cleanup-requireds-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
