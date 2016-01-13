echo off
node --max-old-space-size=2000 --expose-gc "../../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-02-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-housekeep-minheapavailable-20mb.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
