echo off
node --max-old-space-size=2000 --expose-gc "../lib/launchtop.js" "@testspath/#testsroot/toplaunchables.json"  --maxHeapUsed=256 --minHeapAvailable=10
if ERRORLEVEL 1 (
    exit /B %ERRORLEVEL%
)
