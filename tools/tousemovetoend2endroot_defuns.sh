#!/bin/bash



# ***************************************************************************
#
# Copyright 2014 2015 Antonio Carrasco Valero
# te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org
#
#Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
# {{License2}}
#
# {{Licensed1}}
# {{Licensed2}}
#
# ***************************************************************************




function fSpringnut_launchSingle {
    local theScriptname=$1
    local theSubscript=$2
    local theJavascriptname=$3

    aRetCodeSingle=0

    echo
    # Pass something like 1 as argument to a script to avoid creating log and result files.
    if [ $theSubscript ]
    then
        echo "${theScriptname} como SUBSCRIPT"
    else
        echo "${theScriptname} como ROOTSCRIPT"
    fi
    echo




    source $Springnut_nvm

    nvm use default

    node -v


    if [  $theSubscript ]
    then
        echo ',{"scriptbegin":"'$theScriptname'"}'

        node --max-old-space-size=2000 --expose-gc "${theJavascriptname}"
        aRetCodeSingle=$?

        echo ',{"aRetCode":'$aRetCodeSingle'},'
        echo ',{"exitCode":'$aRetCodeSingle'}'
        echo ',{"scriptend":"'$theScriptname'"}'

    else
       local aTimestamp=`date +%Y%m%d%H%M%S_%N`

        local aTestlogfile="${Springnut_test_logs}/springnut_testlog_${aTimestamp}_${theScriptname}.txt"
        echo "aTestlogfile=${aTestlogfile}"

        local aTestlogpipe="${Springnut_test_logs}/springnut_testlog_${aTimestamp}_${theScriptname}.pipe"
        echo "aTestlogpipe=${aTestlogfile}"

        local aTestresultfile="${Springnut_test_results}/springnut_testresult_${aTimestamp}_${theScriptname}.json"
        echo "aTestresultfile=${aTestlogfile}"

        touch "${aTestlogfile}"


        mkfifo "${aTestlogpipe}"

        local aPidtee
        tee -a ${aTestlogfile} < "${aTestlogpipe}" & aPidtee=$!
        echo "aPidtee=${aPidtee}"

        exec 1> $aTestlogpipe
        exec 2> $aTestlogpipe

        echo "["

        echo '{'
        echo '"scriptbegin":"'$theScriptname'",'
        echo '"aPidtee":'$aPidtee','
        echo '"aTestlogfile":"'$aTestlogfile'",'
        echo '"aTestlogpipe":"'$aTestlogpipe'",'
        echo '"aTestresultfile":"'$aTestresultfile'"'
        echo '}'

        touch "${aTestresultfile}"


        node --max-old-space-size=2000 --expose-gc "${theJavascriptname}" "${aTestresultfile}"
        aRetCodeSingle=$?

        echo ',{"exit":'$aRetCodeSingle', "file":"'$theScriptname'"}'

        echo ']'


        echo ""


        # echo "wait ${aPidtee}"
        # wait $aPidtee

        # echo "fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}"
        # fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}

        rm "${aTestlogpipe}"
    fi
}










function fSpringnut_launchMatchingInDir_multiOutput {
    theScriptname=$1
    theSubscript=$2

    aRetCodeMatchingInDir=0

    echo
    # Pass something like 1 as argument to a script to avoid creating log and result files.
    if [ $theSubscript ]
    then
       echo "${theScriptname} como SUBSCRIPT"
    else
       echo "${theScriptname} como ROOTSCRIPT"
    fi
    echo




    aThisdir=`pwd`


    if [  $theSubscript ]
    then
        local x=1
    else
        local aTimestamp=`date +%Y%m%d%H%M%S_%N`

        local aTestlogdir="${Springnut_test_logs}/springnut_testlog_${aTimestamp}_${theScriptname}"
        echo "aTestlogdir=${aTestlogdir}"

        local aTestresultdir="${Springnut_test_results}/springnut_testresult_${aTimestamp}_${theScriptname}"
        echo "aTestresultdir=${aTestresultdir}"

        mkdir "${aTestlogdir}"

        mkdir "${aTestresultdir}"

        echo
    fi




    for aFile in ./tee-launch-*.sh
    do

        if [  $theSubscript ]
        then
            local x2=1
        else
            local aTimestamp=`date +%Y%m%d%H%M%S_%N`

            local aTestlogfile="${aTestlogdir}/${aFile}.txt"
            echo "aTestlogfile=${aTestlogfile}"

            local aTestlogpipe="${aTestlogdir}/${aFile}.pipe"
            echo "aTestlogpipe=${aTestlogfile}"

            local aTestresultfile="${aTestresultdir}/${aFile}.json"
            echo "aTestresultfile=${aTestlogfile}"

            touch "${aTestlogfile}"


            mkfifo "${aTestlogpipe}"

            local aPidtee
            tee -a ${aTestlogfile} < "${aTestlogpipe}" & aPidtee=$!
            echo "aPidtee=${aPidtee}"

            exec 1> $aTestlogpipe
            exec 2> $aTestlogpipe

            echo "["

            echo '{'
            echo '"aPidtee":'$aPidtee','
            echo '"aTestlogfile":"'$aTestlogfile'",'
            echo '"aTestlogpipe":"'$aTestlogpipe'",'
            echo '"aTestresultfile":"'$aTestresultfile'"'
            echo '}'

            touch "${aTestresultfile}"

            echo
        fi

        echo
        echo
        echo $aFile

        local aRetCode=0
        bash $aFile 1
        aRetCode=$?

        echo ',{'
        echo '"aRetCode":'$aRetCode','
        echo '}'


        if  [ ${aRetCode} -ne 0 ]
        then
            aRetCodeMatchingInDir=$aRetCode

            echo ',{"reason": "Prematurely exiting tests in directory"}'

            break
        fi

        echo
        echo

        if [  $theSubscript ]
        then
            echo ""
        else
            # echo "wait ${aPidtee}"
            # wait $aPidtee

            # echo "fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}"
            # fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}

            rm "${aTestlogpipe}"
        fi

    done


    echo "ExitCode : ${aRetCodeMatchingInDir}"
}










function fSpringnut_launchMatchingSubdirs_multiOutput {
    theScriptname=$1
    theSubscript=$2

    aRetCodeMatchingSubdirs=0

    echo
    # Pass something like 1 as argument to a script to avoid creating log and result files.
    if [ $theSubscript ]
    then
       echo "${theScriptname} como SUBSCRIPT"
    else
       echo "${theScriptname} como ROOTSCRIPT"
    fi
    echo




    aThisdir=`pwd`


    if [  $theSubscript ]
    then
        local x=1
    else
       local aTimestamp=`date +%Y%m%d%H%M%S_%N`

        local aTestlogfile="${Springnut_test_logs}/springnut_testlog_${aTimestamp}_${theScriptname}.txt"
        echo "aTestlogfile=${aTestlogfile}"

        local aTestlogpipe="${Springnut_test_logs}/springnut_testlog_${aTimestamp}_${theScriptname}.pipe"
        echo "aTestlogpipe=${aTestlogfile}"

        local aTestresultfile="${Springnut_test_results}/springnut_testresult_${aTimestamp}_${theScriptname}.json"
        echo "aTestresultfile=${aTestlogfile}"

        touch "${aTestlogfile}"


        mkfifo "${aTestlogpipe}"

        local aPidtee
        tee -a ${aTestlogfile} < "${aTestlogpipe}" & aPidtee=$!
        echo "aPidtee=${aPidtee}"

        exec 1> $aTestlogpipe
        exec 2> $aTestlogpipe

        echo "["

        echo '{'
        echo '"aPidtee":'$aPidtee','
        echo '"aTestlogfile":"'$aTestlogfile'",'
        echo '"aTestlogpipe":"'$aTestlogpipe'",'
        echo '"aTestresultfile":"'$aTestresultfile'"'
        echo '}'

        touch "${aTestresultfile}"
    fi



    echo "Launching tests in directory  ${aThisdir}"




    for aDirectory in ./launch-*/
    do

        echo
        echo
        echo
        echo


        echo $aDirectory
        pushd $aDirectory
        echo

        local aRetCode=0
        bash launchall.sh 1
        aRetCode=$?
        echo "Returned ${aRetCode}"

        popd


        if  [ ${aRetCode} -ne 0 ]
        then
            aRetCodeMatchingSubdirs=$aRetCode

            echo ',{"reason": "Prematurely exiting tests in directory"}'

            break
        fi


        if [  $theSubscript ]
        then
            echo ""
        else
            # echo "wait ${aPidtee}"
            # wait $aPidtee

            # echo "fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}"
            # fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}

            rm "${aTestlogpipe}"
        fi

        echo
        echo
        echo
        echo

    done




    echo "ExitCode : ${aRetCodeMatchingSubdirs}"
}









function fSpringnut_launchMatchingInDir {
    theScriptname=$1
    theSubscript=$2

    aRetCodeMatchingInDir=0

    echo
    # Pass something like 1 as argument to a script to avoid creating log and result files.
    if [ $theSubscript ]
    then
       echo "${theScriptname} como SUBSCRIPT"
    else
       echo "${theScriptname} como ROOTSCRIPT"
    fi
    echo




    aThisdir=`pwd`


    if [  $theSubscript ]
    then
        echo ""
    else
        local aTimestamp=`date +%Y%m%d%H%M%S_%N`


        local aTestlogpath="${Springnut_test_logs}/springnut_testlog_${aTimestamp}_${theScriptname}.txt"

        touch "${aTestlogpath}"
        echo "aTestlogpath=${aTestlogpath}"


        local aTestlogpipe="${Springnut_test_logs}/springnut_testlog_${aTimestamp}_${theScriptname}.pipe"
        echo "aTestlogpipe=${aTestlogpath}"


        mkfifo "${aTestlogpipe}"

        local aPidtee
        tee -a ${aTestlogpath} < "${aTestlogpipe}" & aPidtee=$!
        echo "aPidtee=${aPidtee}"

        exec 1> $aTestlogpipe
        exec 2> $aTestlogpipe




        local aTestresultpath="${Springnut_test_results}/springnut_testresult_${aTimestamp}_${theScriptname}.txt"
        echo "aTestresultpath=${aTestlogpath}"

        touch "${aTestresultpath}"


        echo "LOGFILE ${aTestlogpath}"

        echo "RESULTFILE ${aTestresultpath}"
        echo
    fi



    echo "Launching tests ${theScriptname} in directory ${aThisdir}"




    for aFile in ./tee-launch-*.sh
    do

        echo
        echo
        echo $aFile

        local aRetCode=0
        bash $aFile 1
        aRetCode=$?
        echo "Returned ${aRetCode}"


        if  [ ${aRetCode} -ne 0 ]
        then
            aRetCodeMatchingInDir=$aRetCode

            echo "Prematurely exiting tests  ${theScriptname}  in directory  ${aThisdir}"
            echo "EXIT ${theScriptname}  code="${aRetCodeMatchingInDir}

            break
        fi

        echo
        echo

    done


    echo "Completed tests  ${theScriptname} in directory  ${aThisdir}"
    echo "EXIT ${theScriptname} code="${aRetCodeMatchingInDir}



    if [  $theSubscript ]
    then
        echo ""
    else
        # echo "wait ${aPidtee}"
        # wait $aPidtee

        # echo "fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}"
        # fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}

        echo "rm ${aTestlogpipe}"
        rm "${aTestlogpipe}"
    fi
}










function fSpringnut_launchMatchingSubdirs {
    theScriptname=$1
    theSubscript=$2

    aRetCodeMatchingSubdirs=0

    echo
    # Pass something like 1 as argument to a script to avoid creating log and result files.
    if [ $theSubscript ]
    then
       echo "${theScriptname} como SUBSCRIPT"
    else
       echo "${theScriptname} como ROOTSCRIPT"
    fi
    echo




    aThisdir=`pwd`


    if [  $theSubscript ]
    then
        echo ""
    else
        aTimestamp=`date +%Y%m%d%H%M%S_%N`



        local aTestlogpath="${Springnut_test_logs}/springnut_testlog_${aTimestamp}_${theScriptname}.txt"

        touch "${aTestlogpath}"
        echo "aTestlogpath=${aTestlogpath}"


        local aTestlogpipe="${Springnut_test_logs}/springnut_testlog_${aTimestamp}_${theScriptname}.pipe"
        echo "aTestlogpipe=${aTestlogpath}"


        mkfifo "${aTestlogpipe}"

        local aPidtee
        tee -a ${aTestlogpath} < "${aTestlogpipe}" & aPidtee=$!
        echo "aPidtee=${aPidtee}"

        exec 1> $aTestlogpipe
        exec 2> $aTestlogpipe




        local aTestresultpath="${Springnut_test_results}/springnut_testresult_${aTimestamp}_${theScriptname}.txt"
        echo "aTestresultpath=${aTestlogpath}"

        touch "${aTestresultpath}"

    fi



    echo "Launching tests  ${theScriptname} in directory  ${aThisdir}"




    for aDirectory in ./launch-*/
    do

        echo
        echo
        echo
        echo


        echo $aDirectory
        pushd $aDirectory
        echo

        local aRetCode=0
        bash tee-launchall.sh 1
        aRetCode=$?
        echo "Returned ${aRetCode}"

        popd


        if  [ ${aRetCode} -ne 0 ]
        then
            aRetCodeMatchingSubdirs=$aRetCode

            echo "Prematurely exiting tests  ${theScriptname} in directory  ${aThisdir}"
            echo "EXIT ${theScriptname} code="${aRetCodeMatchingSubdirs}

            break
        fi


        echo
        echo
        echo
        echo

    done

    echo "Completed tests ${theScriptname}  in directory  ${aThisdir}"
    echo "EXIT ${theScriptname}  code="${aRetCodeMatchingSubdirs}



    if [  $theSubscript ]
    then
        echo ""
    else
        # echo "wait ${aPidtee}"
        # wait $aPidtee

        # echo "fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}"
        # fuser -TERM -k -w ${aTestlogpipe}; sleep 1; fuser -k -w ${aTestlogpipe}

        echo "rm ${aTestlogpipe}"
        rm "${aTestlogpipe}"
    fi
}








