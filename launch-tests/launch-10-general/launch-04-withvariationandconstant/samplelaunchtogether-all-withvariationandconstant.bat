echo off


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/general/suite-40-withvariationandconstant-defaults-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/general/suite-41-withvariationandconstant-defaults-fail-variation-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/general/suite-42-withvariationandconstant-defaults-fail-constant-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/general/suite-43-withvariationandconstant-tooverridefromcommandline-test.json" --OVgeneral-test_-_withvariationandconstant-test_-_NAMEDVARIATION=7654
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/general/suite-44-withvariationandconstant-tooverridefromcommandline-fail-test.json" --OVgeneral-test_-_withvariationandconstant-test_-_NAMEDVARIATION=7654
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


POPD
