echo off
node --max-old-space-size=2000 --expose-gc "../../../../lib/common-test/launchers/launchbyname.js" "@testspath/common/directories/dependentonprebuilts/suite-10-directory-dopb-stat-basepathparmname-nodirpathname-nodirpath-expandhome-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
