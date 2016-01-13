echo off
node --max-old-space-size=2000 --expose-gc "../../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-5secs-10mb-1milli-15mb-exportbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-41-housekeeping-pregrowmemory-thrashing-100mb-5secs-10mb-1milli-15mb.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
