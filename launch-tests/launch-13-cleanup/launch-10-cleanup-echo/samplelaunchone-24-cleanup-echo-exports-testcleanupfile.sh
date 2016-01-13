#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/cleanup/cleanup-echo/suite-04-cleanup-echo-exports-test.json" --testCleanUpFile="@testspath/cleanup/cleanup-echo/testcleanupfile-04-cleanup-echo-exports.json"
aRetCode=$?


aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchone-24-cleanup-echo-exports-testcleanupfile.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

