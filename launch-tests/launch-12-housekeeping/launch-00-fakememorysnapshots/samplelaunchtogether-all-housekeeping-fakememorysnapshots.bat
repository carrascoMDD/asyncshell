echo off

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-01-housekeeping-fakememorysnapshots-singleattempt.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-02-housekeeping-fakememorysnapshots-multipleattempts.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-10-housekeeping-fakememorysnapshots-expectfailure-recommendation-parameters-howmuchtoclean-exact.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-11-housekeeping-fakememorysnapshots-expectfailure-recommendation-parameters-howmuchtoclean-minmax.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-12-housekeeping-fakememorysnapshots-expectfailure-recommendation-parameters-whattoclean.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-13-housekeeping-fakememorysnapshots-expectfailure-recommendation.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-20-housekeeping-fakememorysnapshots-expectfailure-action-parameters-howmuchtoclean-exact.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-21-housekeeping-fakememorysnapshots-expectfailure-action-parameters-howmuchtoclean-minmax.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-22-housekeeping-fakememorysnapshots-expectfailure-action-parameters-whattoclean.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-23-housekeeping-fakememorysnapshots-expectfailure-action.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-24-housekeeping-fakememorysnapshots-missingrecommendation-action.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-25-housekeeping-fakememorysnapshots-extrarecommendation-action.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-26-housekeeping-fakememorysnapshots-expectfailure-missingaction.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-27-housekeeping-fakememorysnapshots-expectfailure-extraaction.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-28-housekeeping-fakememorysnapshots-expectfailure-missingattempt.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-29-housekeeping-fakememorysnapshots-expectfailure-extraattempt.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-twotests.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-42-housekeeping-fakememorysnapshots-thrashing-singleextrattempt-millisignore-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-twotests.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-42-housekeeping-fakememorysnapshots-thrashing-singleextrattempt-millisignore-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-testanddelay2secandtest.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-43-housekeeping-fakememorysnapshots-thrashing-noextrattempt-millisover-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-testanddelay1millisecandtest.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-44-housekeeping-fakememorysnapshots-thrashing-singleextrattempt-millisunder-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-twotests.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-45-housekeeping-fakememorysnapshots-thrashing-twoextraattempts-millisignore-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-twotests.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-46-housekeeping-fakememorysnapshots-thrashing-thrasingallattempts-millisignore-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-eighttests.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-47-housekeeping-fakememorysnapshots-thrashing-nobetweentestswithouttiming-millisignore-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-delay2secs-twotests-1millisecinbetween.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-48-housekeeping-fakememorysnapshots-thrashing-testspayloads-millisunder-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-delay2secs-threetests-1millisecinbetween.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-49-housekeeping-fakememorysnapshots-thrashing-configspayloads-millisunder-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-delay10secs-ninetests-1millisecinbetween.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-50-housekeeping-fakememorysnapshots-thrashing-all-millisunder-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


POPD
