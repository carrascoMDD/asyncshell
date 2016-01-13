#!/bin/bash


./samplelaunchone-40-withvariationandconstant-defaults.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-10-general launch-04-withvariationandconstant samplelaunchtogether-all-withvariationandconstant.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchone-41-withvariationandconstant-defaults-fail-variation.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-10-general launch-04-withvariationandconstant samplelaunchtogether-all-withvariationandconstant.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchone-42-withvariationandconstant-defaults-fail-constant.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-10-general launch-04-withvariationandconstant samplelaunchtogether-all-withvariationandconstant.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchone-43-withvariationandconstant-tooverridefromcommandline.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-10-general launch-04-withvariationandconstant samplelaunchtogether-all-withvariationandconstant.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchone-44-withvariationandconstant-tooverridefromcommandline-fail.sh
aRetCode=$?
aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-10-general launch-04-withvariationandconstant samplelaunchtogether-all-withvariationandconstant.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi


