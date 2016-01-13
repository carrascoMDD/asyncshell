#!/bin/bash
node  --debug-brk=8882 "../../../lib/common-test/launchers/launchmodules.js" "#testsroot/infrasvcs/httplistener/launchablemodules.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-00-04-infrasvcs launch-06-httplistener launchtogether.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

