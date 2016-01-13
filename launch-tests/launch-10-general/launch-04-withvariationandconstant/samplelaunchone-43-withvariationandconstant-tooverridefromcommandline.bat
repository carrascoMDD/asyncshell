echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/general/suite-43-withvariationandconstant-tooverridefromcommandline-test.json" --OVgeneral-test_-_withvariationandconstant-test_-_NAMEDVARIATION=7654
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
