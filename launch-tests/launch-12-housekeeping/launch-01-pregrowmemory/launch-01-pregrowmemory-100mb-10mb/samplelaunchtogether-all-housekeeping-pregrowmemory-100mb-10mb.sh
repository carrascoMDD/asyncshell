#!/bin/bash


./samplelaunchtogether-00-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-25mb-nothingtocleanup.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchone-01-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-01-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-02-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-housekeep-minheapavailable-20mb.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-11-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-exportbuffers.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-12-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-callbackbuffers.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-13-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-recordbuffers.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-14-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-allpayloadsbuffers.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-15-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-keepbuffers.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-16-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-holdconfigbuffers.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-17-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-holdcallbackbuffers.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-18-housekeeping-pregrowmemory-maxheapused-100mb-minheapavailable-10mb-holdeventbuffers.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-41-housekeeping-pregrowmemory-thrashing-100mb-5secs-10mb-1milli-15mb.sh
aRetCode=$?
aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-01-pregrowmemory samplelaunchtogether-all-housekeeping-pregrowmemory-100mb-10mb.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi




