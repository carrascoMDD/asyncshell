#!/bin/bash

pushd launch-12-housekeeping
./samplelaunchtogether-all-housekeeping.sh
aRetCode=$?
popd
aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launchhousekeeping.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi







