#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/releasing/releasing-echo/launchables-con-suite-01-releasing-echo-single-test.json" --testReleasingFile="@testspath/releasing/releasing-echo/testreleasingfile-01-releasing-echo-single.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-21-releasing-echo-single-testreleasingfile.sh\033[0m"},'

if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

