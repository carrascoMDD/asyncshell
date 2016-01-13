echo off

node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-01-releasing-single-test.json" --testReleasingAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchtogether.js" "@testspath/releasing/launchables-con-suite-01-releasing-single-test.json" --testReleasingAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-02-releasing-subordinates-test.json" --testReleasingAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-03-releasing-requireds-test.json" --testReleasingAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-04-releasing-exports-test.json" --testReleasingAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-05-releasing-imports-test.json" --testReleasingAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-01-releasing-single-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-01-releasing-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchtogether.js" "@testspath/releasing/launchables-con-suite-01-releasing-single-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-01-releasing-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-02-releasing-subordinates-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-02-releasing-subordinates.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-03-releasing-requireds-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-23-releasing-requireds.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-04-releasing-exports-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-24-releasing-exports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-05-releasing-imports-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-25-releasing-imports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

POPD
