'use strict';

/*
 fileaccess-test.js
 Created 201511010101
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_parms_general,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_specloader,
                                 theM_fs,
                                 theM_path,
                                 theM_osenv,
                                 theM_parse_filepath,
                                 theM_traversals,
                                 theM_directory_test,
                                 theM_payloadholder) {


        var ModuleName     = "fileaccess-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.DUMP_EXCEPTION_WHILE_CLOSEFILEDECRIPTORONUNWIND = true;

            theToInit.EXPANDHOME              = true;

            theToInit.DUMP_PATHS              = false;
            theToInit.DUMP_STATS              = false;
            theToInit.DUMP_PARSERESULT        = false;
            theToInit.DUMP_FILECONTENTS       = false;
            theToInit.DUMP_CONTENTTOWRITE     = false;
            theToInit.DUMP_REMOVALS           = false;
            theToInit.DUMP_CREATEFILE         = false;
            theToInit.DUMP_READS              = false;
            theToInit.DUMP_WRITES             = false;

            theToInit.FILEENCODING            = "utf8";

            theToInit.FAILIFFILEEMPTY         = false;
            theToInit.FAILIFFILENOTEMPTY      = false;
            theToInit.FAILIFFILENOTEXISTS     = false;
            theToInit.FAILIFFILEALREADYEXISTS = false;

            theToInit.READFILECONTENTS        = true;

            theToInit.CREATEFILE              = false;
            theToInit.CREATEFILEMODE          = parseInt('0770',8); /* Octal 0x666 mode like chmod ug+rwx user group read write execute ; chmod o-rwx others do not read write execute */

            theToInit.UNLINKFILE              = false;
            theToInit.TOUCHFILE               = false;
            theToInit.APPENDTOFILE            = false;
            theToInit.TRUNCATEFILE            = false;
            theToInit.FAILIFNOTEMPTY          = false;

            theToInit.WRITEFILECONTENTS       = false;

            theToInit.DODIRECTORY             = false;

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
                return;
            }


            theToInit.PARMSPREFIX_FILEACCESS  = "fileaccess";

            theToInit.PARM_FILEACCESSACCESS_LAZY    = theToInit.PARMSPREFIX_FILEACCESS + ".lazy";

            theToInit.FILEACCESSLAZY_DEFAULT = false;

            theToInit.PARM_FILEACCESS_BASEPATHPARMNAME            = theToInit.PARMSPREFIX_FILEACCESS + ".basePathParmName";
            theToInit.PARM_FILEACCESS_BASEPATH                    = theToInit.PARMSPREFIX_FILEACCESS + ".basePath";
            theToInit.PARM_FILEACCESS_DIRPATHPARMNAME             = theToInit.PARMSPREFIX_FILEACCESS + ".dirPathParmName";
            theToInit.PARM_FILEACCESS_DIRPATH                     = theToInit.PARMSPREFIX_FILEACCESS + ".dirPath";
            theToInit.PARM_FILEACCESS_FILENAMEPARMNAME            = theToInit.PARMSPREFIX_FILEACCESS + ".filenameParmName";
            theToInit.PARM_FILEACCESS_FILENAME                    = theToInit.PARMSPREFIX_FILEACCESS + ".filename";
            theToInit.PARM_FILEACCESS_FULLFILEPATHPARMNAME        = theToInit.PARMSPREFIX_FILEACCESS + ".fullFilePathParmName";
            theToInit.PARM_FILEACCESS_FULLFILEPATH                = theToInit.PARMSPREFIX_FILEACCESS + ".fullFilePath";

            theToInit.PARM_FILEACCESS_EXPANDHOME                  = theToInit.PARMSPREFIX_FILEACCESS + ".expandHome";

            theToInit.PARM_FILEACCESS_ENCODING                    = theToInit.PARMSPREFIX_FILEACCESS + ".fileEncoding";

            theToInit.PARM_FILEACCESS_READCONTENTS                = theToInit.PARMSPREFIX_FILEACCESS + ".readFileContents";

            theToInit.PARM_FILEACCESS_CREATEFILE                  = theToInit.PARMSPREFIX_FILEACCESS + ".createFile";
            theToInit.PARM_FILEACCESS_CREATEMODE                  = theToInit.PARMSPREFIX_FILEACCESS + ".createFileMode";

            theToInit.PARM_FILEACCESS_TOUCH                       = theToInit.PARMSPREFIX_FILEACCESS + ".touchFile";
            theToInit.PARM_FILEACCESS_TRUNCATE                    = theToInit.PARMSPREFIX_FILEACCESS + ".truncateFile";
            theToInit.PARM_FILEACCESS_APPENDTO                    = theToInit.PARMSPREFIX_FILEACCESS + ".appendToFile";
            theToInit.PARM_FILEACCESS_WRITECONTENTS               = theToInit.PARMSPREFIX_FILEACCESS + ".writeFileContents";
            theToInit.PARM_FILEACCESS_CONTENTSTOWRITE             = theToInit.PARMSPREFIX_FILEACCESS + ".contentsToWrite";
            theToInit.PARM_FILEACCESS_CONTENTSTOWRITEPARMNAME     = theToInit.PARMSPREFIX_FILEACCESS + ".contentsToWriteParmName";

            theToInit.PARM_FILEACCESS_UNLINK                      = theToInit.PARMSPREFIX_FILEACCESS + ".unlinkFile";

            theToInit.PARM_FILEACCESS_FAILIFEMPTY                 = theToInit.PARMSPREFIX_FILEACCESS + ".failIfFileEmpty";
            theToInit.PARM_FILEACCESS_FAILIFNOTEMPTY              = theToInit.PARMSPREFIX_FILEACCESS + ".failIfFileNotEmpty";
            theToInit.PARM_FILEACCESS_FAILIFFILENOTEXISTS         = theToInit.PARMSPREFIX_FILEACCESS + ".failIfFileNotExists";
            theToInit.PARM_FILEACCESS_FAILIFFILEALREADYEXISTS     = theToInit.PARMSPREFIX_FILEACCESS + ".failIfFileAlreadyExists";

            theToInit.PARM_FILEACCESS_DODIRECTORY                 = theToInit.PARMSPREFIX_FILEACCESS + ".doDirectory";

            theToInit.PARM_FILEACCESS_USEPAYLOADHOLDER            = theToInit.PARMSPREFIX_FILEACCESS + ".usePayloadHolder";


            theToInit.PARM_FILEACCESS_DUMP_PATHS                  = theToInit.PARMSPREFIX_FILEACCESS + ".dumppaths";
            theToInit.PARM_FILEACCESS_DUMP_STATS                  = theToInit.PARMSPREFIX_FILEACCESS + ".dumpstats";
            theToInit.PARM_FILEACCESS_DUMP_PARSERESULT            = theToInit.PARMSPREFIX_FILEACCESS + ".dumpparseresult";
            theToInit.PARM_FILEACCESS_DUMP_FILECONTENTS           = theToInit.PARMSPREFIX_FILEACCESS + ".dumpfilecontents";
            theToInit.PARM_FILEACCESS_DUMP_CONTENTTOWRITE         = theToInit.PARMSPREFIX_FILEACCESS + ".dumpcontenttowrite";
            theToInit.PARM_FILEACCESS_DUMP_READS                  = theToInit.PARMSPREFIX_FILEACCESS + ".dumpreads";
            theToInit.PARM_FILEACCESS_DUMP_WRITES                 = theToInit.PARMSPREFIX_FILEACCESS + ".dumpwrites";
            theToInit.PARM_FILEACCESS_DUMP_REMOVALS               = theToInit.PARMSPREFIX_FILEACCESS + ".dumpremovals";
            theToInit.PARM_FILEACCESS_DUMP_CREATEFILE             = theToInit.PARMSPREFIX_FILEACCESS + ".dumpcreatefile";



            theToInit.PARMS_FILE = [
                theToInit.PARM_FILEACCESSACCESS_LAZY,

                theToInit.PARM_FILEACCESS_BASEPATHPARMNAME            ,
                theToInit.PARM_FILEACCESS_BASEPATH                    ,
                theToInit.PARM_FILEACCESS_DIRPATHPARMNAME             ,
                theToInit.PARM_FILEACCESS_DIRPATH                     ,
                theToInit.PARM_FILEACCESS_FILENAMEPARMNAME            ,
                theToInit.PARM_FILEACCESS_FILENAME                    ,
                theToInit.PARM_FILEACCESS_FULLFILEPATHPARMNAME        ,
                theToInit.PARM_FILEACCESS_FULLFILEPATH                ,

                theToInit.PARM_FILEACCESS_EXPANDHOME                  ,

                theToInit.PARM_FILEACCESS_ENCODING                    ,

                theToInit.PARM_FILEACCESS_READCONTENTS                ,

                theToInit.PARM_FILEACCESS_CREATEFILE                  ,
                theToInit.PARM_FILEACCESS_CREATEMODE                  ,

                theToInit.PARM_FILEACCESS_TOUCH                       ,
                theToInit.PARM_FILEACCESS_TRUNCATE                    ,
                theToInit.PARM_FILEACCESS_APPENDTO                    ,
                theToInit.PARM_FILEACCESS_WRITECONTENTS               ,
                theToInit.PARM_FILEACCESS_CONTENTSTOWRITEPARMNAME     ,
                theToInit.PARM_FILEACCESS_CONTENTSTOWRITE             ,

                theToInit.PARM_FILEACCESS_UNLINK                      ,

                theToInit.PARM_FILEACCESS_FAILIFEMPTY                 ,
                theToInit.PARM_FILEACCESS_FAILIFNOTEMPTY              ,
                theToInit.PARM_FILEACCESS_FAILIFFILENOTEXISTS         ,
                theToInit.PARM_FILEACCESS_FAILIFFILEALREADYEXISTS     ,

                theToInit.PARM_FILEACCESS_DODIRECTORY                 ,

                theToInit.PARM_FILEACCESS_USEPAYLOADHOLDER            ,

                theToInit.PARM_FILEACCESS_DUMP_PATHS                  ,
                theToInit.PARM_FILEACCESS_DUMP_STATS                  ,
                theToInit.PARM_FILEACCESS_DUMP_PARSERESULT            ,
                theToInit.PARM_FILEACCESS_DUMP_FILECONTENTS           ,
                theToInit.PARM_FILEACCESS_DUMP_CONTENTTOWRITE          ,
                theToInit.PARM_FILEACCESS_DUMP_REMOVALS               ,
                theToInit.PARM_FILEACCESS_DUMP_CREATEFILE             ,
                theToInit.PARM_FILEACCESS_DUMP_READS                  ,
                theToInit.PARM_FILEACCESS_DUMP_WRITES

            ];




            theToInit.HOMEDIRTOREPLACETOKEN = "~";

            theToInit.FILEPATHSEPARATOR= "/";


            theToInit.PROPERTYNAMESTAT = "stat";


            theToInit.FILEENCODING_DEFAULT = "utf8";
            theToInit.FILEENCODING_NULL_SENTINEL = "null";
            theToInit.FILEENCODING_BINARY_SENTINEL = "BINARY";
            theToInit.FILEENCODING_DEFAULT_SENTINEL = "DEFAULT";


            theToInit.STAT_ERRNO_ENOENT   = 34;
            theToInit.STAT_ERRCODE_ENOENT = "ENOENT";


            theToInit.OPENFILE_FLAG_READ_FAILIFFILENOTEXISTS        = "r";
            theToInit.OPENFILE_FLAG_READWRITE_FAILIFFILENOTEXISTS   = "r+";

            theToInit.OPENFILE_FLAG_WRITE_CREATEORTRUNCATE          = "w";
            theToInit.OPENFILE_FLAG_WRITE_CREATEORFAILIFEXISTS      = "wx";
            theToInit.OPENFILE_FLAG_READWRITE_CREATEORTRUNCATE      = "w+";
            theToInit.OPENFILE_FLAG_READWRITE_CREATEORFAILIFEXISTS  = "wx+";


            theToInit.OPENFILE_FLAG_APPEND_CREATEIFNOTEXISTS        = "a";
            theToInit.OPENFILE_FLAG_APPEND_CREATEORFAILIFEXISTS     = "ax";
            theToInit.OPENFILE_FLAG_READAPPEND_CREATEIFNOTEXISTS    = "a+";
            theToInit.OPENFILE_FLAG_APPEND_CREATEORFAILIFEXISTS     = "ax+";


            theToInit.CREATEFILEMODE_DEFAULT  = parseInt('0770',8); /* Octal 0x666 mode like chmod ug+rwx user group read write execute ; chmod o-rwx others do not read write execute */


        };




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


        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
        pgInitWithModuleConstants( ModuleConstants);











        var aFileAccess_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "FileAccess";

            aPrototype._v_Prototype_FileAccess = aPrototype;


            aPrototype._v_FileAccessLazy = null;

            aPrototype._v_BasePathParmName             = null;
            aPrototype._v_BasePath                     = null;
            aPrototype._v_DirPathParmName              = null;
            aPrototype._v_DirPath                      = null;
            aPrototype._v_FilenameParmName             = null;
            aPrototype._v_Filename                     = null;
            aPrototype._v_FullFilePathParmName         = null;
            aPrototype._v_FullFilePath                 = null;
            aPrototype._v_ExpandHome                   = null;


            aPrototype._v_FileEncoding                 = null;

            aPrototype._v_ReadContents                 = null;

            aPrototype._v_UnlinkFile                   = null;

            aPrototype._v_CreateFile                   = null;
            aPrototype._v_CreateFileMode               = null;

            aPrototype._v_TouchFile                    = null;
            aPrototype._v_TruncateFile                 = null;
            aPrototype._v_AppendToFile                 = null;
            aPrototype._v_WriteFileContents            = null;

            aPrototype._v_FileContentsToWriteParmName  = null;

            aPrototype._v_DoDirectory                  = null;

            aPrototype._v_UsePayloadHolder            = null;

            aPrototype._v_FailIfFileEmpty              = null; /* ACV OJO TODO 201511120449 NOT IMPLEMENTED YET */
            aPrototype._v_FailIfFileNotEmpty           = null; /* ACV OJO TODO 201511120449 NOT IMPLEMENTED YET */
            aPrototype._v_FailIfFileAlreadyExists      = null;
            aPrototype._v_FailIfFileNotExists          = null;

            aPrototype._v_Dump_Paths                   = null;
            aPrototype._v_Dump_Stats                   = null;
            aPrototype._v_Dump_ParseResult             = null;
            aPrototype._v_Dump_FileContents            = null;
            aPrototype._v_Dump_ContentToWrite          = null;
            aPrototype._v_Dump_Reads                   = null;
            aPrototype._v_Dump_Writes                  = null;
            aPrototype._v_Dump_Removals                = null;
            aPrototype._v_Dump_CreateFile              = null;


            aPrototype._v_FileDescriptorsToCloseOnUnwind      = null;
            aPrototype._v_NextFileDescriptorToCloseOnUnwindIndex = null;


            aPrototype._v_BasePathIsFromParmName       = null;
            aPrototype._v_DirPathIsFromParmName        = null;
            aPrototype._v_FilenameIsFromParmName       = null;
            aPrototype._v_FullFilePathIsFromParmName   = null;

            aPrototype._v_HomeDirPath                  = null;

            aPrototype._v_FullFilePathOrJoined         = null;
            aPrototype._v_HomeExpandedInFullFilePath   = null;
            aPrototype._v_FullFilePathParseResult      = null;
            aPrototype._v_FullFilePathMayBeRelative    = null;
            aPrototype._v_UsedFullFilePath             = null;
            aPrototype._v_UsedFullFilePathParseResult  = null
            aPrototype._v_DirectoryOfUsedFullFilePath  = null;
            aPrototype._v_BaseNameOfUsedFullFilePath   = null;

            aPrototype._v_StatBefore                   = null;
            aPrototype._v_StatErrorBefore              = null;
            aPrototype._v_FullFileExisted              = null;
            aPrototype._v_FullFileExists               = null;

            aPrototype._v_FileReadBefore               = null;
            aPrototype._v_FileContentsErrorBefore      = null;
            aPrototype._v_FileContentsBefore           = null;

            aPrototype._v_FileReadAfter                = null;
            aPrototype._v_FileContentsErrorAfter       = null;
            aPrototype._v_FileContentsAfter            = null;

            aPrototype._v_UnlinkFileError              = null;
            aPrototype._v_FileUnlinked                 = null;

            aPrototype._v_CreateFileError              = null;
            aPrototype._v_CreatedFileDescriptor        = null;
            aPrototype._v_FileCreated                  = null;

            aPrototype._v_TruncateFileError            = null;
            aPrototype._v_TruncatedFileDescriptor      = null;
            aPrototype._v_FileTruncated                = null;

            aPrototype._v_StatAfter                    = null;
            aPrototype._v_StatErrorAfter               = null;

            aPrototype._v_FileWritten                  = null;
            aPrototype._v_WriteFileError               = null;
            aPrototype._v_FileContentsToWrite          = null;


            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_FileAccess(
                    theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_FileAccess = function(
                theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_FileAccessLazy = null;

                this._v_BasePathParmName            = null;
                this._v_BasePath                    = null;
                this._v_DirPathParmName             = null;
                this._v_DirPath                     = null;
                this._v_FilenameParmName            = null;
                this._v_Filename                    = null;
                this._v_FullFilePathParmName        = null;
                this._v_FullFilePath                = null;
                this._v_ExpandHome                  = null;

                this._v_FileEncoding                = null;

                this._v_ReadContents                = null;

                this._v_UnlinkFile                  = null;

                this._v_CreateFile                  = null;
                this._v_CreateFileMode              = null;

                this._v_TouchFile                   = null;
                this._v_TruncateFile                = null;
                this._v_AppendToFile                = null;
                this._v_WriteFileContents           = null;

                this._v_FileContentsToWriteParmName = null;

                this._v_DoDirectory                 = null;

                this._v_UsePayloadHolder            = null;

                this._v_FailIfFileEmpty             = null;
                this._v_FailIfFileNotEmpty          = null;
                this._v_FailIfFileAlreadyExists     = null;
                this._v_FailIfFileNotExists         = null;

                this._v_Dump_Paths                  = null;
                this._v_Dump_Stats                  = null;
                this._v_Dump_ParseResult            = null;
                this._v_Dump_FileContents           = null;
                this._v_Dump_ContentToWrite         = null;
                this._v_Dump_Reads                  = null;
                this._v_Dump_Writes                 = null;
                this._v_Dump_Removals               = null;
                this._v_Dump_CreateFile             = null;


                this._v_FileDescriptorsToCloseOnUnwind      = [ ];
                this._v_NextFileDescriptorToCloseOnUnwindIndex = 0;

                this._v_BasePathIsFromParmName      = null;
                this._v_DirPathIsFromParmName       = null;
                this._v_FullFilePathIsFromParmName  = null;

                this._v_HomeDirPath                 = null;

                this._v_FullFilePathOrJoined        = null;
                this._v_HomeExpandedInFullFilePath  = null;
                this._v_FullFilePathParseResult     = null;
                this._v_FullFilePathMayBeRelative   = null;
                this._v_UsedFullFilePath            = null;
                this._v_UsedFullFilePathParseResult = null;
                this._v_DirectoryOfUsedFullFilePath = null;
                this._v_BaseNameOfUsedFullFilePath   = null;

                this._v_StatBefore                  = null;
                this._v_StatErrorBefore             = null;
                this._v_FullFileExisted             = null;
                this._v_FullFileExists              = null;

                this._v_FileReadBefore              = null;
                this._v_FileContentsErrorBefore     = null;
                this._v_FileContentsBefore          = null;

                this._v_FileReadAfter               = null;
                this._v_FileContentsErrorAfter      = null;
                this._v_FileContentsAfter           = null;

                this._v_UnlinkFileError             = null;
                this._v_FileUnlinked                = null;

                this._v_CreateFileError             = null;
                this._v_CreatedFileDescriptor       = null;
                this._v_FileCreated                 = false;

                this._v_TruncateFileError           = null;
                this._v_TruncatedFileDescriptor     = null;
                this._v_FileTruncated               = false;

                this._v_StatAfter                   = null;
                this._v_StatErrorAfter              = null;

                this._v_FileWritten                 = false;
                this._v_WriteFileError              = null;
                this._v_FileContentsToWrite         = null;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_FileAccess", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_FileAccess){}/* CQT */
            aPrototype._pInit_FileAccess = _pInit_FileAccess;







            var fUsePayloadHolder = function( ) {

                return this._v_UsePayloadHolder;
            };
            if( fUsePayloadHolder){}/* CQT */
            aPrototype.fUsePayloadHolder = fUsePayloadHolder;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_FileAccess( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_FileAccess = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                 return;
                 }
                 this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */


                this._v_FileAccessLazy = undefined;

                this._v_BasePathParmName            = undefined;
                this._v_BasePath                    = undefined;
                this._v_DirPathParmName             = undefined;
                this._v_DirPath                     = undefined;
                this._v_FilenameParmName            = undefined;
                this._v_Filename                    = undefined;
                this._v_FullFilePathParmName        = undefined;
                this._v_FullFilePath                = undefined;
                this._v_ExpandHome                  = undefined;

                this._v_FileEncoding                = undefined;

                this._v_UnlinkFile                  = undefined;
                this._v_ReadContents                = undefined;
                this._v_CreateFile                  = undefined;
                this._v_TouchFile                   = undefined;
                this._v_TruncateFile                = undefined;
                this._v_AppendToFile                = undefined;
                this._v_WriteFileContents           = undefined;

                this._v_FileContentsToWriteParmName = undefined;

                this._v_DoDirectory                 = undefined;

                this._v_UsePayloadHolder            = undefined;


                this._v_FailIfFileEmpty             = undefined;
                this._v_FailIfFileNotEmpty          = undefined;
                this._v_FailIfFileAlreadyExists     = undefined;
                this._v_FailIfFileNotExists         = undefined;

                this._v_Dump_Paths                  = undefined;
                this._v_Dump_Stats                  = undefined;
                this._v_Dump_ParseResult            = undefined;
                this._v_Dump_FileContents           = undefined;
                this._v_Dump_ContentToWrite         = undefined;
                this._v_Dump_Reads                  = undefined;
                this._v_Dump_Writes                 = undefined;
                this._v_Dump_Removals               = undefined;
                this._v_Dump_CreateFile             = undefined;

                this._v_FileDescriptorsToCloseOnUnwind      = undefined;
                this._v_NextFileDescriptorToCloseOnUnwindIndex = undefined;


                this._v_BasePathIsFromParmName      = undefined;
                this._v_DirPathIsFromParmName       = undefined;
                this._v_FilenameIsFromParmName      = undefined;
                this._v_FullFilePathIsFromParmName  = undefined;

                this._v_HomeDirPath                 = undefined;

                this._v_FullFilePathOrJoined        = undefined;
                this._v_HomeExpandedInFullFilePath  = undefined;
                this._v_FullFilePathParseResult     = undefined;
                this._v_FullFilePathMayBeRelative   = undefined;
                this._v_UsedFullFilePath            = undefined;
                this._v_UsedFullFilePathParseResult = undefined;
                this._v_DirectoryOfUsedFullFilePath = undefined;
                this._v_BaseNameOfUsedFullFilePath  = undefined;

                this._v_StatBefore                  = undefined;
                this._v_StatErrorBefore             = undefined;
                this._v_FullFileExisted             = undefined;
                this._v_FullFileExists              = undefined;

                this._v_FileReadBefore              = undefined;
                this._v_FileContentsErrorBefore     = undefined;
                this._v_FileContentsBefore          = undefined;

                this._v_FileReadAfter               = undefined;
                this._v_FileContentsErrorAfter      = undefined;
                this._v_FileContentsAfter           = undefined;

                this._v_UnlinkFileError             = undefined;
                this._v_FileUnlinked                = undefined;

                this._v_CreateFileError             = undefined;
                this._v_CreatedFileDescriptor       = undefined;
                this._v_FileCreated                 = undefined;

                this._v_TruncateFileError           = undefined;
                this._v_TruncatedFileDescriptor     = undefined;
                this._v_FileTruncated               = undefined;

                this._v_StatAfter                   = undefined;
                this._v_StatErrorAfter              = undefined;

                this._v_FileWritten                 = undefined;
                this._v_WriteFileError              = undefined;
                this._v_FileContentsToWrite         = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_FileAccess){}/* CQT */
            aPrototype._pRelease_FileAccess = _pRelease_FileAccess;









            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

            };
            if( _pReleaseChildrenInto){}/* CQT */
            aPrototype._pReleaseChildrenInto = _pReleaseChildrenInto;









            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_FileAccess( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_FileAccess = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_FileDescriptorsToCloseOnUnwind      = undefined;
                    this._v_NextFileDescriptorToCloseOnUnwindIndex = undefined;

                    this._v_BasePathIsFromParmName      = undefined;
                    this._v_DirPathIsFromParmName       = undefined;
                    this._v_FilenameIsFromParmName      = undefined;
                    this._v_FullFilePathIsFromParmName  = undefined;

                    this._v_HomeDirPath                  = undefined;

                    this._v_FullFilePathOrJoined        = undefined;
                    this._v_HomeExpandedInFullFilePath  = undefined;
                    this._v_FullFilePathParseResult     = undefined;
                    this._v_FullFilePathMayBeRelative   = undefined;
                    this._v_UsedFullFilePath            = undefined;
                    this._v_UsedFullFilePathParseResult = undefined;
                    this._v_DirectoryOfUsedFullFilePath = undefined;
                    this._v_BaseNameOfUsedFullFilePath  = undefined;

                    this._v_StatBefore                  = undefined;
                    this._v_StatErrorBefore             = undefined;
                    this._v_FullFileExisted             = undefined;
                    this._v_FullFileExists              = undefined;

                    this._v_FileReadBefore              = undefined;
                    this._v_FileContentsErrorBefore     = undefined;
                    this._v_FileContentsBefore          = undefined;

                    this._v_FileReadAfter               = undefined;
                    this._v_FileContentsErrorAfter      = undefined;
                    this._v_FileContentsAfter           = undefined;

                    this._v_UnlinkFileError             = undefined;
                    this._v_FileUnlinked                = undefined;

                    this._v_CreateFileError             = undefined;
                    this._v_CreatedFileDescriptor       = undefined;
                    this._v_FileCreated                 = undefined;

                    this._v_TruncateFileError           = undefined;
                    this._v_TruncatedFileDescriptor     = undefined;
                    this._v_FileTruncated               = undefined;

                    this._v_StatAfter                   = undefined;
                    this._v_StatErrorAfter              = undefined;

                    this._v_FileWritten                 = undefined;
                    this._v_WriteFileError              = undefined;
                    this._v_FileContentsToWrite         = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_FileAccess){}/* CQT */
            aPrototype.pCleanUpTest_FileAccess = pCleanUpTest_FileAccess;








            var pRegisterFileDescriptorToCloseOnUnwind = function( theFileDescriptorToClose) {

                if( ( typeof theFileDescriptorToClose == "undefined") || ( theFileDescriptorToClose == null)) {
                    return;
                }

                if( !this._v_FileDescriptorsToCloseOnUnwind) {
                    return;
                }

                if( this._v_FileDescriptorsToCloseOnUnwind.indexOf( theFileDescriptorToClose) >= 0) {
                    return;
                }

                this._v_FileDescriptorsToCloseOnUnwind.push( theFileDescriptorToClose);

                if( this._v_FileDescriptorsToCloseOnUnwind.length == 1) {

                    this._v_OnUnwindFunctionToCloseFileDescriptors = this.pOnUnwindFunctionToCloseFileDescriptors.bind( this);

                    this.pRegisterOnUnwindFunction( this._v_OnUnwindFunctionToCloseFileDescriptors);
                }

            };
            if( pRegisterFileDescriptorToCloseOnUnwind){}/* CQT */
            aPrototype.pRegisterFileDescriptorToCloseOnUnwind = pRegisterFileDescriptorToCloseOnUnwind;







            var pUnregisterFileDescriptorToCloseOnUnwind = function( theFileDescriptorToClose) {

                if( ( typeof theFileDescriptorToClose == "undefined") || ( theFileDescriptorToClose == null)) {
                    return;
                }

                if( !this._v_FileDescriptorsToCloseOnUnwind) {
                    return;
                }

                var aFileDescriptorsToCloseOnUnwindIndex = this._v_FileDescriptorsToCloseOnUnwind.indexOf( theFileDescriptorToClose);
                if(  aFileDescriptorsToCloseOnUnwindIndex < 0) {
                    return;
                }

                this._v_FileDescriptorsToCloseOnUnwind.splice( aFileDescriptorsToCloseOnUnwindIndex, 1);

            };
            if( pUnregisterFileDescriptorToCloseOnUnwind){}/* CQT */
            aPrototype.pUnregisterFileDescriptorToCloseOnUnwind = pUnregisterFileDescriptorToCloseOnUnwind;








            var pOnUnwindFunctionToCloseFileDescriptors = function( ) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( !this._v_FileDescriptorsToCloseOnUnwind) {
                    return;
                }

                var aNumFileDescriptorsToClose = this._v_FileDescriptorsToCloseOnUnwind.length;
                if( !aNumFileDescriptorsToClose) {
                    return;
                }


                if( ( typeof this._v_NextFileDescriptorToCloseOnUnwindIndex == "undefined") || ( this._v_NextFileDescriptorToCloseOnUnwindIndex == null)) {
                    return;
                }
                while( this._v_NextFileDescriptorToCloseOnUnwindIndex < aNumFileDescriptorsToClose) {

                    this._v_NextFileDescriptorToCloseOnUnwindIndex += 1;

                    var aFileDescriptorsToClose = this._v_FileDescriptorsToCloseOnUnwind[ this._v_NextFileDescriptorToCloseOnUnwindIndex];
                    if( ( typeof aFileDescriptorsToClose == "undefined") || ( aFileDescriptorsToClose == null)) {
                        continue
                    }

                    try {
                        theM_fs.closeSync( aFileDescriptorsToClose);
                    }
                    catch( anException) {
                        if( this.DUMP_EXCEPTION_WHILE_CLOSEFILEDECRIPTORONUNWIND) {
                            this.pToConsoleLikeEvent( "DUMP_EXCEPTION_WHILE_CLOSEFILEDECRIPTORONUNWIND pOnUnwindFunctionToCloseFileDescriptors" + aFileDescriptorsToClose + " " + anException);
                        }
                    }
                }
            };
            if( pOnUnwindFunctionToCloseFileDescriptors){}/* CQT */
            aPrototype.pOnUnwindFunctionToCloseFileDescriptors = pOnUnwindFunctionToCloseFileDescriptors;








            var pS_ResolveParms = function( theCallback) {

                var aMethodName = "pS_ResolveParms";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_Configuration", null));
                    return  null;
                }


                this._v_FileAccessLazy = this.fResolvedParmValue(  this.PARM_FILEACCESSACCESS_LAZY);
                if( this._v_FileAccessLazy == null) {
                    this._v_FileAccessLazy = this.FILEACCESSLAZY_DEFAULT;
                }



                var someParmsToResolve = [
                    this.PARM_FILEACCESS_BASEPATHPARMNAME            ,
                    this.PARM_FILEACCESS_BASEPATH                    ,
                    this.PARM_FILEACCESS_DIRPATHPARMNAME             ,
                    this.PARM_FILEACCESS_DIRPATH                     ,
                    this.PARM_FILEACCESS_FILENAMEPARMNAME            ,
                    this.PARM_FILEACCESS_FILENAME                    ,
                    this.PARM_FILEACCESS_FULLFILEPATHPARMNAME        ,
                    this.PARM_FILEACCESS_FULLFILEPATH                ,

                    this.PARM_FILEACCESS_EXPANDHOME                  ,

                    this.PARM_FILEACCESS_ENCODING                    ,

                    this.PARM_FILEACCESS_READCONTENTS                ,

                    this.PARM_FILEACCESS_CREATEFILE                  ,
                    this.PARM_FILEACCESS_CREATEMODE                  ,

                    this.PARM_FILEACCESS_TOUCH                       ,
                    this.PARM_FILEACCESS_TRUNCATE                    ,
                    this.PARM_FILEACCESS_APPENDTO                    ,
                    this.PARM_FILEACCESS_WRITECONTENTS               ,
                    this.PARM_FILEACCESS_CONTENTSTOWRITEPARMNAME     ,
                    this.PARM_FILEACCESS_CONTENTSTOWRITE             ,

                    this.PARM_FILEACCESS_UNLINK                      ,

                    this.PARM_FILEACCESS_FAILIFEMPTY                 ,
                    this.PARM_FILEACCESS_FAILIFNOTEMPTY              ,
                    this.PARM_FILEACCESS_FAILIFFILENOTEXISTS         ,
                    this.PARM_FILEACCESS_FAILIFFILEALREADYEXISTS     ,

                    this.PARM_FILEACCESS_DODIRECTORY                 ,

                    this.PARM_FILEACCESS_USEPAYLOADHOLDER            ,

                    this.PARM_FILEACCESS_DUMP_PATHS                  ,
                    this.PARM_FILEACCESS_DUMP_STATS                  ,
                    this.PARM_FILEACCESS_DUMP_PARSERESULT            ,
                    this.PARM_FILEACCESS_DUMP_FILECONTENTS           ,
                    this.PARM_FILEACCESS_DUMP_CONTENTTOWRITE          ,
                    this.PARM_FILEACCESS_DUMP_REMOVALS               ,
                    this.PARM_FILEACCESS_DUMP_CREATEFILE             ,
                    this.PARM_FILEACCESS_DUMP_READS                  ,
                    this.PARM_FILEACCESS_DUMP_WRITES
                ];



                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return  false;
                }





                if( this._v_Dump_Paths == null) {

                    var aDump_PathsResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DUMP_PATHS];
                    if( aDump_PathsResolution && aDump_PathsResolution._v_Success) {
                        this._v_Dump_Paths = aDump_PathsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Paths = this.DUMP_PATHS;
                    }
                }



                if( this._v_Dump_Stats == null) {

                    var aDump_StatsResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DUMP_STATS];
                    if( aDump_StatsResolution && aDump_StatsResolution._v_Success) {
                        this._v_Dump_Stats = aDump_StatsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Stats = this.DUMP_STATS;
                    }
                }



                if( this._v_Dump_ParseResult == null) {

                    var aDump_ParseResultResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DUMP_PARSERESULT];
                    if( aDump_ParseResultResolution && aDump_ParseResultResolution._v_Success) {
                        this._v_Dump_ParseResult = aDump_ParseResultResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_ParseResult = this.DUMP_PARSERESULT;
                    }
                }



                if( this._v_Dump_FileContents == null) {

                    var aDump_FileContentsResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DUMP_FILECONTENTS];
                    if( aDump_FileContentsResolution && aDump_FileContentsResolution._v_Success) {
                        this._v_Dump_FileContents = aDump_FileContentsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_FileContents = this.DUMP_FILECONTENTS;
                    }
                }



                if( this._v_Dump_ContentToWrite == null) {

                    var aDump_ContentToWriteResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DUMP_CONTENTTOWRITE];
                    if( aDump_ContentToWriteResolution && aDump_ContentToWriteResolution._v_Success) {
                        this._v_Dump_ContentToWrite = aDump_ContentToWriteResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_ContentToWrite = this.DUMP_CONTENTTOWRITE;
                    }
                }



                if( this._v_Dump_Removals == null) {

                    var aDump_RemovalsResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DUMP_REMOVALS];
                    if( aDump_RemovalsResolution && aDump_RemovalsResolution._v_Success) {
                        this._v_Dump_Removals = aDump_RemovalsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Removals = this.DUMP_REMOVALS;
                    }
                }



                if( this._v_Dump_CreateFile == null) {

                    var aDump_CreateFileResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DUMP_CREATEFILE];
                    if( aDump_CreateFileResolution && aDump_CreateFileResolution._v_Success) {
                        this._v_Dump_CreateFile = aDump_CreateFileResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_CreateFile = this.DUMP_CREATEFILE;
                    }
                }



                if( this._v_Dump_Reads == null) {

                    var aDump_ReadsResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DUMP_READS];
                    if( aDump_ReadsResolution && aDump_ReadsResolution._v_Success) {
                        this._v_Dump_Reads = aDump_ReadsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Reads = this.DUMP_READS;
                    }
                }



                if( this._v_Dump_Writes == null) {

                    var aDump_WritesResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DUMP_WRITES];
                    if( aDump_WritesResolution && aDump_WritesResolution._v_Success) {
                        this._v_Dump_Writes = aDump_WritesResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Writes = this.DUMP_WRITES;
                    }
                }



                if( this._v_BasePathParmName == null) {

                    var aBasePathParmNamePathResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_BASEPATHPARMNAME];
                    if( aBasePathParmNamePathResolution && aBasePathParmNamePathResolution._v_Success) {
                        this._v_BasePathParmName = aBasePathParmNamePathResolution._v_ParmValue;
                    }

                    if( this._v_BasePathParmName) {
                        this._v_BasePath = this.fResolvedParmValue(  this._v_BasePathParmName);

                        this._v_BasePathIsFromParmName = true;
                        if( !this._v_BasePath) {
                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null,  "this._v_BasePathIsFromParmName && !this._v_BasePath", this._v_BasePathParmName));
                            return;
                        }
                    }
                    else {
                        var aBasePathPathResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_BASEPATH];
                        if( aBasePathPathResolution && aBasePathPathResolution._v_Success) {
                            this._v_BasePath = aBasePathPathResolution._v_ParmValue;

                            this._v_BasePathIsFromParmName = false;
                        }
                    }

                    if( this._v_Dump_Paths) {
                        this.pToConsoleLikeEvent( this._v_Title + " " + "_v_BasePath=" + this._v_BasePath + " _v_BasePathIsFromParmName=" + this._v_BasePathIsFromParmName + " _v_BasePathParmName=" + this._v_BasePathParmName);
                    }
                }



                if( this._v_DirPathParmName == null) {

                    var aDirPathParmNameResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DIRPATHPARMNAME];
                    if( aDirPathParmNameResolution && aDirPathParmNameResolution._v_Success) {
                        this._v_DirPathParmName = aDirPathParmNameResolution._v_ParmValue;
                    }

                    if( this._v_DirPathParmName) {
                        this._v_DirPath = this.fResolvedParmValue(  this._v_DirPathParmName);

                        this._v_DirPathIsFromParmName = true;
                        if( !this._v_DirPath) {
                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null,  "this._v_DirPathParmName && !this._v_DirPath", this._v_DirPathParmName));
                            return;
                        }
                    }
                    else {
                        var aDirPathResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DIRPATH];
                        if( aDirPathResolution && aDirPathResolution._v_Success) {
                            this._v_DirPath = aDirPathResolution._v_ParmValue;

                            this._v_DirPathIsFromParmName = false;
                        }
                    }

                    if( this._v_Dump_Paths) {
                        this.pToConsoleLikeEvent( this._v_Title + " " + "_v_DirPath=" + this._v_DirPath + " _v_DirPathIsFromParmName=" + this._v_DirPathIsFromParmName + " _v_DirPathParmName=" + this._v_DirPathParmName);
                    }
                }



                if( this._v_FilenameParmName == null) {

                    var aFilenameParmNameResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_FILENAMEPARMNAME];
                    if( aFilenameParmNameResolution && aFilenameParmNameResolution._v_Success) {
                        this._v_FilenameParmName = aFilenameParmNameResolution._v_ParmValue;
                    }

                    if( this._v_FilenameParmName) {
                        this._v_Filename = this.fResolvedParmValue(  this._v_FilenameParmName);

                        this._v_FilenameIsFromParmName = true;
                        if( !this._v_Filename) {
                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null,  "this._v_FilenameParmName && !this._v_Filename", this._v_FilenameParmName));
                            return;
                        }
                    }
                    else {
                        var aFilenameResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_FILENAME];
                        if( aFilenameResolution && aFilenameResolution._v_Success) {
                            this._v_Filename = aFilenameResolution._v_ParmValue;

                            this._v_FilenameIsFromParmName = false;
                        }
                    }

                    if( this._v_Dump_Paths) {
                        this.pToConsoleLikeEvent( this._v_Title + " " + "_v_Filename=" + this._v_Filename + " _v_FilenameIsFromParmName=" + this._v_FilenameIsFromParmName + " _v_FilenameParmName=" + this._v_FilenameParmName);
                    }
                }



                if( this._v_FullFilePathParmName == null) {

                    var aFullFilePathParmNameResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_FULLFILEPATHPARMNAME];
                    if( aFullFilePathParmNameResolution && aFullFilePathParmNameResolution._v_Success) {
                        this._v_FullFilePathParmName = aFullFilePathParmNameResolution._v_ParmValue;
                    }

                    if( this._v_FullFilePathParmName) {
                        this._v_FullFilePath = this.fResolvedParmValue(  this._v_FullFilePathParmName);

                        this._v_FullFilePathIsFromParmName = true;
                        if( !this._v_FullFilePath) {
                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null,  "this._v_FullFilePathParmName && !this._v_FullFilePath", this._v_FullFilePathParmName));
                            return;
                        }
                    }
                    else {
                        var aFullFilePathResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_FULLFILEPATH];
                        if( aFullFilePathResolution && aFullFilePathResolution._v_Success) {
                            this._v_FullFilePath = aFullFilePathResolution._v_ParmValue;

                            this._v_FullFilePathIsFromParmName = false;
                        }
                    }

                    if( this._v_Dump_Paths) {
                        this.pToConsoleLikeEvent( this._v_Title + " " + "_v_FullFilePath=" + this._v_FullFilePath + " _v_FullFilePathIsFromParmName=" + this._v_FullFilePathIsFromParmName + " _v_FullFilePathParmName=" + this._v_FullFilePathParmName);
                    }
                }





                if( this._v_ExpandHome == null) {

                    var aExpandHomeResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_EXPANDHOME];
                    if( aExpandHomeResolution && aExpandHomeResolution._v_Success) {
                        this._v_ExpandHome = aExpandHomeResolution._v_ParmValue;
                    }
                    else {
                        this._v_ExpandHome = this.EXPANDHOME;
                    }
                }



                if( this._v_FileEncoding == null) {

                    var aFileEncodingResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_ENCODING];
                    if( aFileEncodingResolution && aFileEncodingResolution._v_Success) {
                        this._v_FileEncoding = aFileEncodingResolution._v_ParmValue;
                        if( this._v_FileEncoding == this.FILEENCODING_NULL_SENTINEL) {
                            this._v_FileEncoding = null;
                        }
                        else {
                            if( this._v_FileEncoding ==  this.FILEENCODING_BINARY_SENTINEL) {
                                this._v_FileEncoding = null;
                            }
                            else {
                                if( this._v_FileEncoding ==  this.FILEENCODING_DEFAULT_SENTINEL) {
                                    this._v_FileEncoding = this.FILEENCODING_DEFAULT;
                                }
                            }
                        }
                    }
                    else {
                        this._v_FileEncoding = this.FILEENCODING;
                    }
                }




                if( this._v_FailIfFileNotExists == null) {

                    var aFailIfNotExistsResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_FAILIFFILENOTEXISTS];
                    if( aFailIfNotExistsResolution && aFailIfNotExistsResolution._v_Success) {
                        this._v_FailIfFileNotExists = aFailIfNotExistsResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIfFileNotExists = this.FAILIFFILENOTEXISTS;
                    }
                }



                if( this._v_FailIfFileAlreadyExists == null) {

                    var aFailIfAlreadyExistsResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_FAILIFFILEALREADYEXISTS];
                    if( aFailIfAlreadyExistsResolution && aFailIfAlreadyExistsResolution._v_Success) {
                        this._v_FailIfFileAlreadyExists = aFailIfAlreadyExistsResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIfFileAlreadyExists = this.FAILIFFILEALREADYEXISTS;
                    }
                }



                if( this._v_FailIfFileNotEmpty == null) {

                    var aFailIfNotEmptyResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_FAILIFNOTEMPTY];
                    if( aFailIfNotEmptyResolution && aFailIfNotEmptyResolution._v_Success) {
                        this._v_FailIfFileNotEmpty = aFailIfNotEmptyResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIfFileNotEmpty = this.FAILIFFILENOTEMPTY;
                    }
                }



                if( this._v_FailIfFileEmpty == null) {

                    var aFailIfEmptyResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_FAILIFEMPTY];
                    if( aFailIfEmptyResolution && aFailIfEmptyResolution._v_Success) {
                        this._v_FailIfFileEmpty = aFailIfNotEmptyResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIfFileEmpty = this.FAILIFFILEEMPTY;
                    }
                }



                if( this._v_ReadFileContents == null) {

                    var aReadFileContentsResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_READCONTENTS];
                    if( aReadFileContentsResolution && aReadFileContentsResolution._v_Success) {
                        this._v_ReadFileContents = aReadFileContentsResolution._v_ParmValue;
                    }
                    else {
                        this._v_ReadFileContents = this.READFILECONTENTS
                    }
                }



                if( this._v_FileContentsToWriteParmName == null) {

                    var aFileContentsToWriteParmNameResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_CONTENTSTOWRITEPARMNAME];
                    if( aFileContentsToWriteParmNameResolution && aFileContentsToWriteParmNameResolution._v_Success) {
                        this._v_FileContentsToWriteParmName = aFileContentsToWriteParmNameResolution._v_ParmValue;
                    }
                }



                if( this._v_CreateFile == null) {

                    var aCreateFileResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_CREATEFILE];
                    if( aCreateFileResolution && aCreateFileResolution._v_Success) {
                        this._v_CreateFile = aCreateFileResolution._v_ParmValue;
                    }
                    else {
                        this._v_CreateFile = this.CREATEFILE
                    }
                }




                if( this._v_CreateFileMode == null) {

                    var aCreateModeResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_CREATEMODE];
                    if( aCreateModeResolution && aCreateModeResolution._v_Success) {
                        this._v_CreateFileMode = aCreateModeResolution._v_ParmValue;
                    }
                    else {
                        this._v_CreateFileMode = this.CREATEFILEMODE;
                    }
                    if( !( typeof this._v_CreateFileMode == "undefined") && !( this._v_CreateFileMode == undefined) && !( this._v_CreateFileMode == null)) {
                        if( typeof this._v_CreateFileMode == "string") {
                            if( this._v_CreateFileMode.substring(0,1) == "0") {
                                this._v_CreateFileMode = parseInt( this._v_CreateFileMode, 8);

                            }
                            else {
                                this._v_CreateFileMode = parseInt( this._v_CreateFileMode);
                            }
                        }
                    }
                    if( this._v_CreateFileMode == null) {
                        this._v_CreateFileMode = this.CREATEFILEMODE_DEFAULT;
                    }
                }



                if( this._v_UnlinkFile == null) {

                    var aUnlinkFileFilesResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_UNLINK];
                    if( aUnlinkFileFilesResolution && aUnlinkFileFilesResolution._v_Success) {
                        this._v_UnlinkFile = aUnlinkFileFilesResolution._v_ParmValue;
                    }
                    else {
                        this._v_UnlinkFile = this.UNLINKFILE;
                    }
                }



                if( this._v_TruncateFile == null) {

                    var aTruncateFileResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_TRUNCATE];
                    if( aTruncateFileResolution && aTruncateFileResolution._v_Success) {
                        this._v_TruncateFile = aTruncateFileResolution._v_ParmValue;
                    }
                    else {
                        this._v_TruncateFile = this.TRUNCATEFILE;
                    }
                }



                if( this._v_AppendToFile == null) {

                    var aAppendToFileResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_APPENDTO];
                    if( aAppendToFileResolution && aAppendToFileResolution._v_Success) {
                        this._v_AppendToFile = aAppendToFileResolution._v_ParmValue;
                    }
                    else {
                        this._v_AppendToFile = this.APPENDTOFILE;
                    }
                }



                if( this._v_WriteFileContents == null) {

                    var aWriteFileContentsResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_WRITECONTENTS];
                    if( aWriteFileContentsResolution && aWriteFileContentsResolution._v_Success) {
                        this._v_WriteFileContents = aWriteFileContentsResolution._v_ParmValue;
                    }
                    else {
                        this._v_WriteFileContents = this.WRITEFILECONTENTS;
                    }
                }



                if( this._v_DoDirectory == null) {

                    var asDoDirectoryResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_DODIRECTORY];
                    if( asDoDirectoryResolution && asDoDirectoryResolution._v_Success) {
                        this._v_DoDirectory = asDoDirectoryResolution._v_ParmValue;
                    }
                    else {
                        this._v_DoDirectory = this.DODIRECTORY;
                    }
                }






                if( this._v_UsePayloadHolder == null) {

                    var asUsePayloadHolderResolution = aParmResolutionsDict[ this.PARM_FILEACCESS_USEPAYLOADHOLDER];
                    if( asUsePayloadHolderResolution && asUsePayloadHolderResolution._v_Success) {
                        this._v_UsePayloadHolder = asUsePayloadHolderResolution._v_ParmValue;
                    }
                }




                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, null,  null));

            };
            if( pS_ResolveParms){}/* CQT */
            aPrototype.pS_ResolveParms = pS_ResolveParms;















            var pS_ComputeUsedFullPath = function( theCallback) {

                var aMethodName = "pS_ComputeUsedFullPath";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_BasePath && !this._v_DirPath && !this._v_Filename && !this._v_FullFilePath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_BasePath && !this._v_DirPath && !this._v_Filename && !this._v_FullFilePath", null));
                }


                if( this._v_FullFilePath) {

                    this._v_FullFilePathOrJoined = this._v_FullFilePath;
                }
                else {

                    if( !this._v_BasePath && !this._v_DirPath && !this._v_Filename ) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_FullFilePath && !this._v_BasePath && !this._v_DirPath && !this._v_Filename ", null));
                        return;
                    }

                    this._v_FullFilePathOrJoined = "";

                    if( this._v_BasePath) {
                        this._v_FullFilePathOrJoined = this._v_BasePath;
                    }

                    if( this._v_DirPath) {
                        if( !this._v_FullFilePathOrJoined) {
                            this._v_FullFilePathOrJoined = this._v_DirPath;
                        }
                        else {
                            this._v_FullFilePathOrJoined = theM_path.join( this._v_FullFilePathOrJoined, this._v_DirPath);
                        }
                    }

                    if( this._v_Filename) {
                        if( !this._v_FullFilePathOrJoined) {
                            this._v_FullFilePathOrJoined = this._v_Filename;
                        }
                        else {
                            this._v_FullFilePathOrJoined = theM_path.join( this._v_FullFilePathOrJoined, this._v_Filename);
                        }
                    }
                }

                if( this._v_Dump_Paths) {
                    this.pToConsoleLikeEvent( this._v_Title + " " + "_v_FullFilePathOrJoined=" + this._v_FullFilePathOrJoined)
                }


                if( !this._v_FullFilePathOrJoined) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_FullFilePathOrJoined", null));
                }



                if( !this._v_ExpandHome) {
                    this._v_FullFilePathMayBeRelative = this._v_FullFilePathOrJoined;
                }
                else {

                    if( this._v_HomeDirPath == null) {
                        var aHomeDirPath = theM_osenv.home();
                        if( !aHomeDirPath) {
                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_HomeDirPath && this._v_ExpandHome", null));
                            return;
                        }

                        this._v_HomeDirPath = aHomeDirPath;
                    }

                    if( this._v_Dump_Paths) {
                        this.pToConsoleLikeEvent( this._v_Title + " " + "_v_HomeDirPath=" + this._v_HomeDirPath)
                    }

                    if( !this._v_HomeDirPath) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_HomeDirPath", null));
                        return;
                    }


                    if( this._v_FullFilePathOrJoined.indexOf( this.HOMEDIRTOREPLACETOKEN) == 0) {
                        this._v_FullFilePathMayBeRelative = theM_path.join( this._v_HomeDirPath, this._v_FullFilePathOrJoined.substring( 1));
                        this._v_HomeExpandedInFullFilePath = true;
                    }
                    else {
                        this._v_FullFilePathMayBeRelative = this._v_FullFilePathOrJoined;
                        this._v_HomeExpandedInFullFilePath = false;
                    }
                }

                if( this._v_Dump_Paths) {
                    this.pToConsoleLikeEvent( this._v_Title + " " + "_v_FullFilePathMayBeRelative=" + this._v_FullFilePathMayBeRelative)
                }



                /* Sample result from parse-filepath parsePath
                 {
                 path: 'foo/bar/baz/index.html',
                 isAbsolute: false,
                 absolute: '/Users/jonschlinkert/dev/parse-filepath/foo/bar/baz/index.html',
                 root: '',
                 dirname: 'foo/bar/baz',
                 basename: 'index.html',
                 extname: '.html',
                 name: 'index' }
                 */
                this._v_FullFilePathParseResult = theM_parse_filepath( this._v_FullFilePathMayBeRelative);
                if( !this._v_FullFilePathParseResult) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, this._v_FullFilePathMayBeRelative, "!theM_parse_filepath.parsePath()", null));
                    return;
                }


                if( this._v_FullFilePathParseResult.isAbsolute) {
                    this._v_UsedFullFilePath = this._v_FullFilePathMayBeRelative;
                }
                else {
                    this._v_UsedFullFilePath = this._v_FullFilePathParseResult.absolute;
                }
                if( this._v_Dump_Paths) {
                    this.pToConsoleLikeEvent( this._v_Title + " " + "_v_UsedFullFilePath=" + this._v_UsedFullFilePath)
                }

                if( !this._v_UsedFullFilePath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, this._v_UsedFullFilePath, "!this._v_UsedFullFilePath", this._v_FullFilePathParseResult));
                    return;
                }



                this._v_UsedFullFilePathParseResult = theM_parse_filepath( this._v_UsedFullFilePath);
                if( !this._v_UsedFullFilePathParseResult) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, this._v_UsedFullFilePath, "!theM_parse_filepath.parsePath()", null));
                    return;
                }

                this._v_DirectoryOfUsedFullFilePath = this._v_FullFilePathParseResult.dirname;
                if( this._v_Dump_Paths) {
                    this.pToConsoleLikeEvent( this._v_Title + " " + "_v_DirectoryOfUsedFullFilePath=" + this._v_DirectoryOfUsedFullFilePath)
                }

                if( !this._v_DirectoryOfUsedFullFilePath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, this._v_FullFilePathParseResult, "!this._v_DirectoryOfUsedFullFilePath", this._v_FullFilePathParseResult));
                    return;
                }

                this._v_BaseNameOfUsedFullFilePath = this._v_FullFilePathParseResult.basename;


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, this._v_UsedFullFilePath, null,  null));

            };
            if( pS_ComputeUsedFullPath){}/* CQT */
            aPrototype.pS_ComputeUsedFullPath = pS_ComputeUsedFullPath;













            var fDoDirectoryCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, theError, null));
                        return;
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, null, null, null));


                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fDoDirectoryCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fDoDirectoryCallback){}/* CQT */
            aPrototype.fDoDirectoryCallback = fDoDirectoryCallback;









            var fExceptionDoDirectoryHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "null Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionDoDirectoryHandler){}/* CQT */
            aPrototype.fExceptionDoDirectoryHandler = fExceptionDoDirectoryHandler;








            var pTryToDoDirectory = function( theCallback) {
                var aMethodName = "pTryToDoDirectory";


                if( !this._v_DirectoryOfUsedFullFilePath) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_DirectoryOfUsedFullFilePath", null));
                    return;
                }



                var aDirectoryTestTitle = "DirectoryTestFor-" + this._v_Title;

                var aSyntheticDirectoryConfiguration = this._v_Configuration.fNewSyntheticConfiguration(
                    aDirectoryTestTitle,
                    {
                        "_v_Runnable" :     true,
                        "_v_ExpectSuccess": true,
                        "_v_ForceError":    false,
                        "_v_ScheduleSubs":  false,
                        "_v_ConstructorModuleName": "@cmppath/common-test/directory-test",
                        "_v_ConstructorName":       "Directory_Constructor",
                        "_v_MethodName":           "pF_Directory"
                    },
                    [
                        {
                            "checkWhen": "AFTER",
                            "checkNegate": false,
                            "checkKind": "EQ",
                            "checkOrigin": "TEST",
                            "checkSource": "_v_FullDirExists",
                            "checkValue": true
                        }
                    ]
                );

                aSyntheticDirectoryConfiguration._v_OwnerConfiguration = this._v_Configuration;



                var aDirectoryParms = this.fResolvedParmValue(  theM_directory_test.PARMSPREFIX_DIRECTORY);
                if( aDirectoryParms && ( typeof aDirectoryParms == "object")) {

                    var someDirectoryParmNames = Object.keys( aDirectoryParms);
                    var aNumDirectoryParmNames = someDirectoryParmNames.length;

                    for( var aDirectoryParmNameIdx=0; aDirectoryParmNameIdx < aNumDirectoryParmNames; aDirectoryParmNameIdx++) {

                        var aDirectoryParmName = someDirectoryParmNames[ aDirectoryParmNameIdx];
                        if( aDirectoryParmName) {
                            if( aDirectoryParms.hasOwnProperty( aDirectoryParmName)) {

                                var aDirectoryParmValue = aDirectoryParms[ aDirectoryParmName];

                                var aFullParmName = theM_directory_test.PARMSPREFIX_DIRECTORY + "." + aDirectoryParmName;

                                aSyntheticDirectoryConfiguration.pInjectConfigParm( aFullParmName, aDirectoryParmValue);
                            }
                        }
                    }
                }


                aSyntheticDirectoryConfiguration.pInjectConfigParm( theM_directory_test.PARM_DIRECTORY_BASEPATHPARMNAME,    null)
                aSyntheticDirectoryConfiguration.pInjectConfigParm( theM_directory_test.PARM_DIRECTORY_BASEPATH,            null)
                aSyntheticDirectoryConfiguration.pInjectConfigParm( theM_directory_test.PARM_DIRECTORY_DIRPATHPARMNAME,     null)
                aSyntheticDirectoryConfiguration.pInjectConfigParm( theM_directory_test.PARM_DIRECTORY_DIRPATH,             null)
                aSyntheticDirectoryConfiguration.pInjectConfigParm( theM_directory_test.PARM_DIRECTORY_FULLDIRPATHPARMNAME, null)
                aSyntheticDirectoryConfiguration.pInjectConfigParm( theM_directory_test.PARM_DIRECTORY_FULLDIRPATH,         this._v_DirectoryOfUsedFullFilePath)
                aSyntheticDirectoryConfiguration.pInjectConfigParm( theM_directory_test.PARM_DIRECTORY_EXPANDHOME,          false)


                var aDirectoryTest = new theM_directory_test.Directory_Constructor(
                    aDirectoryTestTitle,
                    aSyntheticDirectoryConfiguration,
                    this._v_Identifier,
                    this._v_Recorder);


                var aDirectoryTestMethod = aDirectoryTest.pF_Directory;

                var aBoundDirectoryTestMethod = aDirectoryTestMethod.bind( aDirectoryTest);

                aBoundDirectoryTestMethod( theCallback)

            };
            if( pTryToDoDirectory){}/* CQT */
            aPrototype.pTryToDoDirectory = pTryToDoDirectory;










            var pS_DoDirectory = function( theCallback) {
                var aMethodName = "pS_DoDirectory";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( !this._v_UsedFullFilePath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_UsedFullFilePath", null));
                    return;
                }


                if( !this._v_DoDirectory) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_DoDirectory", null));
                    return;
                }


                var aExceptionHandler = this.fExceptionDoDirectoryHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fDoDirectoryCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    this.pTryToDoDirectory( aCallback);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_DoDirectory){}/* CQT */
            aPrototype.pS_DoDirectory = pS_DoDirectory;












            var pS_StatBefore = function( theCallback) {

                var aMethodName = "pS_StatBefore";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_FullFileExisted             = false;
                this._v_FullFileExists              = false;
                this._v_StatBefore                  = null;
                this._v_FullFilePathStatErrorBefore = null;


                if( !this._v_UsedFullFilePath) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_UsedFullFilePath", null));
                    return;
                }


                var aThis = this;


                theM_fs.stat( this._v_UsedFullFilePath, function( theError, theStats) {


                    aThis._v_FullFilePathStatErrorBefore = theError;
                    aThis._v_StatBefore                  = theStats;

                    var aStatBefore_JSONstr          = JSON.stringify(  aThis._v_StatBefore);
                    var aStatErrorBefore_JSONstr = JSON.stringify(  aThis._v_FullFilePathStatErrorBefore);
                    var aStatBefore_Report = "theM_fs.stat( _v_UsedFullFilePath=" + aThis._v_UsedFullFilePath + ") => _v_StatBefore=" + aStatBefore_JSONstr + " _v_StatErrorBefore=" + aStatErrorBefore_JSONstr;


                    if( theError) {

                        if( ( theError.errno == aThis.STAT_ERRNO_ENOENT) || ( theError.code == aThis.STAT_ERRCODE_ENOENT)) {

                            if( aThis._v_FailIfFileNotExists) {

                                if( aThis._v_Dump_Stats) {
                                    aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "ERROR theError " + aStatBefore_Report);
                                }

                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, aStatBefore_Report, aThis._v_FullFilePathStatErrorBefore));
                                return;
                            }
                            else {

                                if( aThis._v_Dump_Stats) {
                                    aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "EXPECTED NOT EXISTS theError " + aStatBefore_Report);
                                }

                                theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_INFO, aThis._v_UsedFullFilePath, aStatBefore_Report, aThis._v_FullFilePathStatErrorBefore));
                                return;
                            }
                        }

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, aStatBefore_Report, aThis._v_FullFilePathStatErrorBefore));
                        return;
                    }


                    if( !theStats && !theError) {
                        if( aThis._v_Dump_Stats) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "ERROR !theStats && !theError " + aStatBefore_Report);
                        }

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, "theM_fs.stat !theError && !theStats (" + aThis._v_UsedFullFilePath + ")", null));
                        return;
                    }


                    if( theStats.isDirectory()) {
                        if( aThis._v_Dump_Stats) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "ERROR FILE theStats.isDirectory() " + aStatBefore_Report);
                        }

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, "theM_fs.stat.isDirectory(" + aThis._v_UsedFullFilePath + ")", null));
                        return;
                    }


                    if( aThis._v_FailIfFileAlreadyExists) {

                        if( aThis._v_Dump_Stats) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "EXPECTED this._v_FailIfFileAlreadyExists " + aStatBefore_Report);
                        }

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, "this._v_FailIfFileAlreadyExists",  null));
                        return;
                    }



                    if( aThis._v_Dump_Stats) {
                        aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "OK FILE STATS BEFORE " + aStatBefore_Report);
                    }


                    aThis._v_FullFileExisted  = true;
                    aThis._v_FullFileExists   = true;

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, aThis._v_StatBefore, aThis._v_UsedFullFilePath, null));

                });


            };
            if( pS_StatBefore){}/* CQT */
            aPrototype.pS_StatBefore = pS_StatBefore;









            var fNewVoidReadFileOptions = function() {

                var aReadFileOptions = {
                    "encoding": null
                };

                return aReadFileOptions;

            };
            if( fNewVoidReadFileOptions){}/* CQT */
            aPrototype.fNewVoidReadFileOptions = fNewVoidReadFileOptions;









            var pS_ReadFileContentsBefore = function( theCallback) {

                var aMethodName = "pS_ReadFileContentsBefore";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_FileReadBefore          = false;
                this._v_FileContentsErrorBefore = null;
                this._v_FileContentsBefore      = null;


                if( !this._v_UsedFullFilePath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_UsedFullFilePath", null));
                    return;
                }

                if( !this._v_FullFileExisted) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_FullFileExisted", null));
                    return;
                }

                if( !this._v_ReadFileContents) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_ReadFileContents", null));
                    return;
                }


                var aReadFileOptions = this.fNewVoidReadFileOptions();

                if( this._v_FileEncoding == this.FILEENCODING_NULL_SENTINEL) {
                    aReadFileOptions[ "encoding"] = null;
                }
                else {
                    if( this._v_FileEncoding) {
                        aReadFileOptions[ "encoding"] = this._v_FileEncoding;
                    }
                }



                var aThis = this;


                theM_fs.readFile( this._v_UsedFullFilePath, aReadFileOptions, function( theError, theFileContents) {


                    aThis._v_FileContentsErrorBefore = theError;

                    if( aThis._v_UsePayloadHolder) {

                        aThis._v_FileContentsBefore = new theM_payloadholder.PayloadHolder_Constructor( theFileContents);
                    }
                    else {
                        aThis._v_FileContentsBefore = theFileContents;
                    }


                    if( theError) {

                        var aFileContentsErrorBefore_JSONstr = JSON.stringify(  aThis._v_FileContentsErrorBefore);
                        var aFileContentsErrorBefore_Report  = "theM_fs.readFile( _v_UsedFullFilePath=" + aThis._v_UsedFullFilePath + ") => _v_FileContentsErrorBefore=" + aFileContentsErrorBefore_JSONstr;

                        if( aThis._v_Dump_Reads) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "ERROR theError " + aFileContentsErrorBefore_Report);
                        }

                        if( ( theError.errno == aThis.STAT_ERRNO_ENOENT) || ( theError.code == aThis.STAT_ERRCODE_ENOENT)) {

                            if( aThis._v_FailIfFileNotExists) {
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, aFileContentsErrorBefore_Report, aThis._v_FileContentsErrorBefore));
                                return;
                            }
                            else {
                                theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_INFO, aThis._v_UsedFullFilePath, aFileContentsErrorBefore_Report, aThis._v_FileContentsErrorBefore));
                                return;
                            }
                        }

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, aFileContentsErrorBefore_Report, aThis._v_FileContentsErrorBefore));
                        return;
                    }


                    aThis._v_FileReadBefore = true;


                    var aLengthRead = 0;
                    if( typeof theFileContents == "string") {
                        aLengthRead = theFileContents.length;
                    }
                    else {
                        if( ( typeof theFileContents == "object") && theFileContents.constructor && ( theFileContents.constructor.name == "Buffer")) {
                            aLengthRead = theFileContents.length;
                        }
                    }


                    if( aThis._v_Dump_Reads) {
                        aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "OK READFILECONTENTSBEFORE "  + aThis._v_UsedFullFilePath + " lengthRead=" + aLengthRead);
                    }


                    if( aThis._v_Dump_FileContents) {
                        aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "READFILECONTENTSBEFORE " + aThis._v_UsedFullFilePath + " lengthRead=" + aLengthRead + " CONTENTS=>\n" + this.fModConversions().fConvertValueToJSONstr( theFileContents));
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, aThis._v_FileContentsErrorBefore, aThis._v_UsedFullFilePath, null));

                });

            };
            if( pS_ReadFileContentsBefore){}/* CQT */
            aPrototype.pS_ReadFileContentsBefore = pS_ReadFileContentsBefore;











            var pS_UnlinkFile = function( theCallback) {

                var aMethodName = "pS_UnlinkFile";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_UnlinkFileError             = null;
                this._v_FileUnlinked                = false;


                if( !this._v_UnlinkFile) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_UnlinkFile", null));
                    return;
                }


                if( !this._v_UsedFullFilePath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_UsedFullFilePath", null));
                    return;
                }

                if( !this._v_FullFileExisted) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_FullFileExisted", null));
                    return;
                }



                var aThis = this;


                theM_fs.unlink( this._v_UsedFullFilePath, function( theError) {


                    aThis._v_UnlinkFileError = theError;


                    if( theError) {

                        var aUnlinkFileError_JSONstr = JSON.stringify(  aThis._v_UnlinkFileError);
                        var aUnlinkFileError_Report  = "theM_fs.unlink( _v_UsedFullFilePath=" + aThis._v_UsedFullFilePath + ") => _v_UnlinkFileError=" + aUnlinkFileError_JSONstr;

                        if( aThis._v_Dump_Removals) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "ERROR theError " + aUnlinkFileError_Report);
                        }

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, aUnlinkFileError_Report, aThis._v_UnlinkFileError));
                        return;
                    }


                    aThis._v_FileUnlinked   = true;
                    aThis._v_FullFileExists = false;

                    if( aThis._v_Dump_Removals) {
                        aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "UNLINKED FILE _v_UsedFullFilePath=" + aThis._v_UsedFullFilePath);
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, aThis._v_UsedFullFilePath, null, null));

                });

            };
            if( pS_UnlinkFile){}/* CQT */
            aPrototype.pS_UnlinkFile = pS_UnlinkFile;











            var pS_CreateFile = function( theCallback) {

                var aMethodName = "pS_CreateFile";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_CreateFileError            = null;
                this._v_CreatedFileErrorDescriptor = null;
                this._v_FileCreated                = false;


                if( !this._v_CreateFile) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_UnlinkFile", null));
                    return;
                }


                if( !this._v_UsedFullFilePath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_UsedFullFilePath", null));
                    return;
                }

                /*
                if( this._v_FullFileExisted && !this._v_FileUnlinked) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "this._v_FullFileExisted && !this._v_FileUnlinked", null));
                    return;
                }

                 */


                var aCreateFileFlag = null;

                if( this._v_AppendToFile) {
                    aCreateFileFlag = this.OPENFILE_FLAG_APPEND_CREATEIFNOTEXISTS;
                }

                if( this._v_TruncateFile) {
                    aCreateFileFlag = this.OPENFILE_FLAG_WRITE_CREATEORTRUNCATE;
                }

                if( !aCreateFileFlag) {
                    aCreateFileFlag = this.OPENFILE_FLAG_WRITE_CREATEORTRUNCATE;
                }



                var aThis = this;

                theM_fs.open( this._v_UsedFullFilePath, aCreateFileFlag, this._v_CreateFileMode, function( theCreateFileError, theFileDescriptor) {


                    aThis._v_CreateFileError       = theCreateFileError;
                    aThis._v_CreateFileDescriptor  = theFileDescriptor;


                    if( aThis._v_CreateFileError) {

                        var aCreateFileError_JSONstr = JSON.stringify(  aThis._v_CreateFileError);
                        var aCreateFileError_Report  = "theM_fs.open( _v_UsedFullFilePath=" + aThis._v_UsedFullFilePath + ") => _v_CreateFileError=" + aCreateFileError_JSONstr;

                        if( aThis._v_Dump_CreateFile) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "ERROR theError " + aCreateFileError_Report);
                        }

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, aCreateFileError_Report, aThis._v_CreateFileError));
                        return;
                    }


                    if( !aThis._v_CreateFileDescriptor) {

                        if( aThis._v_Dump_CreateFile) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "ERROR !theFileDescriptor " + aThis._v_UsedFullFilePath);
                        }

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, "ERROR !theFileDescriptor", null));
                        return;
                    }


                    aThis._v_FileCreated    = true;
                    aThis._v_FullFileExists = true;

                    theM_fs.close( theFileDescriptor, function( theCloseFileError) {

                        if( aThis._v_Dump_CreateFile) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "CREATED FILE _v_UsedFullFilePath=" + aThis._v_UsedFullFilePath);
                        }

                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, aThis._v_StatBefore, aThis._v_UsedFullFilePath, null));
                    });

                });

            };
            if( pS_CreateFile){}/* CQT */
            aPrototype.pS_CreateFile = pS_CreateFile;









            var fNewVoidWriteFileOptions = function() {

                var aWriteFileOptions = {
                    "encoding": null,
                    "mode":     null,
                    "flag":     null
                };

                return aWriteFileOptions;

            };
            if( fNewVoidWriteFileOptions){}/* CQT */
            aPrototype.fNewVoidWriteFileOptions = fNewVoidWriteFileOptions;








            var pS_WriteFileContents = function( theCallback) {

                var aMethodName = "pS_WriteFileContents";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_FileWritten                 = false;
                this._v_WriteFileError              = null;
                this._v_FileContentsToWrite         = null;


                if( !this._v_UsedFullFilePath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_UsedFullFilePath", null));
                    return;
                }

                if( !this._v_FullFileExisted && !this._v_FileCreated) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_FullFileExisted && !this._v_FileCreated", null));
                    return;
                }

                if( !this._v_WriteFileContents) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_WriteFileContents", null));
                    return;
                }


                var aWriteFileOptions = this.fNewVoidWriteFileOptions();

                if( this._v_FileEncoding == this.FILEENCODING_NULL_SENTINEL) {
                    aWriteFileOptions[ "encoding"] = null;
                }
                else {
                    if( this._v_FileEncoding) {
                        aWriteFileOptions[ "encoding"] = this._v_FileEncoding;
                    }
                }



                if( this._v_CreateFileMode) {
                    aWriteFileOptions[ "mode"] = this._v_CreateFileMode;
                }

                var aWriteFileFlag = null;

                if( this._v_AppendToFile) {
                    aWriteFileFlag = this.OPENFILE_FLAG_APPEND_CREATEIFNOTEXISTS;
                }

                if( this._v_TruncateFile) {
                    aWriteFileFlag = this.OPENFILE_FLAG_WRITE_CREATEORTRUNCATE;
                }

                if( !aWriteFileFlag) {
                    aWriteFileFlag = this.OPENFILE_FLAG_WRITE_CREATEORTRUNCATE;
                }

                if( aWriteFileFlag) {
                    aWriteFileOptions[ "flag"] = aWriteFileFlag;
                }


                if( this._v_FileContentsToWriteParmName) {
                    this._v_FileContentsToWrite = this.fResolvedParmValue(  this._v_FileContentsToWriteParmName);
                }
                else {
                    this._v_FileContentsToWrite = this.fResolvedParmValue(  this.PARM_FILEACCESS_CONTENTSTOWRITE);
                }



                var aFileContentsToWrite = this._v_FileContentsToWrite;
                if( !( typeof aFileContentsToWrite == "undefined") && !( aFileContentsToWrite == null) && ( typeof aFileContentsToWrite == "object")
                    && aFileContentsToWrite.fIsPayloadHolder && ( typeof aFileContentsToWrite.fIsPayloadHolder  == "function") && aFileContentsToWrite.fIsPayloadHolder()) {

                    aFileContentsToWrite = this._v_FileContentsToWrite._v_Payload
                }

                var aContentsIsBuffer = false;
                var aLengthToWrite    = 0;

                if( typeof aFileContentsToWrite == "string") {
                    aLengthToWrite = aFileContentsToWrite.length;
                }
                else {
                    if(  aFileContentsToWrite && ( typeof aFileContentsToWrite == "object") && aFileContentsToWrite.constructor && ( aFileContentsToWrite.constructor.name == "Buffer")) {
                        aLengthToWrite = aFileContentsToWrite.length;
                    }
                    else {
                        aFileContentsToWrite = "";
                        aLengthToWrite = 0;
                    }
                }


                if( this._v_Dump_Writes) {
                    this.pToConsoleLikeEvent( this._v_Title + " " + "ABOUT TO WRITEFILECONTENTS "  + this._v_UsedFullFilePath + " isBuffer=" + aContentsIsBuffer + " lengthToWrite=" + aLengthToWrite);
                }

                if( this._v_Dump_ContentToWrite) {
                    this.pToConsoleLikeEvent( this._v_Title + " " + "ABOUT TO WRITEFILECONTENTS " + this._v_UsedFullFilePath + " isBuffer=" + aContentsIsBuffer + "  lengthToWrite=" + aLengthToWrite + " CONTENTS=>\n" + this.fModConversions().fConvertValueToJSONstr( this._v_FileContentsToWrite));
                }


                var aFSmethod     = theM_fs.writeFile;
                var aFSmethodName = "theM_fs.writeFile";

                if( this._v_AppendToFile) {
                    aFSmethod = theM_fs.appendFile;
                    aFSmethodName = "theM_fs.appendFile"
                }

                var aThis = this;

                aFSmethod( this._v_UsedFullFilePath, aFileContentsToWrite, aWriteFileOptions, function( theError) {


                    aThis._v_WriteFileError = theError;

                    if( theError) {

                        var aWriteFileContentsError_JSONstr = JSON.stringify(  aThis._v_WriteFileError);
                        var aWriteFileContentsError_Report  = aFSmethodName + " _v_UsedFullFilePath=" + aThis._v_UsedFullFilePath + ") => _v_WriteFileError=" + aWriteFileContentsError_JSONstr;

                        if( aThis._v_Dump_Writes) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " ERROR theError " + aWriteFileContentsError_Report);
                        }

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullFilePath, aWriteFileContentsError_Report, aThis._v_WriteFileError));
                        return;
                    }

                    aThis._v_FileWritten = true;

                    if( aThis._v_Dump_Writes) {
                        aThis.pToConsoleLikeEvent( aThis._v_Title + " " + "OK WRITEFILECONTENTS "  + aThis._v_UsedFullFilePath);
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, aThis._v_FileContentsToWrite, aThis._v_UsedFullFilePath, null));

                });

            };
            if( pS_WriteFileContents){}/* CQT */
            aPrototype.pS_WriteFileContents = pS_WriteFileContents;










            var pF_FileAccess = function( theCallback) {
                var aMethodName = "pF_FileAccess";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_FileAccess){}/* CQT */
            aPrototype.pF_FileAccess = pF_FileAccess;







            var fOwnTestMethodToRun = function() {
                return this.pSS_FileAccess.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_FileAccess = function( theCallback) {
                var aMethodName = "pSS_FileAccess";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_ResolveParms.bind( this),
                    this.pS_ComputeUsedFullPath.bind( this),
                    this.pS_DoDirectory.bind( this),
                    this.pS_StatBefore.bind( this),
                    this.pS_ReadFileContentsBefore.bind( this),
                    this.pS_UnlinkFile.bind( this),
                    this.pS_CreateFile.bind( this),  /*
                     this.pS_TouchFile.bind( this),
                     this.pS_TruncateFile.bind( this),  */
                    this.pS_WriteFileContents.bind( this), /*
                     this.pS_ReadFileContentsAfter.bind( this), */
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_FileAccess){}/* CQT */
            aPrototype.pSS_FileAccess = pSS_FileAccess;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;














            var fReleaseFileContents = function( ) {

                if( this._v_FileContentsBefore && ( typeof this._v_FileContentsBefore == "object") && this._v_FileContentsBefore.pReleasePayload && ( typeof this._v_FileContentsBefore.pReleasePayload == "function")) {
                    this._v_FileContentsBefore.pReleasePayload();
                }
                this._v_FileContentsBefore   = undefined;


                if( this._v_FileContentsToWrite && ( typeof this._v_FileContentsToWrite == "object") && this._v_FileContentsToWrite.pReleasePayload && ( typeof this._v_FileContentsToWrite.pReleasePayload == "function")) {
                    this._v_FileContentsToWrite.pReleasePayload();
                }
                this._v_FileContentsToWrite  = undefined;


                return true;
            };
            if( fReleaseFileContents){}/* CQT */
            aPrototype.fReleaseFileContents = fReleaseFileContents;








            return aPrototype;

        })();




        var FileAccess_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._v_FileAccessLazy = null;

            this._v_BasePathParmName             = null;
            this._v_BasePath                     = null;
            this._v_DirPathParmName              = null;
            this._v_DirPath                      = null;
            this._v_FilenameParmName             = null;
            this._v_Filename                     = null;
            this._v_FullFilePathParmName         = null;
            this._v_FullFilePath                 = null;
            this._v_ExpandHome                   = null;

            this._v_FileEncoding                 = null;

            this._v_ReadContents                 = null;

            this._v_UnlinkFile                   = null;

            this._v_CreateFile                   = null;
            this._v_CreateFileMode               = null;

            this._v_TruncateFile                 = null;
            this._v_FailIfFileNotEmpty           = null;

            this._v_FailIfFileNotExists              = null;
            this._v_FailIfFileAlreadyExists          = null;
            this._v_CreateDir                    = null;

            this._v_FileContentsToWriteParmName  = null;

            this._v_DoDirectory                  = null;

            this._v_UsePayloadHolder             = null;

            this._v_Dump_Paths                   = null;
            this._v_Dump_Stats                   = null;
            this._v_Dump_ParseResult             = null;
            this._v_Dump_FileContents            = null;
            this._v_Dump_Reads                   = null;
            this._v_Dump_Writes                  = null;
            this._v_Dump_Removals                = null;
            this._v_Dump_CreateFile              = null;

            this._v_FileDescriptorsToCloseOnUnwind       = null;
            this._v_NextFileDescriptorToCloseOnUnwindIndex = null;

            this._v_BasePathIsFromParmName       = null;
            this._v_DirPathIsFromParmName        = null;
            this._v_FilenameIsFromParmName       = null;
            this._v_FullFilePathIsFromParmName   = null;

            this._v_HomeDirPath                  = null;
            this._v_HomeDirPath                  = null;

            this._v_FullFilePathOrJoined         = null;
            this._v_HomeExpandedInFullFilePath   = null;
            this._v_FullFilePathParseResult      = null;
            this._v_FullFilePathMayBeRelative    = null;
            this._v_UsedFullFilePath             = null;
            this._v_UsedFullFilePathParseResult  = null;
            this._v_DirectoryOfUsedFullFilePath = null;
            this._v_BaseNameOfUsedFullFilePath   = null;

            this._v_StatBefore                   = null;
            this._v_StatErrorBefore              = null;
            this._v_FullFileExisted              = null;
            this._v_FullFileExists              = null;

            this._v_FileReadBefore               = null;
            this._v_FileContentsErrorBefore      = null;
            this._v_FileContentsBefore           = null;

            this._v_FileReadAfter                = null;
            this._v_FileContentsErrorAfter       = null;
            this._v_FileContentsAfter            = null;

            this._v_UnlinkFileError              = null;
            this._v_FileUnlinked                 = null;

            this._v_CreateFileError              = null;
            this._v_CreatedFileDescriptor        = null;
            this._v_FileCreated                  = null;

            this._v_TruncateFileError            = null;
            this._v_TruncatedFileDescriptor      = null;
            this._v_FileTruncated                = null;

            this._v_StatAfter                    = null;
            this._v_StatErrorAfter               = null;

            this._v_FileWritten                 = null;
            this._v_WriteFileError              = null;
            this._v_FileContentsToWrite         = null;

            this._pInit_FileAccess(
                theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        FileAccess_Constructor.prototype = aFileAccess_Prototype;





        var FileAccess_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aFileAccess_Prototype;
            this._v_Type = null;


            this._v_FileAccessLazy = null;

            this._v_BasePathParmName            = null;
            this._v_BasePath                    = null;
            this._v_DirPathParmName             = null;
            this._v_DirPath                     = null;
            this._v_FilenameParmName            = null;
            this._v_Filename                    = null;
            this._v_FullFilePathParmName        = null;
            this._v_FullFilePath                = null;
            this._v_ExpandHome                  = null;

            this._v_FileEncoding                = null;

            this._v_ReadContents                = null;

            this._v_UnlinkFile                  = null;

            this._v_CreateFile                  = null;
            this._v_CreateFileMode              = null;

            this._v_TruncateFile                = null;
            this._v_FailIfFileNotEmpty          = null;

            this._v_FailIfFileNotExists             = null;
            this._v_FailIfFileAlreadyExists         = null;
            this._v_CreateDir                   = null;

            this._v_FileContentsToWriteParmName = null;

            this._v_DoDirectory                 = null;

            this._v_UsePayloadHolder            = null;

            this._v_Dump_Paths                  = null;
            this._v_Dump_Stats                  = null;
            this._v_Dump_ParseResult            = null;
            this._v_Dump_FileContents           = null;
            this._v_Dump_Reads                  = null;
            this._v_Dump_Writes                 = null;
            this._v_Dump_Removals               = null;
            this._v_Dump_CreateFile             = null;

            this._v_FileDescriptorsToCloseOnUnwind       = null;
            this._v_NextFileDescriptorToCloseOnUnwindIndex = null;

            this._v_BasePathIsFromParmName      = null;
            this._v_DirPathIsFromParmName       = null;
            this._v_FilenameIsFromParmName      = null;
            this._v_FullFilePathIsFromParmName  = null;

            this._v_HomeDirPath                 = null;

            this._v_FullFilePathOrJoined        = null;
            this._v_HomeExpandedInFullFilePath  = null;
            this._v_FullFilePathParseResult     = null;
            this._v_FullFilePathMayBeRelative   = null;
            this._v_UsedFullFilePath            = null;
            this._v_UsedFullFilePathParseResult = null;
            this._v_DirectoryOfUsedFullFilePath = null;
            this._v_BaseNameOfUsedFullFilePath   = null;

            this._v_StatBefore                  = null;
            this._v_StatErrorBefore             = null;
            this._v_FullFileExisted             = null;
            this._v_FullFileExists              = null;

            this._v_FileReadBefore              = null;
            this._v_FileContentsErrorBefore     = null;
            this._v_FileContentsBefore          = null;

            this._v_FileReadAfter               = null;
            this._v_FileContentsErrorAfter      = null;
            this._v_FileContentsAfter           = null;

            this._v_UnlinkFileError             = null;
            this._v_FileUnlinked                = null;

            this._v_CreateFileError             = null;
            this._v_CreatedFileDescriptor       = null;
            this._v_FileCreated                 = null;

            this._v_TruncateFileError           = null;
            this._v_TruncatedFileDescriptor     = null;
            this._v_FileTruncated               = null;

            this._v_StatAfter                   = null;
            this._v_StatErrorAfter              = null;

            this._v_FileWritten                 = null;
            this._v_WriteFileError              = null;
            this._v_FileContentsToWrite         = null;

        };
        FileAccess_SuperPrototypeConstructor.prototype = aFileAccess_Prototype;



        var aModule = {
            "FileAccess_Prototype": aFileAccess_Prototype,
            "FileAccess_Constructor": FileAccess_Constructor,
            "FileAccess_SuperPrototypeConstructor": FileAccess_SuperPrototypeConstructor
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

            var aM_runsubs_test   = require('./runsubs-test');
            var aM_parms_general  = require('../general-test/parms-general');
            var aM_overrider      = require('./overrider');
            var aM_sentinels      = require('./sentinels');
            var aM_specloader     = require('./resloader/specloader');
            var aM_fs             = require('fs');
            var aM_path           = require('path');
            var aM_osenv          = require('osenv');
            var aM_parse_filepath = require('parse-filepath');
            var aM_traversals     = require('./traversals/traversals');
            var aM_directory_test = require('./directory-test');
            var aM_payloadholder  = require('./payloadholder');

            return aMod_definer(
                aM_runsubs_test,
                aM_parms_general,
                aM_overrider,
                aM_sentinels,
                aM_specloader,
                aM_fs,
                aM_path,
                aM_osenv,
                aM_parse_filepath,
                aM_traversals,
                aM_directory_test,
                aM_payloadholder
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./runsubs-test",
            "../general-test/parms-general",
            "./overrider",
            "./sentinels",
            "./resloader/specloader",
            "fs",
            "path",
            "osenv",
            "parse-filepath",
            "./traversals/traversals",
            "./directory-test",
            "./payloadholder"
        ], function (
            theM_runsubs_test,
            theM_parms_general,
            theM_overrider,
            theM_sentinels,
            theM_specloader,
            theM_fs,
            theM_path,
            theM_osenv,
            theM_parse_filepath,
            theM_traversals,
            theM_directory_test,
            theM_payloadholder
        ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_parms_general,
                theM_overrider,
                theM_sentinels,
                theM_specloader,
                theM_fs,
                theM_path,
                theM_osenv,
                theM_parse_filepath,
                theM_traversals,
                theM_directory_test,
                theM_payloadholder
            );
        });
    }


}());


