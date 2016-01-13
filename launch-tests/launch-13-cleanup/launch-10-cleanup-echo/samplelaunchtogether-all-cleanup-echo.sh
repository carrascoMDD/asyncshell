#!/bin/bash


./samplelaunchone-01-cleanup-echo-single-testcleanupall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-01-cleanup-echo-single-testcleanupall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi





./samplelaunchone-02-cleanup-echo-subordinates-testcleanupall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi




./samplelaunchone-03-cleanup-echo-requireds-testcleanupall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi




./samplelaunchone-04-cleanup-echo-exports-testcleanupall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchone-05-cleanup-echo-imports-testcleanupall.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchone-21-cleanup-echo-single-testcleanupfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchtogether-21-cleanup-echo-single-testcleanupfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchone-22-cleanup-echo-subordinates-testcleanupfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchone-23-cleanup-echo-requireds-testcleanupfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchone-24-cleanup-echo-exports-testcleanupfile.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi

./samplelaunchone-25-cleanup-echo-imports-testcleanupfile.sh
aRetCode=$?
aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-11-cleanup launch-10-cleanup-echo samplelaunchtogether-all-cleanup-echo.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi




