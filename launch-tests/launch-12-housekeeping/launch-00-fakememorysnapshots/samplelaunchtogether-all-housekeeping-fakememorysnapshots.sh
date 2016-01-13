#!/bin/bash



./samplelaunchtogether-launchables-con-suite-01-housekeeping-fakememorysnapshots-1Bx1-test.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-01-housekeeping-fakememorysnapshots-singleattempt.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-02-housekeeping-fakememorysnapshots-multipleattempts.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-03-housekeeping-fakememorysnapshots-underminhowmuchtoclean.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-10-housekeeping-fakememorysnapshots-expectfailure-recommendation-parameters-howmuchtoclean-exact.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-11-housekeeping-fakememorysnapshots-expectfailure-recommendation-parameters-howmuchtoclean-minmax.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-12-housekeeping-fakememorysnapshots-expectfailure-recommendation-parameters-whattoclean.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-13-housekeeping-fakememorysnapshots-expectfailure-recommendation.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi










./samplelaunchtogether-20-housekeeping-fakememorysnapshots-expectfailure-action-parameters-howmuchtoclean-exact.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-21-housekeeping-fakememorysnapshots-expectfailure-action-parameters-howmuchtoclean-minmax.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-22-housekeeping-fakememorysnapshots-expectfailure-action-parameters-whattoclean.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-23-housekeeping-fakememorysnapshots-expectfailure-action.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi








./samplelaunchtogether-24-housekeeping-fakememorysnapshots-expectfailure-missingrecommendation.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-25-housekeeping-fakememorysnapshots-expectfailure-extrarecommendation.sh
aRetCode=$?
aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi




./samplelaunchtogether-26-housekeeping-fakememorysnapshots-expectfailure-missingaction.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-27-housekeeping-fakememorysnapshots-expectfailure-extraaction.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-28-housekeeping-fakememorysnapshots-expectfailure-missingattempt.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi





./samplelaunchtogether-29-housekeeping-fakememorysnapshots-expectfailure-extraattempt.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi




./samplelaunchtogether-41-housekeeping-fakememorysnapshots-thrashing-noextrattempt-millisignore-heapusedunder.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi




./samplelaunchtogether-42-housekeeping-fakememorysnapshots-thrashing-singleextrattempt-millisignore-heapusedover.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi




./samplelaunchtogether-43-housekeeping-fakememorysnapshots-thrashing-singleextrattempt-millisunder-heapusedover.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-44-housekeeping-fakememorysnapshots-thrashing-singleextrattempt-millisunder-heapusedover.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-45-housekeeping-fakememorysnapshots-thrashing-twoextraattempts-millisignore-heapusedover.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-46-housekeeping-fakememorysnapshots-thrashing-thrasingallattempts-millisignore-heapusedover.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-47-housekeeping-fakememorysnapshots-thrashing-nobetweentestswithouttiming-millisignore-heapusedover.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-48-housekeeping-fakememorysnapshots-thrashing-testspayloads-millisunder-heapusedover.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi



./samplelaunchtogether-49-housekeeping-fakememorysnapshots-thrashing-configspayloads-millisunder-heapusedover.sh
aRetCode=$?
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
if [ $aRetCode -ne 0 ]
then
    echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
    if [ $1 ]
    then
        return $aRetCode
    else
        exit $aRetCode
    fi
fi


./samplelaunchtogether-50-housekeeping-fakememorysnapshots-thrashing-all-millisunder-heapusedover.sh
aRetCode=$?
aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-12-housekeeping launch-00-fakememorysnapshots samplelaunchtogether-all-housekeeping-fakememorysnapshots.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi
