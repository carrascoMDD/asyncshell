#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-eighttests.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-47-housekeeping-fakememorysnapshots-thrashing-nobetweentestswithouttiming-millisignore-heapusedover.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-47-housekeeping-fakememorysnapshots-thrashing-thrasingalltests-millisignore-heapusedover.sh\033[0m"},'

if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

