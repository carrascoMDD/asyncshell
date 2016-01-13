#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/launchables-100mb-10mb-onetest-holdconfigbuffers.json" --testHousekeepingFile="@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/testhousekeepingfile-16-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-holdconfigbuffers.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory launch-01-pregrowmemory-100mb-10mb samplelaunchtogether-16-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-holdconfigbuffers.sh\033[0m"},'

if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

