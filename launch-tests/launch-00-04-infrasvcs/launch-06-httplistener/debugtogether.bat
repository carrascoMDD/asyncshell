echo off
node debug --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchmodules.js" "#testsroot/infrasvcs/httplistener/launchablemodules.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
