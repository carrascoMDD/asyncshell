#!/bin/bash


./samplelaunchone-01-releasing-echo-single-testreleasingall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-01-releasing-echo-single-testreleasingall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi





./samplelaunchone-02-releasing-echo-subordinates-testreleasingall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi




./samplelaunchone-03-releasing-echo-requireds-testreleasingall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi




./samplelaunchone-04-releasing-echo-exports-testreleasingall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchone-05-releasing-echo-imports-testreleasingall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchone-21-releasing-echo-single-testreleasingfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchtogether-21-releasing-echo-single-testreleasingfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchone-22-releasing-echo-subordinates-testreleasingfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchone-23-releasing-echo-requireds-testreleasingfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchone-24-releasing-echo-exports-testreleasingfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchone-25-releasing-echo-imports-testreleasingfile.sh
aRetCode=$?
aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-releasing launch-10-releasing-echo samplelaunchtogether-all-releasing-echo.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi




