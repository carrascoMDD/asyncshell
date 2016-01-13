#!/bin/bash


pushd launch-00-fakememorysnapshots
./samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh
aRetCode=$?
popd
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping samplelaunchtogether-all-housekeeping.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi







pushd launch-01-pregrowmemory
./samplelaunchtogether-all-housekeeping-pregrowmemory.sh
aRetCode=$?
popd
aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping samplelaunchtogether-all-housekeeping.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi







