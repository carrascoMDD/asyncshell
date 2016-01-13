echo off
node --max-old-space-size=2000 --expose-gc "../../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-holdconfigbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-16-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-holdconfigbuffers.json"

if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
