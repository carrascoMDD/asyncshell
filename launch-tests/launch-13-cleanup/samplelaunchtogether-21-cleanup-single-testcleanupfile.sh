#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchtogether.js" "@testspath/cleanup/launchables-con-suite-01-cleanup-single-test.json" --testCleanUpFile="@testspath/cleanup/testcleanupfile-01-cleanup-single.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup samplelaunchtogether-21-cleanup-single-testcleanupfile.sh\033[0m"},'

if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

