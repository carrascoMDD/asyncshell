#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-04-releasing-exports-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-04-releasing-exports.json"
aRetCode=$?


aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing samplelaunchone-24-releasing-exports-testreleasingfile.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

