#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-twotests.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-45-housekeeping-fakememorysnapshots-thrashing-twoextraattempts-millisignore-heapusedover.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-45-housekeeping-fakememorysnapshots-thrashing-twoextraattempts-millisignore-heapusedover.sh\033[0m"},'

if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

