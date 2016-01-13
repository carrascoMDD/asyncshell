#!/bin/bash


node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchtogether.js" "@testspath/general/launchables.json"
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-10-general launchtogether.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



pushd launch-04-withvariationandconstant

./samplelaunchtogether-all-withvariationandconstant.sh
aRetCode=$?
popd
aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-10-general launchtogether.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi



