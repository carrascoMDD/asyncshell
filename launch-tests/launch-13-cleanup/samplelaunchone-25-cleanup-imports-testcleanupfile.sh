#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/suite-05-cleanup-imports-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-05-cleanup-imports.json"
aRetCode=$?


aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup samplelaunchone-25-cleanup-imports-testcleanupfile.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

