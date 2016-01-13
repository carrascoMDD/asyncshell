#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../../lib/common-test/launchers/launchbyname.js" "@testspath/housekeeping/pregrowmemory/pregrowmemory-100mb-10mb/suite-01-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-01-test.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory launch-01-pregrowmemory-100mb-10mb samplelaunchone-01-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

