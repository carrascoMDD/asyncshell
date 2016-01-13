echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/releasing-echo/suite-05-releasing-echo-imports-test.json" --testReleasingAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
