#!/bin/bash


pushd launch-01-pregrowmemory-100mb-10mb
./samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh
aRetCode=$?
popd
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi






