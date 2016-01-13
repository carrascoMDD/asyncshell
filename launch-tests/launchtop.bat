echo off
node --max-old-space-size=2000 --expose-gc "../lib/launchtop.js" "@testspath/#testsroot/toplaunchables.json"
if ERRORLEVEL 1 (
    exit /B %ERRORLEVEL%
)
