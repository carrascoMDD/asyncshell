#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/releasing-echo/suite-03-releasing-echo-requireds-test.json" --testReleasingFile="@testspath/releasing/releasing-echo/testreleasingfile-03-releasing-echo-requireds.json"
aRetCode=$?


aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchone-23-releasing-echo-requireds-testreleasingfile.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

