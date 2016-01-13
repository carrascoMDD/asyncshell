echo off

node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-01-cleanup-single-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchtogether.js" "@testspath/cleanup/launchables-con-suite-01-cleanup-single-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-02-cleanup-subordinates-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-03-cleanup-requireds-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-04-cleanup-exports-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-05-cleanup-imports-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-01-cleanup-single-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-01-cleanup-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchtogether.js" "@testspath/cleanup/launchables-con-suite-01-cleanup-single-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-01-cleanup-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-02-cleanup-subordinates-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-02-cleanup-subordinates.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-03-cleanup-requireds-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-23-cleanup-requireds.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-04-cleanup-exports-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-24-cleanup-exports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-05-cleanup-imports-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-25-cleanup-imports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)




node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-01-cleanup-echo-single-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/cleanup/launchables-con-suite-01-cleanup-echo-single-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-02-cleanup-echo-subordinates-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-03-cleanup-echo-requireds-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-04-cleanup-echo-exports-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-05-cleanup-echo-imports-test.json" --testCleanUpAll
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-01-cleanup-echo-single-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-01-cleanup-echo-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/cleanup/launchables-con-suite-01-cleanup-echo-single-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-01-cleanup-echo-single.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-02-cleanup-echo-subordinates-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-02-cleanup-echo-subordinates.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-03-cleanup-echo-requireds-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-23-cleanup-echo-requireds.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-04-cleanup-echo-exports-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-24-cleanup-echo-exports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-05-cleanup-echo-imports-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-25-cleanup-echo-imports.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

POPD
