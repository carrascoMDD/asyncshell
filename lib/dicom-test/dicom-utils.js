'use strict';

/*
 dicom-utils.js
 Creado 201511201735
 */

/*
 ***************************************************************************

 Copyright 2014 2015 Antonio Carrasco Valero
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
    var aMod_definer = function( theM_dicomconstants) {

        var ModuleName     = "dicom-utils";
        var ModulePackages = "dicom-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


        };






        var ModuleConstants = {};
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





        var aModule = {
            "ModuleConstants": ModuleConstants

        };
        pgInitFromModuleConstants( aModule);









        var fDicomTagFromGroupAndElement = function( theGroup, theElement) {
            
            if( !theGroup   || !( typeof theGroup   == "string")) {
                return null;
            }

            var aGroup = theGroup.toUpperCase();
            if( !aGroup.match( theM_dicomconstants.DICOMTAG_GROUP_REGEXP)) {
                return null;
            }

            if( !theElement || !( typeof theElement == "string")) {
                return null;
            }

            var anElement = theElement.toUpperCase();
            if( !anElement.match( theM_dicomconstants.DICOMTAG_ELEMENT_REGEXP)) {
                return null;
            }

            var aDicomTag = theM_dicomconstants.DICOMTAG_PREFIX + aGroup + theM_dicomconstants.DICOMTAG_SEPARATOR + anElement + theM_dicomconstants.DICOMTAG_POSTFIX;

            aDicomTag = aDicomTag.toUpperCase();

            return aDicomTag;
        };
        if( fDicomTagFromGroupAndElement){}/* CQT */
        aModule.fDicomTagFromGroupAndElement = fDicomTagFromGroupAndElement;







        var fGroupAndElementFromDicomTag = function( theDicomTag) {

            if( !theDicomTag || !( typeof theDicomTag == "string")) {
                return null;
            }

            var aDicomTag = theDicomTag.toUpperCase();

            var someRegexpMatches = theM_dicomconstants.DICOMTAG_REGEXP.exec( aDicomTag);
            if( !someRegexpMatches) {
                return null;
            }

            if( !( someRegexpMatches.length == 3)) {
                return null;
            }

            var aDicomTag_Group   = someRegexpMatches[ 1];
            if( !aDicomTag_Group) {
                return null;
            }
            var aDicomTag_Element = someRegexpMatches[ 2];
            if( !aDicomTag_Element) {
                return null;
            }

            var aDicomGroupAndElement = [ aDicomTag_Group, aDicomTag_Element];
            if( aDicomGroupAndElement){}/* CQT */

            return aDicomGroupAndElement;
        };
        if( fGroupAndElementFromDicomTag){}/* CQT */
        aModule.fGroupAndElementFromDicomTag = fGroupAndElementFromDicomTag;







        var fDicomTagSpec = function( theDicomTag) {

            if( !theDicomTag   || !( typeof theDicomTag   == "string")) {
                return null;
            }

            var aDicomTag = theDicomTag.toUpperCase();

            if( !aDicomTag.match( theM_dicomconstants.DICOMTAG_REGEXP)) {
                return null;
            }

            var aDicomTagSpec = theM_dicomconstants.DICOM_TAG_DICT[ aDicomTag];
            if( aDicomTagSpec) {
                return aDicomTagSpec;
            }

            aDicomTagSpec = theM_dicomconstants.DICOM_TAG_ADDITIONAL_DICT[ aDicomTag];
            if( aDicomTagSpec) {
                return aDicomTagSpec;
            }

            aDicomTagSpec = theM_dicomconstants.DICOM_TAG_DEPRECATED_DICT[ aDicomTag];
            if( aDicomTagSpec) {
                return aDicomTagSpec;
            }

            return null;
        };
        if( fDicomTagSpec){}/* CQT */
        aModule.fDicomTagSpec = fDicomTagSpec;









        var fIsPrivateDicomGroup = function( theGroup) {

            if( !theGroup   || !( typeof theGroup   == "string")) {
                return false;
            }

            var aGroup = theGroup.toUpperCase();

            if( !aGroup.match( theM_dicomconstants.DICOMTAG_GROUP_REGEXP)) {
                return false;
            }


            var aGroupNum = null;
            try {
                aGroupNum = parseInt( aGroup, 16)
            }
            catch( anException) {}

            if( !aGroupNum) {
                return false;
            }


            var anIsOdd = ( aGroupNum % 2) > 0;
            if( anIsOdd){}/* CQT */

            return anIsOdd;

        };
        if( fIsPrivateDicomGroup){}/* CQT */
        aModule.fIsPrivateDicomGroup = fIsPrivateDicomGroup;






        var fIsHeaderDicomGroup = function( theGroup) {

            if( !theGroup   || !( typeof theGroup   == "string")) {
                return false;
            }

            var aGroup = theGroup.toUpperCase();

            if( !aGroup.match( theM_dicomconstants.DICOMTAG_GROUP_REGEXP)) {
                return false;
            }

            var anIsHeader = aGroup <= theM_dicomconstants.DICOM_TAG_MAXHEADERGROUP;
            if( anIsHeader){}/* CQT */

            return anIsHeader;

        };
        if( fIsHeaderDicomGroup){}/* CQT */
        aModule.fIsHeaderDicomGroup = fIsHeaderDicomGroup;










        var fIsRemovedDicomTag = function( theDicomTag) {

            if( !theDicomTag) {
                return false;
            }

            var aRemovedDicomTag = theM_dicomconstants.DICOMTAGS_REMOVED[ theDicomTag];
            if( !aRemovedDicomTag) {
                return false;
            }

            return true;

        };
        if( fIsRemovedDicomTag){}/* CQT */
        aModule.fIsRemovedDicomTag = fIsRemovedDicomTag;






        var fIsVRAnyStringType = function( theVR) {

            if( !theVR) {
                return false;
            }

            var anIsVRAnyStringType = theM_dicomconstants.DICOM_VALUE_REPRESENTATION_CODES_STRING.indexOf( theVR) >= 0;
            if( anIsVRAnyStringType){}/* CQT */

            return anIsVRAnyStringType;

        };
        if( fIsVRAnyStringType){}/* CQT */
        aModule.fIsVRAnyStringType = fIsVRAnyStringType;






        var fIsStringValueMultiplicityGT1 = function( theStringValue) {

            if( !theStringValue   || !( typeof theStringValue   == "string")) {
                return false;
            }

            if( theStringValue.indexOf( theM_dicomconstants.DICOMVALUESTRINGVMGT1DELIMITER) < 0) {
                return false;
            }

            return true;

        };
        if( fIsStringValueMultiplicityGT1){}/* CQT */
        aModule.fIsStringValueMultiplicityGT1 = fIsStringValueMultiplicityGT1;







        var fStringValuesMultiplicityGT1 = function( theStringValue) {

            if( !theStringValue   || !( typeof theStringValue   == "string")) {
                return false;
            }


            var someStrings = theStringValue.split( theM_dicomconstants.DICOMVALUESTRINGVMGT1DELIMITER);
            if( !someStrings || !someStrings.length) {
                return null;
            }

            return someStrings;

        };
        if( fStringValuesMultiplicityGT1){}/* CQT */
        aModule.fStringValuesMultiplicityGT1 = fStringValuesMultiplicityGT1;










        var fBlockToReserveInPrivateGroup = function( theDicomElement) {

            if( !theDicomElement   || !( typeof theDicomElement == "string")) {
                return null;
            }

            if( !theDicomElement.match( theM_dicomconstants.DICOMTAG_ELEMENT_REGEXP)) {
                return null;
            }

            if(    ( theDicomElement < theM_dicomconstants.DICOMELEMENT_PRIVATEBLOCKIDENTIFICATION_MIN)
                || ( theDicomElement > theM_dicomconstants.DICOMELEMENT_PRIVATEBLOCKIDENTIFICATION_MAX)) {
                return null;
            }

            var aBlockToReserve = theDicomElement.substr( 2, 2);
            if( aBlockToReserve){}/* CQT */

            return aBlockToReserve;

        };
        if( fBlockToReserveInPrivateGroup){}/* CQT */
        aModule.fBlockToReserveInPrivateGroup = fBlockToReserveInPrivateGroup;









        var fReservedBlockFromDicomElement = function( theDicomElement) {

            if( !theDicomElement   || !( typeof theDicomElement == "string")) {
                return null;
            }

            if( !theDicomElement.match( theM_dicomconstants.DICOMTAG_ELEMENT_REGEXP)) {
                return null;
            }

            if(    ( theDicomElement < theM_dicomconstants.DICOMELEMENT_PRIVATEBLOCKRESERVED_MIN)
                || ( theDicomElement > theM_dicomconstants.DICOMELEMENT_PRIVATEBLOCKRESERVED_MAX)) {
                return null;
            }

            var aReservedBloc = theDicomElement.substr( 0, 2);
            if( aReservedBloc){}/* CQT */

            return aReservedBloc;

        };
        if( fReservedBlockFromDicomElement){}/* CQT */
        aModule.fReservedBlockFromDicomElement = fReservedBlockFromDicomElement;









        var fVRfromTypeName = function( theTypeName, theExtraTypeNameToVRMappings) {

            if( !theTypeName   || !( typeof theTypeName == "string")) {
                return null;
            }

            var aVR = theM_dicomconstants.DICOM_VR_BY_TYPENAME[ theTypeName];
            if( aVR) {
                return aVR;
            }

            if( !theExtraTypeNameToVRMappings || !( typeof theExtraTypeNameToVRMappings == "object")) {
                return null;
            }

            var anExtraVRspec = theExtraTypeNameToVRMappings[ theTypeName];
            if( !anExtraVRspec) {
                return null;
            }

            aVR = anExtraVRspec[ "code"];
            return aVR;

        };
        if( fVRfromTypeName){}/* CQT */
        aModule.fVRfromTypeName = fVRfromTypeName;









        var fTypeNameFromVR = function( theVR, theExtraVRtoTypeNameMappings) {

            if( !theVR   || !( typeof theVR == "string")) {
                return null;
            }


            var aTypeName = null;

            var aVRspec = theM_dicomconstants.DICOM_VALUE_REPRESENTATION_CODES[ theVR];
            if( aVRspec) {

                aTypeName = aVRspec[ "title"];
                return aTypeName;
            }


            if( !theExtraVRtoTypeNameMappings || !( typeof theExtraTypeNameToVRMappings == "object")) {
                return null;
            }

            aTypeName = theExtraVRtoTypeNameMappings[ theVR];
            return aTypeName;

        };
        if( fTypeNameFromVR){}/* CQT */
        aModule.fTypeNameFromVR = fTypeNameFromVR;












        var fExceedsMaxVRStringLen = function( theVR, theExtraVRtoTypeNameMappings, theValueLength) {

            if( !theVR   || !( typeof theVR == "string")) {
                return false;
            }


            var aVRspec = theM_dicomconstants.DICOM_VALUE_REPRESENTATION_CODES[ theVR];
            if( !aVRspec) {
                return false;
            }

            var aValueTypeMaxLength = aVRspec[ "maxLength"];
            if( !( typeof aValueTypeMaxLength == "number")) {
                return false;
            }

            if( aValueTypeMaxLength < 0) {
                return false;
            }

            if( theValueLength < aValueTypeMaxLength) {
                return false;
            }

            return true;

        };
        if( fExceedsMaxVRStringLen){}/* CQT */
        aModule.fExceedsMaxVRStringLen = fExceedsMaxVRStringLen;











        var fAdjustedVRforExceededMaxVRStringLen = function( theVR, theExtraVRtoTypeNameMappings, theValueLength) {

            if( !theVR   || !( typeof theVR == "string")) {
                return null;
            }

            if( !theValueLength   || !( typeof theValueLength == "number")) {
                return null;
            }

            if( !this.fExceedsMaxVRStringLen( theVR, theExtraVRtoTypeNameMappings, theValueLength)) {
                return theVR;
            }


            var someStringVRs = theM_dicomconstants.DICOM_VRS_STRING_INCREASINGLEN;
            if( !someStringVRs) {
                return null;
            }

            var aNumStringVRs = someStringVRs.length;
            if( !aNumStringVRs) {
                return null;
            }

            var anActualVRIdx = someStringVRs.indexOf( theVR);
            if( ( anActualVRIdx < 0) || ( anActualVRIdx == ( aNumStringVRs - 1))) {
                return null;
            }


            for( var aStringVRIdx = anActualVRIdx + 1; aStringVRIdx < aNumStringVRs; aStringVRIdx++) {
                var aStringVR = someStringVRs[ aStringVRIdx];
                if( aStringVR) {

                    var aVRspec = theM_dicomconstants.DICOM_VALUE_REPRESENTATION_CODES[ aStringVR];
                    if( aVRspec) {

                        var anAdjustedVR = aVRspec[ "code"];
                        if( !anAdjustedVR) {
                            continue;
                        }

                        var aValueTypeMaxLength = aVRspec[ "maxLength"];
                        if( !( typeof aValueTypeMaxLength == "number")) {
                            continue;
                        }

                        if( aValueTypeMaxLength >= theValueLength) {
                            return anAdjustedVR;
                        }
                    }
                }
            }

            return null;

        };
        if( fAdjustedVRforExceededMaxVRStringLen){}/* CQT */
        aModule.fAdjustedVRforExceededMaxVRStringLen = fAdjustedVRforExceededMaxVRStringLen;




















        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





        return aModule;
    };










    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_dicomconstants    = require('./dicom-constants');

            return aMod_definer(
                aM_dicomconstants
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./dicom-constants"
        ], function (
            theM_dicomconstants
        ) {
            return aMod_definer(
                theM_dicomconstants
            );
        });
    }


}());


