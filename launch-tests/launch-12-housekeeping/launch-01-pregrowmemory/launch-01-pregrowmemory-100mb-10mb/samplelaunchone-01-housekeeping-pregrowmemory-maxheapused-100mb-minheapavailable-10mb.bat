echo off
node --max-old-space-size=2000 --expose-gc "../../../../lib/common-test/launchers/launchbyname.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/suite-01-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-01-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
