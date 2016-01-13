echo off



node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/suite-01-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-01-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-25mb-onetest.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-00-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-25mb-nothingtocleanup.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-01-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-02-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-housekeep-minheapavailable-20mb.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-exportbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-11-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-exportbuffers.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-callbackbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-12-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-callbackbuffers.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-recordbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-13-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-recordbuffers.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-allpayloadsbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-14-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-allpayloadsbuffers.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-keepbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-15-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-keepbuffers.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-holdconfigbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-16-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-holdconfigbuffers.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-holdcallbackbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-17-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-holdcallbackbuffers.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-holdeventbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-18-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-holdeventbuffers.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-5secs-10mb-1milli-15mb-exportbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-41-housekeeping-pregrowmemory-thrashing-100mb-5secs-10mb-1milli-15mb.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)


POPD
