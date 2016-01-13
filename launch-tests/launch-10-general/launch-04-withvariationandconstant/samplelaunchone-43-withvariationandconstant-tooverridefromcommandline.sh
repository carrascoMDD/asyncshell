#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/general/suite-43-withvariationandconstant-tooverridefromcommandline-test.json" --OVgeneral-test_-_withvariationandconstant-test_-_NAMEDVARIATION=7654
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-10-general launch-04-withvariationandconstant samplelaunchone-43-withvariationandconstant-tooverridefromcommandline.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

