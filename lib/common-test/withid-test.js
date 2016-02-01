'use strict';

/*
 withid-test.js
 Created 201408050911
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
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
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 */


(function () {
    var aMod_definer = function( theM_common_test,
                                 theM_overrider) {

        var ModuleName     = "withid-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.RELEASE_WITHID_ID    = false;
            theToInit.RELEASE_WITHID_TITLE = false;

        };





        var pgInitFromModuleVariations = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleVariations) {
                if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                }
            }
        };


        var ModuleVariations = { };
        pgInitWithModuleVariations( ModuleVariations);
        theM_overrider.pgOverrideModuleVariations( ModuleFullName, ModuleVariations);






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }
        };



        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
        pgInitWithModuleConstants( ModuleConstants);




        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };







        var aWithIdTest_Prototype = (function() {


            var aPrototype = new theM_common_test.CommonTest_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_common_test.CommonTest_Prototype;

            aPrototype._v_Type = "WithIdTest";

            aPrototype._v_Prototype_WithIdTest = aPrototype;

            aPrototype._v_Id     = null;
            aPrototype._v_Title  = null;

            aPrototype._v_Date          = null;
            aPrototype._v_DateStr       = null;
            aPrototype._v_Timestamp     = null;
            aPrototype._v_TimestampStr  = null;
            aPrototype._v_Millis        = null;
            aPrototype._v_MillisStr     = null;

            aPrototype._v_DateWOsepsStr               = null;
            aPrototype._v_TimestampWOsepsStr          = null;
            aPrototype._v_YesterdayDateWOsepsStr      = null;
            aPrototype._v_YesterdayTimestampWOsepsStr = null;
            aPrototype._v_TomorrowDateWOsepsStr       = null;
            aPrototype._v_TomorrowTimestampWOsepsStr  = null;

            aPrototype._v_YesterdayDate          = null;
            aPrototype._v_YesterdayDateStr       = null;
            aPrototype._v_YesterdayTimestamp     = null;
            aPrototype._v_YesterdayTimestampStr  = null;
            aPrototype._v_YesterdayMillis        = null;
            aPrototype._v_YesterdayMillisStr     = null;

            aPrototype._v_TomorrowDate          = null;
            aPrototype._v_TomorrowDateStr       = null;
            aPrototype._v_TomorrowTimestamp     = null;
            aPrototype._v_TomorrowTimestampStr  = null;
            aPrototype._v_TomorrowMillis        = null;
            aPrototype._v_TomorrowMillisStr     = null;


            aPrototype._v_SecondBeforeDate           = null;
            aPrototype._v_SecondBeforeDateStr        = null;
            aPrototype._v_SecondBeforeTimestamp      = null;
            aPrototype._v_SecondBeforeTimestampStr   = null;
            aPrototype._v_SecondBeforeMillis         = null;
            aPrototype._v_SecondBeforeMillisStr      = null;

            aPrototype._v_SecondAfterDate            = null;
            aPrototype._v_SecondAfterDateStr         = null;
            aPrototype._v_SecondAfterTimestamp       = null;
            aPrototype._v_SecondAfterTimestampStr    = null;
            aPrototype._v_SecondAfterMillis          = null;
            aPrototype._v_SecondAfterMillisStr       = null;



            var _pInit = function( theTitle) {

                this._pInit_WithId( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_WithId = function( theTitle) {


                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Common.apply( this, []);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Id = null;
                if( this._v_Id == null) {
                    this._v_Id = "";
                }

                this._v_Title = theTitle;
                if( this._v_Title == null) {
                    this._v_Title = "";
                }

                this.pInitDates();
            };
            if( _pInit_WithId){}/* CQT */
            aPrototype._pInit_WithId = _pInit_WithId;






            var pInitDates = function( ) {

                this._v_Timestamp    = new Date();
                this._v_TimestampStr = this.fDateToTimestampStr( this._v_Timestamp);

                this._v_Date         = this.fDateToDate(         this._v_Timestamp);
                this._v_DateStr      = this.fDateToDateStr(      this._v_Timestamp);

                this._v_Millis       = this._v_Timestamp.getTime();
                this._v_MillisStr    = "" + this._v_Millis;


                this._v_YesterdayTimestamp    = this.fDayBefore(          this._v_Timestamp);
                this._v_YesterdayTimestampStr = this.fDateToTimestampStr( this._v_YesterdayTimestamp);

                this._v_YesterdayDate         = this.fDateToDate(         this._v_YesterdayTimestamp);
                this._v_YesterdayDateStr      = this.fDateToDateStr(      this._v_YesterdayTimestamp);

                this._v_YesterdayMillis       = this._v_YesterdayTimestamp.getTime();
                this._v_YesterdayMillisStr    = "" + this._v_YesterdayMillis;


                this._v_TomorrowTimestamp    = this.fDayAfter(           this._v_Timestamp);
                this._v_TomorrowTimestampStr = this.fDateToTimestampStr( this._v_TomorrowTimestamp);

                this._v_TomorrowDate         = this.fDateToDate(         this._v_TomorrowTimestamp);
                this._v_TomorrowDateStr      = this.fDateToDateStr(      this._v_TomorrowTimestamp);



                this._v_TomorrowMillis       = this._v_TomorrowTimestamp.getTime();
                this._v_TomorrowMillisStr    = "" + this._v_TomorrowMillis;



                this._v_SecondBeforeTimestamp    = this.fSecondBefore(          this._v_Timestamp);
                this._v_SecondBeforeTimestampStr = this.fDateToTimestampStr( this._v_SecondBeforeTimestamp);

                this._v_SecondBeforeDate         = this.fDateToDate(         this._v_SecondBeforeTimestamp);
                this._v_SecondBeforeDateStr      = this.fDateToDateStr(      this._v_SecondBeforeTimestamp);

                this._v_SecondBeforeMillis       = this._v_SecondBeforeTimestamp.getTime();
                this._v_SecondBeforeMillisStr    = "" + this._v_SecondBeforeMillis;


                this._v_SecondAfterTimestamp    = this.fSecondAfter(        this._v_Timestamp);
                this._v_SecondAfterTimestampStr = this.fDateToTimestampStr( this._v_SecondAfterTimestamp);

                this._v_SecondAfterDate         = this.fDateToDate(         this._v_SecondAfterTimestamp);
                this._v_SecondAfterDateStr      = this.fDateToDateStr(      this._v_SecondAfterTimestamp);

                this._v_SecondAfterMillis       = this._v_SecondAfterTimestamp.getTime();
                this._v_SecondAfterMillisStr    = "" + this._v_SecondAfterMillis;


                this._v_DateWOsepsStr               = this.fDateToDateWOsepsStr(      this._v_Timestamp);
                this._v_TimestampWOsepsStr          = this.fDateToTimestampWOsepsStr( this._v_Timestamp);
                this._v_YesterdayDateWOsepsStr      = this.fDateToDateWOsepsStr(      this._v_YesterdayTimestamp);
                this._v_YesterdayTimestampWOsepsStr = this.fDateToTimestampWOsepsStr( this._v_YesterdayTimestamp);
                this._v_TomorrowDateWOsepsStr       = this.fDateToDateWOsepsStr(      this._v_TomorrowTimestamp);
                this._v_TomorrowTimestampWOsepsStr  = this.fDateToTimestampWOsepsStr( this._v_TomorrowTimestamp);


                if( this._v_Timestamp){}/* CQT */
                if( this._v_TimestampStr){}/* CQT */
                if( this._v_Date){}/* CQT */
                if( this._v_DateStr){}/* CQT */
                if( this._v_Millis){}/* CQT */
                if( this._v_MillisStr){}/* CQT */

                if( this._v_YesterdayTimestamp){}/* CQT */
                if( this._v_YesterdayTimestampStr){}/* CQT */
                if( this._v_YesterdayDate){}/* CQT */
                if( this._v_YesterdayDateStr){}/* CQT */
                if( this._v_YesterdayMillis){}/* CQT */
                if( this._v_YesterdayMillisStr){}/* CQT */

                if( this._v_TomorrowTimestamp){}/* CQT */
                if( this._v_TomorrowTimestampStr){}/* CQT */
                if( this._v_TomorrowDate){}/* CQT */
                if( this._v_TomorrowDateStr){}/* CQT */
                if( this._v_TomorrowMillis){}/* CQT */
                if( this._v_TomorrowMillisStr){}/* CQT */

                if( this._v_SecondBeforeTimestamp){}/* CQT */
                if( this._v_SecondBeforeTimestampStr){}/* CQT */
                if( this._v_SecondBeforeDate){}/* CQT */
                if( this._v_SecondBeforeDateStr){}/* CQT */
                if( this._v_SecondBeforeMillis){}/* CQT */
                if( this._v_SecondBeforeMillisStr){}/* CQT */

                if( this._v_SecondAfterTimestamp){}/* CQT */
                if( this._v_SecondAfterTimestampStr){}/* CQT */
                if( this._v_SecondAfterDate){}/* CQT */
                if( this._v_SecondAfterDateStr){}/* CQT */
                if( this._v_SecondAfterMillis){}/* CQT */
                if( this._v_SecondAfterMillisStr){}/* CQT */
            };
            if( pInitDates){}/* CQT */
            aPrototype.pInitDates = pInitDates;








            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_WithId( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_WithId = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                if( this.RELEASE_WITHID_ID) {
                    this._v_Id = undefined;
                }

                if( this.RELEASE_WITHID_TITLE) {
                    this._v_Title      = undefined;
                }


                this._v_Timestamp                = undefined;
                this._v_TimestampStr             = undefined;
                this._v_Date                     = undefined;
                this._v_DateStr                  = undefined;
                this._v_Millis                   = undefined;
                this._v_MillisStr                = undefined;
                this._v_YesterdayTimestamp       = undefined;
                this._v_YesterdayTimestampStr    = undefined;
                this._v_YesterdayDate            = undefined;
                this._v_YesterdayDateStr         = undefined;
                this._v_YesterdayMillis          = undefined;
                this._v_YesterdayMillisStr       = undefined;
                this._v_TomorrowTimestamp        = undefined;
                this._v_TomorrowTimestampStr     = undefined;
                this._v_TomorrowDate             = undefined;
                this._v_TomorrowDateStr          = undefined;
                this._v_TomorrowMillis           = undefined;
                this._v_TomorrowMillisStr        = undefined;
                this._v_SecondBeforeTimestamp    = undefined;
                this._v_SecondBeforeTimestampStr = undefined;
                this._v_SecondBeforeDate         = undefined;
                this._v_SecondBeforeDateStr      = undefined;
                this._v_SecondBeforeMillis       = undefined;
                this._v_SecondBeforeMillisStr    = undefined;
                this._v_SecondAfterTimestamp     = undefined;
                this._v_SecondAfterTimestampStr  = undefined;
                this._v_SecondAfterDate          = undefined;
                this._v_SecondAfterDateStr       = undefined;
                this._v_SecondAfterMillis        = undefined;
                this._v_SecondAfterMillisStr     = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Common.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_WithId){}/* CQT */
            aPrototype._pRelease_WithId = _pRelease_WithId;












            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_WithId( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_WithId = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Common.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_WithId){}/* CQT */
            aPrototype.pCleanUpTest_WithId = pCleanUpTest_WithId;










            var fDayBefore = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aMilliseconds = theDate.getTime();

                var aMillisecondsMinusOneDay = aMilliseconds - ( 24 * 3600 * 1000);

                var aDayBefore = new Date( aMillisecondsMinusOneDay);
                return aDayBefore;
            };
            if( fDayBefore){}/* CQT */
            aPrototype.fDayBefore = fDayBefore;






            var fDayAfter = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aMilliseconds = theDate.getTime();

                var aMillisecondsPlusOneDay = aMilliseconds + ( 24 * 3600 * 1000);

                var aDayAfter = new Date( aMillisecondsPlusOneDay);
                return aDayAfter;
            };
            if( fDayAfter){}/* CQT */
            aPrototype.fDayAfter = fDayAfter;












            var fSecondBefore = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aMilliseconds = theDate.getTime();

                var aMillisecondsMinusOneSecond = aMilliseconds - 1000;

                var aSecondBefore = new Date( aMillisecondsMinusOneSecond);
                return aSecondBefore;
            };
            if( fSecondBefore){}/* CQT */
            aPrototype.fSecondBefore = fSecondBefore;






            var fSecondAfter = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aMilliseconds = theDate.getTime();

                var aMillisecondsPlusOneSecond = aMilliseconds + 1000;

                var aSecondAfter = new Date( aMillisecondsPlusOneSecond);
                return aSecondAfter;
            };
            if( fSecondAfter){}/* CQT */
            aPrototype.fSecondAfter = fSecondAfter;







            var fDateToTimestampStr = function( theDate) {
                
                if( theDate == null) {
                    return null;
                }

                var aDate = "" + theDate.getDate();
                var aDateStr = "" + aDate;
                if( aDateStr.length < 2) {
                    aDateStr = "0" + aDateStr;
                }

                var aMonth = "" + (theDate.getMonth()+ 1);
                var aMonthStr = "" + aMonth;
                if( aMonthStr.length < 2) {
                    aMonthStr = "0" + aMonthStr;
                }

                var aFullYear = theDate.getFullYear();
                var aFullYearStr = "" + aFullYear;

                var aHours = theDate.getHours();
                var aHoursStr = "" + aHours;
                if( aHoursStr.length < 2) {
                    aHoursStr = "0" + aHoursStr;
                }

                var aMinutes = theDate.getMinutes();
                var aMinutesStr = "" + aMinutes;
                if( aMinutesStr.length < 2) {
                    aMinutesStr = "0" + aMinutesStr;
                }

                var aSeconds = theDate.getSeconds();
                var aSecondsStr = "" + aSeconds;
                if( aSecondsStr.length < 2) {
                    aSecondsStr = "0" + aSecondsStr;
                }

                var aMilliseconds = theDate.getMilliseconds();
                var aMillisecondsStr = "" + aMilliseconds;
                if( aMillisecondsStr.length < 3) {
                    if( aMillisecondsStr.length < 2) {
                        aMillisecondsStr = "00" + aMillisecondsStr;
                    }
                    else {
                        aMillisecondsStr = "0" + aMillisecondsStr;
                    }
                }

                var aTimestampStr = aDateStr + "/" + aMonthStr + "/" + aFullYearStr
                    + " "
                    + aHoursStr + ":" + aMinutesStr + ":" + aSecondsStr + "." + aMillisecondsStr;

                return aTimestampStr;
            };
            if( fDateToTimestampStr){}/* CQT */
            aPrototype.fDateToTimestampStr = fDateToTimestampStr;







            var fDateToTimestampWOsepsStr = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aDate = "" + theDate.getDate();
                var aDateStr = "" + aDate;
                if( aDateStr.length < 2) {
                    aDateStr = "0" + aDateStr;
                }

                var aMonth = "" + (theDate.getMonth()+ 1);
                var aMonthStr = "" + aMonth;
                if( aMonthStr.length < 2) {
                    aMonthStr = "0" + aMonthStr;
                }

                var aFullYear = theDate.getFullYear();
                var aFullYearStr = "" + aFullYear;

                var aHours = theDate.getHours();
                var aHoursStr = "" + aHours;
                if( aHoursStr.length < 2) {
                    aHoursStr = "0" + aHoursStr;
                }

                var aMinutes = theDate.getMinutes();
                var aMinutesStr = "" + aMinutes;
                if( aMinutesStr.length < 2) {
                    aMinutesStr = "0" + aMinutesStr;
                }

                var aSeconds = theDate.getSeconds();
                var aSecondsStr = "" + aSeconds;
                if( aSecondsStr.length < 2) {
                    aSecondsStr = "0" + aSecondsStr;
                }

                var aMilliseconds = theDate.getMilliseconds();
                var aMillisecondsStr = "" + aMilliseconds;
                if( aMillisecondsStr.length < 3) {
                    if( aMillisecondsStr.length < 2) {
                        aMillisecondsStr = "00" + aMillisecondsStr;
                    }
                    else {
                        aMillisecondsStr = "0" + aMillisecondsStr;
                    }
                }


                var aTimestampStr = aFullYearStr +aMonthStr + aDateStr +
                    + "T"
                    + aHoursStr + aMinutesStr + aSecondsStr;

                return aTimestampStr;
            };
            if( fDateToTimestampWOsepsStr){}/* CQT */
            aPrototype.fDateToTimestampWOsepsStr = fDateToTimestampWOsepsStr;







            var fDateToDate = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aUTCDate = "" + theDate.getDate();

                var aUTCMonth = "" + (theDate.getMonth()+ 1);

                var aUTCFullYear = theDate.getFullYear();

                var aDate = new Date( aUTCFullYear, aUTCMonth, aUTCDate);
                return aDate;
            };
            if( fDateToDate){}/* CQT */
            aPrototype.fDateToDate = fDateToDate;






            var fDateToDateStr = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aUTCDate = "" + theDate.getDate();
                var aUTCDateStr = "" + aUTCDate;
                if( aUTCDateStr.length < 2) {
                    aUTCDateStr = "0" + aUTCDateStr;
                }

                var aUTCMonth = "" + (theDate.getMonth()+ 1);
                var aUTCMonthStr = "" + aUTCMonth;
                if( aUTCMonthStr.length < 2) {
                    aUTCMonthStr = "0" + aUTCMonthStr;
                }

                var aUTCFullYear = theDate.getFullYear();
                var aUTCFullYearStr = "" + aUTCFullYear;

                var aDateStr =  aUTCDateStr + "/" + aUTCMonthStr + "/" + aUTCFullYearStr;
                return aDateStr;
            };
            if( fDateToDateStr){}/* CQT */
            aPrototype.fDateToDateStr = fDateToDateStr;




            var fDateToDateWOsepsStr = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aUTCDate = "" + theDate.getDate();
                var aUTCDateStr = "" + aUTCDate;
                if( aUTCDateStr.length < 2) {
                    aUTCDateStr = "0" + aUTCDateStr;
                }

                var aUTCMonth = "" + (theDate.getMonth()+ 1);
                var aUTCMonthStr = "" + aUTCMonth;
                if( aUTCMonthStr.length < 2) {
                    aUTCMonthStr = "0" + aUTCMonthStr;
                }

                var aUTCFullYear = theDate.getFullYear();
                var aUTCFullYearStr = "" + aUTCFullYear;

                var aDateStr =  aUTCFullYearStr + aUTCMonthStr + aUTCDateStr;
                return aDateStr;
            };
            if( fDateToDateWOsepsStr){}/* CQT */
            aPrototype.fDateToDateWOsepsStr = fDateToDateWOsepsStr;





            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = aPrototype._v_SuperPrototype.fIdentifyingJSON.apply( this, []);
                if( !aIdentifiyingJSON) {
                    aIdentifiyingJSON = {};
                }

                if( aIdentifiyingJSON.hasOwnProperty( "type")) {
                    var aType = aIdentifiyingJSON.type;
                    delete aIdentifiyingJSON.type;

                    aIdentifiyingJSON.id = this._v_Id;
                    aIdentifiyingJSON.type = aType;
                }
                else {
                    aIdentifiyingJSON.id = this._v_Id;
                    aIdentifiyingJSON.type = this._vType;
                }

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;








            var fIdentifyingWithTitleJSON = function() {

                var aIdentifiyingJSON = this.fIdentifyingJSON();

                if( !( this._v_Title == null)) {
                    aIdentifiyingJSON.title = this._v_Title;
                }

                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingWithTitleJSON){}/* CQT */
            aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;







            return aPrototype;

        })();




        var WithIdTest_Constructor = function( theTitle, theConfiguration, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_test.CommonTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Id = null;
            this._v_Title = null;

            this._v_Date          = null;
            this._v_DateStr       = null;
            this._v_Timestamp     = null;
            this._v_TimestampStr  = null;
            this._v_Millis        = null;
            this._v_MillisStr     = null;

            this._v_YesterdayDate          = null;
            this._v_YesterdayDateStr       = null;
            this._v_YesterdayTimestamp     = null;
            this._v_YesterdayTimestampStr  = null;
            this._v_YesterdayMillis        = null;
            this._v_YesterdayMillisStr     = null;

            this._v_TomorrowDate          = null;
            this._v_TomorrowDateStr       = null;
            this._v_TomorrowTimestamp     = null;
            this._v_TomorrowTimestampStr  = null;
            this._v_TomorrowMillis        = null;
            this._v_TomorrowMillisStr     = null;

            this._v_SecondBeforeDate           = null;
            this._v_SecondBeforeDateStr        = null;
            this._v_SecondBeforeTimestamp      = null;
            this._v_SecondBeforeTimestampStr   = null;
            this._v_SecondBeforeMillis         = null;
            this._v_SecondBeforeMillisStr      = null;

            this._v_SecondAfterDate            = null;
            this._v_SecondAfterDateStr         = null;
            this._v_SecondAfterTimestamp       = null;
            this._v_SecondAfterTimestampStr    = null;
            this._v_SecondAfterMillis          = null;
            this._v_SecondAfterMillisStr       = null;
            
            this._pInit_WithId( theTitle, theConfiguration, theIdentifier);

        };
        WithIdTest_Constructor.prototype = aWithIdTest_Prototype;





        var WithIdTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_test.CommonTest_Prototype;

            this._v_Prototype = aWithIdTest_Prototype;
            this._v_Type = null;

            this._v_Id = null;
            this._v_Title = null;

            this._v_Date          = null;
            this._v_DateStr       = null;
            this._v_Timestamp     = null;
            this._v_TimestampStr  = null;
            this._v_Millis        = null;
            this._v_MillisStr     = null;

            this._v_YesterdayDate          = null;
            this._v_YesterdayDateStr       = null;
            this._v_YesterdayTimestamp     = null;
            this._v_YesterdayTimestampStr  = null;
            this._v_YesterdayMillis        = null;
            this._v_YesterdayMillisStr     = null;

            this._v_TomorrowDate          = null;
            this._v_TomorrowDateStr       = null;
            this._v_TomorrowTimestamp     = null;
            this._v_TomorrowTimestampStr  = null;
            this._v_TomorrowMillis        = null;
            this._v_TomorrowMillisStr     = null;

            this._v_SecondBeforeDate           = null;
            this._v_SecondBeforeDateStr        = null;
            this._v_SecondBeforeTimestamp      = null;
            this._v_SecondBeforeTimestampStr   = null;
            this._v_SecondBeforeMillis         = null;
            this._v_SecondBeforeMillisStr      = null;

            this._v_SecondAfterDate            = null;
            this._v_SecondAfterDateStr         = null;
            this._v_SecondAfterTimestamp       = null;
            this._v_SecondAfterTimestampStr    = null;
            this._v_SecondAfterMillis          = null;
            this._v_SecondAfterMillisStr       = null;

        };
        WithIdTest_SuperPrototypeConstructor.prototype = aWithIdTest_Prototype;



        var aModule = {
            "WithIdTest_Prototype": aWithIdTest_Prototype,
            "WithIdTest_Constructor": WithIdTest_Constructor,
            "WithIdTest_SuperPrototypeConstructor": WithIdTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;
    };








    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_common_test    = require('./common-test');
            var aM_overrider      = require('./overrider');

            return aMod_definer(
                aM_common_test,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./common-test",
            "./overrider"
        ], function (
            theM_common_test,
            theM_overrider
        ) {
            return aMod_definer(
                theM_common_test,
                theM_overrider
            );
        });
    }


}());


