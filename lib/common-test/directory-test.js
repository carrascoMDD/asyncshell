'use strict';

/*
 directory-test.js
 Creado 201510240217
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_parms_general,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_specloader,
                                 theM_fs,
                                 theM_path,
                                 theM_osenv,
                                 theM_parse_filepath,
                                 theM_traversals) {


        var ModuleName     = "directory-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

    
            theToInit.EXPANDHOME            = true;

            theToInit.DUMP_PATHS            = false;
            theToInit.DUMP_STATS            = false;
            theToInit.DUMP_PARSERESULT      = false;
            theToInit.DUMP_READDIRS         = false;
            theToInit.DUMP_DIRCONTENTS      = false;
            theToInit.DUMP_TREE             = false;
            theToInit.DUMP_TREEINDENTED     = false;
            theToInit.DUMP_TREESTATS        = false;
            theToInit.DUMP_REMOVALS         = false;
            theToInit.DUMP_MKDIRS           = false;

            theToInit.FAILIFNOTEXISTS       = false;
            theToInit.FAILIFALREADYEXISTS   = false;
            theToInit.CREATEDIR             = false;
            theToInit.CREATEDIRMODE        = parseInt('0770',8); /* Octal 0x666 mode like chmod ug+rwx user group read write list ; chmod o-rwx others do not read write list */

            theToInit.TREE                 = false;
            theToInit.TREEDIRS             = false;
            theToInit.TREEFILES            = false;
            theToInit.TREELEVEL            = 0;

            theToInit.RMDIR                = false;
            theToInit.RMDIRCONTENTSFILES   = false;
            theToInit.RMDIRCONTENTSDIRS    = false;
            theToInit.FAILIFNOTEMPTY       = false;

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


            theToInit.PARMSPREFIX_DIRECTORY  = "directory";

            theToInit.PARM_DIRECTORY_LAZY    = theToInit.PARMSPREFIX_DIRECTORY + ".lazy";

            theToInit.DIRECTORYLAZY_DEFAULT = false;

            theToInit.PARM_DIRECTORY_BASEPATHPARMNAME            = theToInit.PARMSPREFIX_DIRECTORY + ".basePathParmName";
            theToInit.PARM_DIRECTORY_BASEPATH                    = theToInit.PARMSPREFIX_DIRECTORY + ".basePath";
            theToInit.PARM_DIRECTORY_DIRPATHPARMNAME             = theToInit.PARMSPREFIX_DIRECTORY + ".dirPathParmName";
            theToInit.PARM_DIRECTORY_DIRPATH                     = theToInit.PARMSPREFIX_DIRECTORY + ".dirPath";
            theToInit.PARM_DIRECTORY_FULLDIRPATHPARMNAME         = theToInit.PARMSPREFIX_DIRECTORY + ".fullDirPathParmName";
            theToInit.PARM_DIRECTORY_FULLDIRPATH                 = theToInit.PARMSPREFIX_DIRECTORY + ".fullDirPath";
            theToInit.PARM_DIRECTORY_EXPANDHOME                  = theToInit.PARMSPREFIX_DIRECTORY + ".expandHome";

            theToInit.PARM_DIRECTORY_TREE                        = theToInit.PARMSPREFIX_DIRECTORY + ".tree";
            theToInit.PARM_DIRECTORY_TREEDIRS                    = theToInit.PARMSPREFIX_DIRECTORY + ".treeDirs";
            theToInit.PARM_DIRECTORY_TREELEVEL                   = theToInit.PARMSPREFIX_DIRECTORY + ".treeLevel";
            theToInit.PARM_DIRECTORY_TREEFILES                   = theToInit.PARMSPREFIX_DIRECTORY + ".treeFiles";

            theToInit.PARM_DIRECTORY_RMDIR                       = theToInit.PARMSPREFIX_DIRECTORY + ".rmDir";
            theToInit.PARM_DIRECTORY_RMDIRCONTENTSFILES          = theToInit.PARMSPREFIX_DIRECTORY + ".rmDirContentsFiles";
            theToInit.PARM_DIRECTORY_RMDIRCONTENTSDIRS           = theToInit.PARMSPREFIX_DIRECTORY + ".rmDirContentsDirs";
            theToInit.PARM_DIRECTORY_FAILIFNOTEMPTY              = theToInit.PARMSPREFIX_DIRECTORY + ".failIfDirNotEmpty";

            theToInit.PARM_DIRECTORY_FAILIFNOTEXISTS             = theToInit.PARMSPREFIX_DIRECTORY + ".failIfDirNotExists";
            theToInit.PARM_DIRECTORY_FAILIFALREADYEXISTS         = theToInit.PARMSPREFIX_DIRECTORY + ".failIfDirAlreadyExists";
            theToInit.PARM_DIRECTORY_CREATEDIR                   = theToInit.PARMSPREFIX_DIRECTORY + ".createDir";
            theToInit.PARM_DIRECTORY_CREATEMODE                  = theToInit.PARMSPREFIX_DIRECTORY + ".createDirMode";

            theToInit.PARM_DIRECTORY_DUMP_PATHS                  = theToInit.PARMSPREFIX_DIRECTORY + ".dumppaths";
            theToInit.PARM_DIRECTORY_DUMP_STATS                  = theToInit.PARMSPREFIX_DIRECTORY + ".dumpstats";
            theToInit.PARM_DIRECTORY_DUMP_PARSERESULT            = theToInit.PARMSPREFIX_DIRECTORY + ".dumpparseresult";
            theToInit.PARM_DIRECTORY_DUMP_READDIRS               = theToInit.PARMSPREFIX_DIRECTORY + ".dumpreaddirs";
            theToInit.PARM_DIRECTORY_DUMP_DIRCONTENTS            = theToInit.PARMSPREFIX_DIRECTORY + ".dumpdircontents";
            theToInit.PARM_DIRECTORY_DUMP_TREE                   = theToInit.PARMSPREFIX_DIRECTORY + ".dumptree";
            theToInit.PARM_DIRECTORY_DUMP_TREEINDENTED           = theToInit.PARMSPREFIX_DIRECTORY + ".dumptreeindented";
            theToInit.PARM_DIRECTORY_DUMP_TREESTATS              = theToInit.PARMSPREFIX_DIRECTORY + ".dumptreestats";
            theToInit.PARM_DIRECTORY_DUMP_REMOVALS               = theToInit.PARMSPREFIX_DIRECTORY + ".dumpremovals";
            theToInit.PARM_DIRECTORY_DUMP_MKDIRS                 = theToInit.PARMSPREFIX_DIRECTORY + ".dumpmkdirs";



            theToInit.PARMS_DIRECTORY = [
                theToInit.PARM_DIRECTORY_LAZY,

                theToInit.PARM_DIRECTORY_BASEPATHPARMNAME       ,
                theToInit.PARM_DIRECTORY_BASEPATH               ,
                theToInit.PARM_DIRECTORY_DIRPATHPARMNAME        ,
                theToInit.PARM_DIRECTORY_DIRPATH                ,
                theToInit.PARM_DIRECTORY_FULLDIRPATHPARMNAME    ,
                theToInit.PARM_DIRECTORY_FULLDIRPATH            ,
                theToInit.PARM_DIRECTORY_EXPANDHOME             ,

                theToInit.PARM_DIRECTORY_TREE                   ,
                theToInit.PARM_DIRECTORY_TREEDIRS               ,
                theToInit.PARM_DIRECTORY_TREEFILES              ,
                theToInit.PARM_DIRECTORY_TREELEVEL              ,

                theToInit.PARM_DIRECTORY_RMDIR                  ,
                theToInit.PARM_DIRECTORY_FAILIFNOTEMPTY         ,
                theToInit.PARM_DIRECTORY_RMDIRCONTENTSFILES     ,
                theToInit.PARM_DIRECTORY_RMDIRCONTENTSDIRS      ,

                theToInit.PARM_DIRECTORY_FAILIFNOTEXISTS        ,
                theToInit.PARM_DIRECTORY_FAILIFALREADYEXISTS    ,
                theToInit.PARM_DIRECTORY_CREATEDIR              ,
                theToInit.PARM_DIRECTORY_CREATEMODE             ,

                theToInit.PARM_DIRECTORY_DUMP_PATHS             ,
                theToInit.PARM_DIRECTORY_DUMP_STATS             ,
                theToInit.PARM_DIRECTORY_DUMP_PARSERESULT       ,

                theToInit.PARM_DIRECTORY_DUMP_READDIRS          ,

                theToInit.PARM_DIRECTORY_DUMP_DIRCONTENTS       ,

                theToInit.PARM_DIRECTORY_DUMP_TREE              ,
                theToInit.PARM_DIRECTORY_DUMP_TREEINDENTED      ,
                theToInit.PARM_DIRECTORY_DUMP_TREESTATS         ,

                theToInit.PARM_DIRECTORY_DUMP_REMOVALS          ,

                theToInit.PARM_DIRECTORY_DUMP_MKDIRS            ,

            ];




            theToInit.HOMEDIRTOREPLACETOKEN = "~";

            theToInit.DIRPATHSEPARATOR= "/";


            theToInit.PROPERTYNAMESTAT = "stat";
            


            theToInit.STAT_ERRNO_ENOENT   = 34;
            theToInit.STAT_ERRCODE_ENOENT = "ENOENT";


            theToInit.DIRSTEPSMODESTAT  = "STAT";
            theToInit.DIRSTEPSMODEMKDIR = "MKDIR";

            theToInit.DIRSTEPSMODES = [
                theToInit.DIRSTEPSMODESTAT,
                theToInit.DIRSTEPSMODEMKDIR
            ];

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











        var aDirectory_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "Directory";

            aPrototype._v_Prototype_Directory = aPrototype;


            aPrototype._v_DirectoryLazy = null;

            aPrototype._v_BasePathParmName            = null;
            aPrototype._v_BasePath                    = null;
            aPrototype._v_DirPathParmName             = null;
            aPrototype._v_DirPath                     = null;
            aPrototype._v_FullDirPathParmName         = null;
            aPrototype._v_FullDirPath                 = null;
            aPrototype._v_ExpandHome                  = null;

            aPrototype._v_Tree                        = null;
            aPrototype._v_TreeDirs                    = null;
            aPrototype._v_TreeFiles                   = null;
            aPrototype._v_TreeLevel                   = null;

            aPrototype._v_RmDir                       = null;
            aPrototype._v_RmDirContentsDirs           = null;
            aPrototype._v_RmDirContentsFiles          = null;
            aPrototype._v_FailIfNotEmpty              = null;


            aPrototype._v_FailIfNotExists             = null;
            aPrototype._v_FailIfAlreadyExists         = null;
            aPrototype._v_CreateDir                   = null;
            aPrototype._v_CreateDirMode               = null;

            aPrototype._v_Dump_Paths                  = null;
            aPrototype._v_Dump_Stats                  = null;
            aPrototype._v_Dump_ParseResult            = null;
            aPrototype._v_Dump_DirContents            = null;
            aPrototype._v_Dump_Readdirs               = null;
            aPrototype._v_Dump_Tree                   = null;
            aPrototype._v_Dump_TreeIndented           = null;
            aPrototype._v_Dump_TreeStats              = null;
            aPrototype._v_Dump_Removals               = null;
            aPrototype._v_Dump_Mkdirs                 = null;



            aPrototype._v_BasePathIsFromParmName      = null;
            aPrototype._v_DirPathIsFromParmName       = null;
            aPrototype._v_FullDirPathIsFromParmName   = null;

            aPrototype._v_HomeDirPath                 = null;

            aPrototype._v_FullDirPathOrJoined         = null;
            aPrototype._v_HomeExpandedInFullDirPath   = null;
            aPrototype._v_FullDirPathParseResult      = null;
            aPrototype._v_FullDirPathMayBeRelative    = null;
            aPrototype._v_UsedFullDirPath             = null;

            aPrototype._v_StatBefore                  = null;
            aPrototype._v_StatErrorBefore             = null;
            aPrototype._v_FullDirExisted              = null;
            aPrototype._v_FullDirRemoved              = null;
            aPrototype._v_FullDirExists               = null;
            aPrototype._v_DirsCreated                 = null;
            aPrototype._v_MkdirsExceptions            = null;
            aPrototype._v_StatAfter                   = null;
            aPrototype._v_StatErrorAfter              = null;

            aPrototype._v_FullDirPathSteps            = null;
            aPrototype._v_PathsToStatOrMkdir          = null;

            aPrototype._v_DirStepsMode                = null;

            aPrototype._v_DirStepIndex                = null;
            aPrototype._v_LastPathToStatOrMkdir       = null;
            aPrototype._v_LastPathStatBefore          = null;
            aPrototype._v_LastPathStatErrorBefore     = null;
            aPrototype._v_LastPathIsNotDirectory      = null;

            aPrototype._v_LastPathStatAfter           = null;
            aPrototype._v_LastPathStatErrorAfter      = null;

            aPrototype._v_PathStatsBefore             = null;
            aPrototype._v_PathStatsErrorsBefore       = null;

            aPrototype._v_PathStatsAfter              = null;
            aPrototype._v_PathStatsErrorAfter         = null;

            aPrototype._v_DirsToTree    = null;
            aPrototype._v_DirsTree                    = null;
            aPrototype._v_DirsInTreePaths             = null;
            aPrototype._v_FilesInTreePaths            = null;

            aPrototype._v_LastReaddirError            = null;
            aPrototype._v_LastReaddirSubdirsOrFiles   = null;

            aPrototype._v_LastRmdirError              = null;
            aPrototype._v_LastRmdirPath               = null;




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Directory(
                    theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_Directory = function(
                theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_DirectoryLazy = null;

                this._v_BasePathParmName            = null;
                this._v_BasePath                    = null;
                this._v_DirPathParmName             = null;
                this._v_DirPath                     = null;
                this._v_FullDirPathParmName         = null;
                this._v_FullDirPath                 = null;
                this._v_ExpandHome                  = null;

                this._v_Tree                        = null;
                this._v_TreeDirs                    = null;
                this._v_TreeFiles                   = null;
                this._v_TreeLevel                   = null;

                this._v_RmDir                       = null;
                this._v_RmDirContentsFiles          = null;
                this._v_RmDirContentsDirs           = null;
                this._v_FailIfNotEmpty              = null;

                this._v_FailIfNotExists             = null;
                this._v_FailIfAlreadyExists         = null;
                this._v_CreateDir                   = null;
                this._v_CreateDirMode               = null;

                this._v_Dump_Paths                  = null;
                this._v_Dump_Stats                  = null;
                this._v_Dump_ParseResult            = null;
                this._v_Dump_Readdirs               = null;
                this._v_Dump_DirContents            = null;
                this._v_Dump_Tree                   = null;
                this._v_Dump_TreeIndented           = null;
                this._v_Dump_TreeStats              = null;
                this._v_Dump_Removals               = null;
                this._v_Dump_Mkdirs                 = null;


                this._v_BasePathIsFromParmName      = null;
                this._v_DirPathIsFromParmName       = null;
                this._v_FullDirPathIsFromParmName   = null;

                this._v_HomeDirPath                 = null;

                this._v_FullDirPathOrJoined         = null;
                this._v_HomeExpandedInFullDirPath   = null;
                this._v_FullDirPathParseResult      = null;
                this._v_FullDirPathMayBeRelative    = null;
                this._v_UsedFullDirPath             = null;

                this._v_StatBefore                  = null;
                this._v_StatErrorBefore             = null;
                this._v_FullDirExisted              = null;
                this._v_FullDirRemoved              = null;
                this._v_FullDirExists               = null;
                this._v_DirsCreated                 = [ ];
                this._v_MkdirsExceptions            = [ ];
                this._v_StatAfter                   = null;
                this._v_StatErrorAfter              = null;

                this._v_FullDirPathSteps            = null;
                this._v_PathsToStatOrMkdir          = null;

                this._v_DirStepsMode                = null;

                this._v_DirStepIndex                = null;
                this._v_LastPathToStatOrMkdir       = null;
                this._v_LastPathStatBefore          = null;
                this._v_LastPathStatErrorBefore     = null;
                this._v_LastPathIsNotDirectory      = null;
                this._v_LastPathStatAfter           = null;
                this._v_LastPathStatErrorAfter      = null;

                this._v_PathStatsBefore             = null;
                this._v_PathStatsErrorsBefore       = null;
                this._v_PathStatsAfter              = null;
                this._v_PathStatsErrorAfter         = null;

                this._v_DirsToTree                  = null;
                this._v_DirsTree                    = null;
                this._v_DirsInTreePaths             = null;
                this._v_FilesInTreePaths            = null;

                this._v_LastReaddirError            = null;
                this._v_LastReaddirSubdirsOrFiles   = null;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Directory", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Directory){}/* CQT */
            aPrototype._pInit_Directory = _pInit_Directory;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Directory( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Directory = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */


                this._v_DirectoryLazy = undefined;

                this._v_BasePathParmName            = undefined;
                this._v_BasePath                    = undefined;
                this._v_DirPathParmName             = undefined;
                this._v_DirPath                     = undefined;
                this._v_FullDirPathParmName         = undefined;
                this._v_FullDirPath                 = undefined;
                this._v_ExpandHome                  = undefined;

                this._v_Tree                        = undefined;
                this._v_TreeDirs                    = undefined;
                this._v_TreeLevel                   = undefined;
                this._v_TreeFiles                   = undefined;

                this._v_RmDir                       = undefined;
                this._v_RmDirContentsFiles          = undefined;
                this._v_RmDirContentsDirs           = undefined;
                this._v_FailIfNotEmpty              = undefined;

                this._v_FailIfNotExists             = undefined;
                this._v_FailIfAlreadyExists         = undefined;
                this._v_CreateDir                   = undefined;
                this._v_CreateDirMode               = undefined;

                this._v_Dump_Paths                  = undefined;
                this._v_Dump_Stats                  = undefined;
                this._v_Dump_ParseResult            = undefined;
                this._v_Dump_Readdirs               = undefined;
                this._v_Dump_DirContents            = undefined;
                this._v_Dump_Tree                   = undefined;
                this._v_Dump_TreeIndented           = undefined;
                this._v_Dump_TreeStats              = undefined;
                this._v_Dump_Removals               = undefined;
                this._v_Dump_Mkdirs                 = undefined;


                this._v_BasePathIsFromParmName      = undefined;
                this._v_DirPathIsFromParmName       = undefined;
                this._v_FullDirPathIsFromParmName   = undefined;

                this._v_HomeDirPath                 = undefined;

                this._v_FullDirPathOrJoined         = undefined;
                this._v_HomeExpandedInFullDirPath   = undefined;
                this._v_FullDirPathParseResult      = undefined;
                this._v_FullDirPathMayBeRelative    = undefined;
                this._v_UsedFullDirPath             = undefined;

                this._v_StatBefore                  = undefined;
                this._v_StatErrorBefore             = undefined;
                this._v_FullDirExisted              = undefined;
                this._v_FullDirRemoved              = undefined;
                this._v_FullDirExists               = undefined;
                this._v_DirsCreated                 = undefined;
                this._v_MkdirsExceptions            = undefined;
                this._v_StatAfter                   = undefined;
                this._v_StatErrorAfter              = undefined;

                this._v_FullDirPathSteps            = undefined;
                this._v_PathsToStatOrMkdir          = undefined;

                this._v_DirStepsMode                = undefined;

                this._v_DirStepIndex                = undefined;
                this._v_LastPathToStatOrMkdir       = undefined;
                this._v_LastPathStatBefore          = undefined;
                this._v_LastPathStatErrorBefore     = undefined;
                this._v_LastPathIsNotDirectory      = undefined;
                this._v_LastPathStatAfter           = undefined;
                this._v_LastPathStatErrorAfter      = undefined;

                this._v_PathStatsBefore             = undefined;
                this._v_PathStatsErrorsBefore       = undefined;
                this._v_PathStatsAfter              = undefined;
                this._v_PathStatsErrorAfter         = undefined;

                this._v_DirsToTree                  = undefined;
                this._v_DirsTree                    = undefined;
                this._v_DirsInTreePaths             = undefined;
                this._v_FilesInTreePaths            = undefined;

                this._v_LastReaddirError            = undefined;
                this._v_LastReaddirSubdirsOrFiles   = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Directory){}/* CQT */
            aPrototype._pRelease_Directory = _pRelease_Directory;









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

                this.pCleanUpTest_Directory( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Directory = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {


                    this._v_BasePathIsFromParmName      = undefined;
                    this._v_DirPathIsFromParmName       = undefined;
                    this._v_FullDirPathIsFromParmName   = undefined;

                    this._v_HomeDirPath                 = undefined;

                    this._v_FullDirPathOrJoined         = undefined;
                    this._v_HomeExpandedInFullDirPath   = undefined;
                    this._v_FullDirPathParseResult      = undefined;
                    this._v_FullDirPathMayBeRelative    = undefined;
                    this._v_UsedFullDirPath             = undefined;

                    this._v_StatBefore                  = undefined;
                    this._v_StatErrorBefore             = undefined;
                    this._v_FullDirExisted              = undefined;
                    this._v_FullDirRemoved              = undefined;
                    this._v_FullDirExists               = undefined;
                    this._v_DirsCreated                 = undefined;
                    this._v_MkdirsExceptions            = undefined;
                    this._v_StatAfter                   = undefined;
                    this._v_StatErrorAfter              = undefined;

                    this._v_FullDirPathSteps            = undefined;
                    this._v_PathsToStatOrMkdir          = undefined;

                    this._v_DirStepsMode                = undefined;

                    this._v_DirStepIndex                = undefined;
                    this._v_LastPathToStatOrMkdir       = undefined;
                    this._v_LastPathStatBefore          = undefined;
                    this._v_LastPathStatErrorBefore     = undefined;
                    this._v_LastPathIsNotDirectory      = undefined;
                    this._v_LastPathStatAfter           = undefined;
                    this._v_LastPathStatErrorAfter      = undefined;

                    this._v_PathStatsBefore             = undefined;
                    this._v_PathStatsErrorsBefore       = undefined;
                    this._v_PathStatsAfter              = undefined;
                    this._v_PathStatsErrorAfter         = undefined;

                    this._v_DirsToTree                  = undefined;
                    this._v_DirsTree                    = undefined;
                    this._v_DirsInTreePaths             = undefined;
                    this._v_FilesInTreePaths            = undefined;

                    this._v_LastReaddirError            = undefined;
                    this._v_LastReaddirSubdirsOrFiles   = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Directory){}/* CQT */
            aPrototype.pCleanUpTest_Directory = pCleanUpTest_Directory;










            var pS_ResolveParms = function( theCallback) {

                var aMethodName = "pS_ResolveParms";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                
                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_Configuration", null));
                    return  null;
                }


                this._v_DirectoryLazy = this.fResolvedParmValue(  this.PARM_DIRECTORY_LAZY);
                if( this._v_DirectoryLazy == null) {
                    this._v_DirectoryLazy = this.DIRECTORYLAZY_DEFAULT;
                }



                var someParmsToResolve = [
                    this.PARM_DIRECTORY_BASEPATHPARMNAME       ,
                    this.PARM_DIRECTORY_BASEPATH               ,
                    this.PARM_DIRECTORY_DIRPATHPARMNAME        ,
                    this.PARM_DIRECTORY_DIRPATH                ,
                    this.PARM_DIRECTORY_FULLDIRPATHPARMNAME    ,
                    this.PARM_DIRECTORY_FULLDIRPATH            ,
                    this.PARM_DIRECTORY_EXPANDHOME             ,

                    this.PARM_DIRECTORY_TREE                   ,
                    this.PARM_DIRECTORY_TREEDIRS               ,
                    this.PARM_DIRECTORY_TREEFILES              ,
                    this.PARM_DIRECTORY_TREELEVEL              ,

                    this.PARM_DIRECTORY_RMDIR                  ,
                    this.PARM_DIRECTORY_RMDIRCONTENTSFILES     ,
                    this.PARM_DIRECTORY_RMDIRCONTENTSDIRS      ,
                    this.PARM_DIRECTORY_FAILIFNOTEMPTY         ,

                    this.PARM_DIRECTORY_FAILIFNOTEXISTS        ,
                    this.PARM_DIRECTORY_FAILIFALREADYEXISTS    ,
                    this.PARM_DIRECTORY_CREATEDIR              ,
                    this.PARM_DIRECTORY_CREATEMODE             ,

                    this.PARM_DIRECTORY_DUMP_PATHS             ,
                    this.PARM_DIRECTORY_DUMP_STATS             ,
                    this.PARM_DIRECTORY_DUMP_PARSERESULT       ,

                    this.PARM_DIRECTORY_DUMP_READDIRS          ,

                    this.PARM_DIRECTORY_DUMP_DIRCONTENTS       ,

                    this.PARM_DIRECTORY_DUMP_TREE              ,
                    this.PARM_DIRECTORY_DUMP_TREEINDENTED      ,
                    this.PARM_DIRECTORY_DUMP_TREESTATS         ,

                    this.PARM_DIRECTORY_DUMP_REMOVALS          ,

                    this.PARM_DIRECTORY_DUMP_MKDIRS
                ];


                
                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return  false;
                }





                if( this._v_Dump_Paths == null) {

                    var aDump_PathsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_PATHS];
                    if( aDump_PathsResolution && aDump_PathsResolution._v_Success) {
                        this._v_Dump_Paths = aDump_PathsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Paths = this.DUMP_PATHS;
                    }
                }



                if( this._v_Dump_Stats == null) {

                    var aDump_StatsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_STATS];
                    if( aDump_StatsResolution && aDump_StatsResolution._v_Success) {
                        this._v_Dump_Stats = aDump_StatsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Stats = this.DUMP_STATS;
                    }
                }



                if( this._v_Dump_ParseResult == null) {

                    var aDump_ParseResultResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_PARSERESULT];
                    if( aDump_ParseResultResolution && aDump_ParseResultResolution._v_Success) {
                        this._v_Dump_ParseResult = aDump_ParseResultResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_ParseResult = this.DUMP_PARSERESULT;
                    }
                }







                if( this._v_Dump_Readdirs == null) {

                    var aDump_ReaddirsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_READDIRS];
                    if( aDump_ReaddirsResolution && aDump_ReaddirsResolution._v_Success) {
                        this._v_Dump_Readdirs = aDump_ReaddirsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Readdirs = this.DUMP_READDIRS;
                    }
                }





                if( this._v_Dump_DirContents == null) {

                    var aDump_DirContentsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_DIRCONTENTS];
                    if( aDump_DirContentsResolution && aDump_DirContentsResolution._v_Success) {
                        this._v_Dump_DirContents = aDump_DirContentsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_DirContents = this.DUMP_DIRCONTENTS;
                    }
                }




                if( this._v_Dump_Tree == null) {

                    var aDump_TreeResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_TREE];
                    if( aDump_TreeResolution && aDump_TreeResolution._v_Success) {
                        this._v_Dump_Tree = aDump_TreeResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Tree = this.DUMP_TREE;
                    }
                }




                if( this._v_Dump_TreeIndented == null) {

                    var aDump_TreeIndentedResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_TREEINDENTED];
                    if( aDump_TreeIndentedResolution && aDump_TreeIndentedResolution._v_Success) {
                        this._v_Dump_TreeIndented = aDump_TreeIndentedResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_TreeIndented = this.DUMP_TREEINDENTED;
                    }
                }




                if( this._v_Dump_TreeStats == null) {

                    var aDump_TreeStatsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_TREESTATS];
                    if( aDump_TreeStatsResolution && aDump_TreeStatsResolution._v_Success) {
                        this._v_Dump_TreeStats = aDump_TreeStatsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_TreeStats = this.DUMP_TREESTATS;
                    }
                }





                if( this._v_Dump_Removals == null) {

                    var aDump_RemovalsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_REMOVALS];
                    if( aDump_RemovalsResolution && aDump_RemovalsResolution._v_Success) {
                        this._v_Dump_Removals = aDump_RemovalsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Removals = this.DUMP_REMOVALS;
                    }
                }





                if( this._v_Dump_Mkdirs == null) {

                    var aDump_MkdirsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DUMP_MKDIRS];
                    if( aDump_MkdirsResolution && aDump_MkdirsResolution._v_Success) {
                        this._v_Dump_Mkdirs = aDump_MkdirsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Mkdirs = this.DUMP_MKDIRS;
                    }
                }






                if( this._v_BasePathParmName == null) {

                    var aBasePathParmNamePathResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_BASEPATHPARMNAME];
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
                        var aBasePathPathResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_BASEPATH];
                        if( aBasePathPathResolution && aBasePathPathResolution._v_Success) {
                            this._v_BasePath = aBasePathPathResolution._v_ParmValue;

                            this._v_BasePathIsFromParmName = false;
                        }
                    }

                    if( this._v_Dump_Paths) {
                        this.pToConsoleLikeEvent( this._v_Title + " _v_BasePath=" + this._v_BasePath + " _v_BasePathIsFromParmName=" + this._v_BasePathIsFromParmName + " _v_BasePathParmName=" + this._v_BasePathParmName);
                    }
                }



                if( this._v_DirPathParmName == null) {

                    var aDirPathParmNameResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DIRPATHPARMNAME];
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
                        var aDirPathResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_DIRPATH];
                        if( aDirPathResolution && aDirPathResolution._v_Success) {
                            this._v_DirPath = aDirPathResolution._v_ParmValue;

                            this._v_DirPathIsFromParmName = false;
                        }
                    }

                    if( this._v_Dump_Paths) {
                        this.pToConsoleLikeEvent( this._v_Title + " _v_DirPath=" + this._v_DirPath + " _v_DirPathIsFromParmName=" + this._v_DirPathIsFromParmName + " _v_DirPathParmName=" + this._v_DirPathParmName);
                    }
                }




                if( this._v_FullDirPathParmName == null) {

                    var aFullDirPathParmNameResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_FULLDIRPATHPARMNAME];
                    if( aFullDirPathParmNameResolution && aFullDirPathParmNameResolution._v_Success) {
                        this._v_FullDirPathParmName = aFullDirPathParmNameResolution._v_ParmValue;
                    }

                    if( this._v_FullDirPathParmName) {
                        this._v_FullDirPath = this.fResolvedParmValue(  this._v_FullDirPathParmName);

                        this._v_FullDirPathIsFromParmName = true;
                        if( !this._v_FullDirPath) {
                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null,  "this._v_FullDirPathParmName && !this._v_FullDirPath", this._v_FullDirPathParmName));
                            return;
                        }
                    }
                    else {
                        var aFullDirPathResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_FULLDIRPATH];
                        if( aFullDirPathResolution && aFullDirPathResolution._v_Success) {
                            this._v_FullDirPath = aFullDirPathResolution._v_ParmValue;

                            this._v_FullDirPathIsFromParmName = false;
                        }
                    }

                    if( this._v_Dump_Paths) {
                        this.pToConsoleLikeEvent( this._v_Title + " _v_FullDirPath=" + this._v_FullDirPath + " _v_FullDirPathIsFromParmName=" + this._v_FullDirPathIsFromParmName + " _v_FullDirPathParmName=" + this._v_FullDirPathParmName);
                    }
                }




                if( this._v_FailIfNotExists == null) {

                    var aFailIfNotExistsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_FAILIFNOTEXISTS];
                    if( aFailIfNotExistsResolution && aFailIfNotExistsResolution._v_Success) {
                        this._v_FailIfNotExists = aFailIfNotExistsResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIfNotExists = this.FAILIFNOTEXISTS;
                    }
                }




                if( this._v_FailIfAlreadyExists == null) {

                    var aFailIfAlreadyExistsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_FAILIFALREADYEXISTS];
                    if( aFailIfAlreadyExistsResolution && aFailIfAlreadyExistsResolution._v_Success) {
                        this._v_FailIfAlreadyExists = aFailIfAlreadyExistsResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIfAlreadyExists = this.FAILIFALREADYEXISTS;
                    }
                }

                
                
                

                if( this._v_ExpandHome == null) {

                    var aExpandHomeResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_EXPANDHOME];
                    if( aExpandHomeResolution && aExpandHomeResolution._v_Success) {
                        this._v_ExpandHome = aExpandHomeResolution._v_ParmValue;
                    }
                    else {
                        this._v_ExpandHome = this.EXPANDHOME;
                    }
                }

                
                


                if( this._v_Tree == null) {

                    var aTreeResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_TREE];
                    if( aTreeResolution && aTreeResolution._v_Success) {
                        this._v_Tree = aTreeResolution._v_ParmValue;
                    }
                    else {
                        this._v_Tree = this.TREE;
                    }
                }



                if( this._v_TreeDirs == null) {

                    var aTreeDirsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_TREEDIRS];
                    if( aTreeDirsResolution && aTreeDirsResolution._v_Success) {
                        this._v_TreeDirs = aTreeDirsResolution._v_ParmValue;
                    }
                    else {
                        this._v_TreeDirs = this.TREEDIRS;
                    }
                }



                if( this._v_TreeFiles == null) {

                    var aTreeFilesResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_TREEFILES];
                    if( aTreeFilesResolution && aTreeFilesResolution._v_Success) {
                        this._v_TreeFiles = aTreeFilesResolution._v_ParmValue;
                    }
                    else {
                        this._v_TreeFiles = this.TREEFILES;
                    }
                }




                if( this._v_TreeLevel == null) {

                    var aTreeLevelResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_TREELEVEL];
                    if( aTreeLevelResolution && aTreeLevelResolution._v_Success) {
                        this._v_TreeLevel = aTreeLevelResolution._v_ParmValue;
                    }
                    else {
                        this._v_TreeLevel = this.TREELEVEL;
                    }
                }






                if( this._v_RmDir == null) {

                    var aRmDirResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_RMDIR];
                    if( aRmDirResolution && aRmDirResolution._v_Success) {
                        this._v_RmDir = aRmDirResolution._v_ParmValue;
                    }
                    else {
                        this._v_RmDir = this.RMDIR;
                    }
                }

                
                if( this._v_RmDirContentsFiles == null) {

                    var aRmDirContentsFilesResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_RMDIRCONTENTSFILES];
                    if( aRmDirContentsFilesResolution && aRmDirContentsFilesResolution._v_Success) {
                        this._v_RmDirContentsFiles = aRmDirContentsFilesResolution._v_ParmValue;
                    }
                    else {
                        this._v_RmDirContentsFiles = this.RMDIRCONTENTSFILES;
                    }
                }


                if( this._v_RmDirContentsDirs == null) {

                    var aRmDirContentsDirsResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_RMDIRCONTENTSDIRS];
                    if( aRmDirContentsDirsResolution && aRmDirContentsDirsResolution._v_Success) {
                        this._v_RmDirContentsDirs = aRmDirContentsDirsResolution._v_ParmValue;
                    }
                    else {
                        this._v_RmDirContentsDirs = this.RMDIRCONTENTSDIRS;
                    }
                }


                if( this._v_FailIfNotEmpty == null) {

                    var aFailIfNotEmptyResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_FAILIFNOTEMPTY];
                    if( aFailIfNotEmptyResolution && aFailIfNotEmptyResolution._v_Success) {
                        this._v_FailIfNotEmpty = aFailIfNotEmptyResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIfNotEmpty = this.FAILIFNOTEMPTY;
                    }
                }





                if( this._v_RmDir || this._v_RmDirContentsFiles || this._v_RmDirContentsDirs) {

                    if( !this._v_Tree) {
                        this._v_Tree = true;
                    }

                    if( !this._v_TreeDirs) {
                        this._v_TreeDirs = true;
                    }

                    if( !this._v_TreeFiles) {
                        this._v_TreeFiles = true;
                    }

                    if( !this._v_Tree) {
                        this._v_Tree = true;
                    }

                    if( this._v_TreeLevel >= 0) {
                        this._v_TreeLevel = -1;
                    }
                }



                
                
                if( this._v_CreateDir == null) {

                    var aCreateDirResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_CREATEDIR];
                    if( aCreateDirResolution && aCreateDirResolution._v_Success) {
                        this._v_CreateDir = aCreateDirResolution._v_ParmValue;
                    }
                    else {
                        this._v_CreateDir = this.CREATEDIR;
                    }
                }


                if( this._v_CreateDirMode == null) {

                    var aCreateModeResolution = aParmResolutionsDict[ this.PARM_DIRECTORY_CREATEMODE];
                    if( aCreateModeResolution && aCreateModeResolution._v_Success) {
                        this._v_CreateDirMode = aCreateModeResolution._v_ParmValue;
                    }
                    else {
                        this._v_CreateDirMode = this.CREATEDIRMODE;
                    }
                    if( !( typeof this._v_CreateDirMode == "undefined") && !( this._v_CreateDirMode == undefined) && !( this._v_CreateDirMode == null)) {
                        if( typeof this._v_CreateDirMode == "string") {
                            if( this._v_CreateDirMode.substring(0,1) == "0") {
                                this._v_CreateDirMode = parseInt( this._v_CreateDirMode, 8);

                            }
                            else {
                                this._v_CreateDirMode = parseInt( this._v_CreateDirMode);
                            }
                        }
                    }
                }
                

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, null,  null));

            };
            if( pS_ResolveParms){}/* CQT */
            aPrototype.pS_ResolveParms = pS_ResolveParms;















            var pS_ComputeUsedFullPath = function( theCallback) {

                var aMethodName = "pS_ComputeUsedFullPath";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);



                if( !this._v_BasePath && !this._v_DirPath && !this._v_FullDirPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_BasePath && !this._v_DirPath && !this._v_FullDirPath", null));
                }



                if( this._v_FullDirPath) {

                    this._v_FullDirPathOrJoined = this._v_FullDirPath;
                }
                else {

                    if( !this._v_BasePath && !this._v_DirPath) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_FullDirPath && !this._v_BasePath && !this._v_DirPath", null));
                        return;
                    }

                    if( this._v_BasePath && this._v_DirPath) {
                        this._v_FullDirPathOrJoined = theM_path.join( this._v_BasePath, this._v_DirPath);
                    }
                    else {
                        if( this._v_BasePath) {
                            this._v_FullDirPathOrJoined = this._v_BasePath;
                        }
                        else {
                            if( this._v_DirPath) {
                                this._v_FullDirPathOrJoined = this._v_DirPath;
                            }
                        }
                    }
                }

                if( this._v_Dump_Paths) {
                    this.pToConsoleLikeEvent( this._v_Title + " _v_FullDirPathOrJoined=" + this._v_FullDirPathOrJoined)
                }




                if( !this._v_FullDirPathOrJoined) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_FullDirPathOrJoined", null));
                }








                if( !this._v_ExpandHome) {
                    this._v_FullDirPathMayBeRelative = this._v_FullDirPathOrJoined;
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
                        this.pToConsoleLikeEvent( this._v_Title + " _v_HomeDirPath=" + this._v_HomeDirPath)
                    }

                    if( !this._v_HomeDirPath) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_HomeDirPath", null));
                        return;
                    }


                    if( this._v_FullDirPathOrJoined.indexOf( this.HOMEDIRTOREPLACETOKEN) == 0) {
                        this._v_FullDirPathMayBeRelative = theM_path.join( this._v_HomeDirPath, this._v_FullDirPathOrJoined.substring( 1));
                        this._v_HomeExpandedInFullDirPath = true;
                    }
                    else {
                        this._v_FullDirPathMayBeRelative = this._v_FullDirPathOrJoined;
                        this._v_HomeExpandedInFullDirPath = false;
                    }
                }

                if( this._v_Dump_Paths) {
                    this.pToConsoleLikeEvent( this._v_Title + " _v_FullDirPathMayBeRelative=" + this._v_FullDirPathMayBeRelative)
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
                this._v_FullDirPathParseResult = theM_parse_filepath( this._v_FullDirPathMayBeRelative);
                if( !this._v_FullDirPathParseResult) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, this._v_FullDirPathMayBeRelative, "!theM_parse_filepath.parsePath()", null));
                    return;
                }


                if( this._v_FullDirPathParseResult.isAbsolute) {
                    this._v_UsedFullDirPath = this._v_FullDirPathMayBeRelative;
                }
                else {
                    this._v_UsedFullDirPath = this._v_FullDirPathParseResult.absolute;
                }

                if( this._v_Dump_Paths) {
                    this.pToConsoleLikeEvent( this._v_Title + " _v_UsedFullDirPath=" + this._v_UsedFullDirPath)
                }




                if( !this._v_UsedFullDirPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_UsedFullDirPath", null));
                    return;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, this._v_UsedFullDirPath, null,  null));

            };
            if( pS_ComputeUsedFullPath){}/* CQT */
            aPrototype.pS_ComputeUsedFullPath = pS_ComputeUsedFullPath;













            var pS_StatBefore = function( theCallback) {

                var aMethodName = "pS_StatBefore";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_FullDirExisted             = false;
                this._v_FullDirExists              = false;


                this._v_StatBefore      = null;
                this._v_FullDirPathStatErrorBefore = null;


                if( !this._v_UsedFullDirPath) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_UsedFullDirPath", null));
                    return;
                }


                var aThis = this;


                theM_fs.stat( this._v_UsedFullDirPath, function( theError, theStats) {

                    try {


                        aThis._v_FullDirPathStatErrorBefore = theError;
                        aThis._v_StatBefore      = theStats;

                        var aStatBefore_JSONstr          = JSON.stringify(  aThis._v_StatBefore);
                        var aStatErrorBefore_JSONstr = JSON.stringify(  aThis._v_FullDirPathStatErrorBefore);
                        var aStatBefore_Report = "theM_fs.stat( _v_UsedFullDirPath=" + aThis._v_UsedFullDirPath + ") => _v_StatBefore=" + aStatBefore_JSONstr + " _v_StatErrorBefore=" + aStatErrorBefore_JSONstr;


                        if( theError) {

                            if( aThis._v_Dump_Stats) {
                                aThis.pToConsoleLikeEvent( aThis._v_Title + " ERROR theError " + aStatBefore_Report);
                            }

                            if( ( theError.errno == aThis.STAT_ERRNO_ENOENT) || ( theError.code == aThis.STAT_ERRCODE_ENOENT)) {

                                if( aThis._v_FailIfNotExists) {
                                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullDirPath, aStatBefore_Report, aThis._v_FullDirPathStatErrorBefore));
                                    return;
                                }
                                else {
                                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_INFO, aThis._v_UsedFullDirPath, aStatBefore_Report, aThis._v_FullDirPathStatErrorBefore));
                                    return;
                                }
                            }

                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullDirPath, aStatBefore_Report, aThis._v_FullDirPathStatErrorBefore));
                            return;
                        }


                        if( !theStats && !theError) {
                            if( aThis._v_Dump_Stats) {
                                aThis.pToConsoleLikeEvent( "ERROR !theStats && !theError " + aStatBefore_Report);
                            }

                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullDirPath, "theM_fs.stat !theError && !theStats (" + aThis._v_UsedFullDirPath + ")", null));
                            return;
                        }


                        if( !theStats.isDirectory()) {
                            if( aThis._v_Dump_Stats) {
                                aThis.pToConsoleLikeEvent( "ERROR !theStats.isDirectory() " + aStatBefore_Report);
                            }

                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, aThis._v_UsedFullDirPath, "!theM_fs.stat.isDirectory(" + aThis._v_UsedFullDirPath + ")", null));
                            return;
                        }

                        if( aThis._v_Dump_Stats) {
                            aThis.pToConsoleLikeEvent( "OK " + aStatBefore_Report);
                        }


                        aThis._v_FullDirExisted            = true;
                        aThis._v_FullDirExists             = true;

                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, aThis._v_StatBefore, aThis._v_UsedFullDirPath, null));

                    }
                    catch( anException) {

                        var aExceptionDetail = null;
                        if( anException) {
                            aExceptionDetail = aThis.fExceptionDetail( anException);
                        }
                        var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));
                    }
                });


            };
            if( pS_StatBefore){}/* CQT */
            aPrototype.pS_StatBefore = pS_StatBefore;



















            var fTreeDirsCallback = function( theCallback, theMethodName, theCallbackName) {
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
                    aCallbackName = "fTreeDirsCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fTreeDirsCallback){}/* CQT */
            aPrototype.fTreeDirsCallback = fTreeDirsCallback;











            var fExceptionTreeDirsHandler = function( theCallback, theMethodName) {

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
            if( fExceptionTreeDirsHandler){}/* CQT */
            aPrototype.fExceptionTreeDirsHandler = fExceptionTreeDirsHandler;












            var pInitFinderToTreeDirs = function( theCallback) {

                var aMethodName = "pInitFinderToTreeDirs";

                if( !this._v_UsedFullDirPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, this._v_UsedFullDirPath, "!this._v_UsedFullDirPath", null));
                    return;
                }

                /* ACV OJO 201511093030
                if( !this._v_FullDirExisted) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, this._v_UsedFullDirPath, "!this._v_FullDirExisted", null));
                    return;
                }
                */


                var aDirToTree = this.fNewVoidDirToTree();
                aDirToTree[ "level"] = 0;
                aDirToTree[ "path"]  = this._v_UsedFullDirPath;

                this._v_DirsToTree          = [ ];
                this._v_DirsToTree.push( aDirToTree);

                this._v_DirsTree            = aDirToTree;

                this._v_DirsInTreePaths     = [ ];
                this._v_FilesInTreePaths    = [ ];


            };
            if( pInitFinderToTreeDirs){}/* CQT */
            aPrototype.pInitFinderToTreeDirs= pInitFinderToTreeDirs;







            var fNewVoidDirToTree = function() {

                var aDirToTree = {
                    "level":        null,
                    "path":         null,
                    "isDirectory":  null,
                    "subtree":      [ ]
                };

                aDirToTree[ this.PROPERTYNAMESTAT] = null;

                return aDirToTree;
            };
            if( fNewVoidDirToTree){}/* CQT */
            aPrototype.fNewVoidDirToTree= fNewVoidDirToTree;







            var pTryToTreeDirs = function( theCallback) {
                var aMethodName = "pTryToTreeDirs";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FINDNEXT, null, null, null);}


                var aDirToTreeLevelAndPath = this.fFindDirToTreePath();
                if( !aDirToTreeLevelAndPath) {

                    if( this._v_Dump_DirContents) {
                        var aDirContentsDirs_JSONstr  = JSON.stringify( this._v_DirsInTreePaths);
                        var aDirContentsFiles_JSONstr = JSON.stringify( this._v_FilesInTreePaths);
                        this.pToConsoleLikeEvent( this._v_Title + " DIRS "  + this._v_UsedFullDirPath + " " + aDirContentsDirs_JSONstr);
                        this.pToConsoleLikeEvent( this._v_Title + " FILES " + this._v_UsedFullDirPath + "  " + aDirContentsFiles_JSONstr);
                    }

                    if( this._v_Dump_Tree) {

                        var aDirsTree_JSONstr = null;

                        var aJSONstringifyReplacer = null;
                        if( !this._v_Dump_TreeStats) {
                            aJSONstringifyReplacer = this.fJSONstringifyReplacerNoStatsFunction();
                        }

                        if( this._v_Dump_TreeIndented) {
                            aDirsTree_JSONstr         = JSON.stringify( this._v_DirsTree, aJSONstringifyReplacer, 2);
                        }
                        else {
                            aDirsTree_JSONstr         = JSON.stringify( this._v_DirsTree, aJSONstringifyReplacer, 0);
                        }
                        this.pToConsoleLikeEvent( this._v_Title + " TREE " + aDirsTree_JSONstr);
                    }

                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_NOMORE, null, null, null));
                    return;
                }


                var aCallback = this.fNextTreeDirsCallback( theCallback);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this.fNextStatOrMkdirPathStepCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextTreeDirsHandler( aCallback);

                try {

                    this.pTreeDirCurrentPath( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pTryToTreeDirs){}/* CQT */
            aPrototype.pTryToTreeDirs = pTryToTreeDirs;







            var fJSONstringifyReplacerNoStatsFunction = function() {

                var aThis = this;

                var aJSONstringifyReplacerNoStatsFunction = function( thePropertyName, thePropertyValue) {

                    if( thePropertyName == aThis.PROPERTYNAMESTAT) {
                        return undefined;
                    }

                    return thePropertyValue;
                }

                return aJSONstringifyReplacerNoStatsFunction;
            };
            if( fJSONstringifyReplacerNoStatsFunction){}/* CQT */
            aPrototype.fJSONstringifyReplacerNoStatsFunction = fJSONstringifyReplacerNoStatsFunction;





            var fFindDirToTreePath = function() {

                if( !this._v_DirsToTree) {
                    return null;
                }


                while( true) {

                    var aNumDirsToTreePaths = this._v_DirsToTree.length;
                    if( !aNumDirsToTreePaths) {
                        return null;
                    }

                    var aDirToTree = this._v_DirsToTree[ 0];
                    if( !aDirToTree) {
                        return null;
                    }

                    var aDirToTreeLevel = aDirToTree[ "level"];
                    if( aDirToTreeLevel < 0) {
                        return null;
                    }

                    this._v_DirsToTree.splice( 0, 1);

                    if( ( this._v_TreeLevel >= 0) && aDirToTreeLevel > this._v_TreeLevel) {
                        continue;
                    }

                    this._v_CurrentDirToTree = aDirToTree;

                    return this._v_CurrentDirToTree;
                }
            };
            if( fFindDirToTreePath){}/* CQT */
            aPrototype.fFindDirToTreePath = fFindDirToTreePath;







            var pTreeDirCurrentPath = function( theCallback) {
                var aMethodName = "pTreeDirCurrentPath";

                if( !this._v_CurrentDirToTree) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_CurrentDirToTree", null));
                    return;
                }


                var aCurrentDirToTree          = this._v_CurrentDirToTree;
                var aCurrentDirToTreeLevel     = this._v_CurrentDirToTree[ "level"];
                var aCurrentDirToTreeLevelPath = this._v_CurrentDirToTree[ "path"];

                var aThis = this;

                theM_fs.readdir( aCurrentDirToTreeLevelPath, function( theError, theSubdirsOrFiles) {

                    try {

                        aThis._v_LastReaddirError          = theError;
                        aThis._v_LastReaddirSubdirsOrFiles = theSubdirsOrFiles;

                        var aReaddirSubdirsOrFiles_JSONstr  = JSON.stringify(  aThis._v_LastReaddirSubdirsOrFiles);
                        var aReaddirError_JSONstr           = JSON.stringify(  aThis._v_LastReaddirError);
                        var aReaddir_Report = "theM_fs.readdir( _v_CurrentDirToTree.path=" + aCurrentDirToTreeLevelPath + " level=" + aCurrentDirToTreeLevel +  ") => SubdirsOrFiles=" + aReaddirSubdirsOrFiles_JSONstr + " ReaddirError=" + aReaddirError_JSONstr;


                        if( theError) {

                            if( aThis._v_Dump_Readdirs) {
                                aThis.pToConsoleLikeEvent( aThis._v_Title + " ERROR Readdir " + aReaddir_Report);
                            }

                            if( ( theError.errno == aThis.STAT_ERRNO_ENOENT) || ( theError.code == aThis.STAT_ERRCODE_ENOENT)) {

                                theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, aCurrentDirToTreeLevelPath, "theM_fs.readdir ( theError.errno == aThis.STAT_ERRNO_ENOENT) || ( theError.code == aThis.STAT_ERRCODE_ENOENT)", aCurrentDirToTreeLevel));
                                return;
                            }

                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, aThis._v_CurrentDirToTree, "ERROR theM_fs.readdir", aReaddir_Report));
                            return;
                        }


                        if( aThis._v_Dump_Readdirs) {
                            aThis.pToConsoleLikeEvent( aThis._v_Title + " READDIRS" + aReaddir_Report);
                        }


                        if( aThis._v_TreeDirs) {
                            aThis._v_DirsInTreePaths.push( aCurrentDirToTreeLevelPath);
                        }

                        if( !theSubdirsOrFiles || !theSubdirsOrFiles.length) {

                            theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, aCurrentDirToTreeLevelPath, "!theSubdirsOrFiles", aCurrentDirToTreeLevel));
                            return;
                        }

                        var someSubdirsOrFilesToStat = theSubdirsOrFiles.slice();

                        aThis.pStatDirsOrFiles( theCallback, aCurrentDirToTree, someSubdirsOrFilesToStat);

                    }
                    catch( anException) {

                        var aExceptionDetail = null;
                        if( anException) {
                            aExceptionDetail = aThis.fExceptionDetail( anException);
                        }
                        var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                    }
                });
            };
            if( pTreeDirCurrentPath){}/* CQT */
            aPrototype.pTreeDirCurrentPath = pTreeDirCurrentPath;









            var pStatDirsOrFiles = function( theCallback, theParentDirToTree, theDirsOrFiles) {
                var aMethodName = "pStatDirsOrFiles";

                if( !theCallback) {
                    return;
                }

                var aParentDirToTreeLevel     = theParentDirToTree[ "level"];
                var aParentDirToTreeLevelPath = theParentDirToTree[ "path"];
                var aParentDirToTreeSubtree   = theParentDirToTree[ "subtree"];

                var aSubdirOrFileToStat = theDirsOrFiles[ 0];

                theDirsOrFiles.splice(0 ,1);

                var aSubdirOrFileToStatFullPath = theM_path.join( aParentDirToTreeLevelPath, aSubdirOrFileToStat);

                var aThis = this;

                theM_fs.stat( aSubdirOrFileToStatFullPath, function( theStatError, theStatResult) {

                    try {

                        if( theStatError) {

                            var aSubdirOrFileStatError_JSONstr  = JSON.stringify(  theStatError);
                            var aSubdirOrFileStatErrorReport = "ERROR theM_fs.stat( " + aSubdirOrFileToStatFullPath + " theStatError=" + aSubdirOrFileStatError_JSONstr;

                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, aSubdirOrFileToStatFullPath, "SubdirOrFileStatError", aSubdirOrFileStatErrorReport));
                            return;
                        }


                        if( !theStatResult) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, aSubdirOrFileToStatFullPath, "SubdirOrFileStatNoResult", null));
                            return;
                        }

                        theStatResult[ "modeOctal"] = theStatResult.mode.toString( 8);


                        if( theStatResult.isDirectory()) {

                            if( aThis._v_Dump_DirContents) {
                                aThis.pToConsoleLikeEvent( "DIRCONTENT parent=" +  aParentDirToTreeLevelPath + " parentLevel=" + aParentDirToTreeLevel + " => DIR " + aSubdirOrFileToStatFullPath);
                            }

                            if( ( aThis._v_TreeLevel < 0) || ( aParentDirToTreeLevel < aThis._v_TreeLevel)) {

                                var aDirToTree = aThis.fNewVoidDirToTree();
                                aDirToTree[ "isDirectory"] = true;
                                aDirToTree[ "level"]       = aParentDirToTreeLevel + 1;
                                aDirToTree[ "path"]        = aSubdirOrFileToStatFullPath;
                                aDirToTree[ "stat"]        = theStatResult;
                                aParentDirToTreeSubtree.push( aDirToTree);

                                aThis._v_DirsToTree.push( aDirToTree);
                            }
                        }
                        else {

                            if( aThis._v_TreeFiles) {
                                var aFileInParentTree = aThis.fNewVoidDirToTree();
                                aFileInParentTree[ "isDirectory"] = false;
                                aFileInParentTree[ "level"]       = aParentDirToTreeLevel + 1;
                                aFileInParentTree[ "path"]        = aSubdirOrFileToStatFullPath;
                                aFileInParentTree[ "stat"]        = theStatResult;
                                aParentDirToTreeSubtree.push( aFileInParentTree);

                                aThis._v_FilesInTreePaths.push( aSubdirOrFileToStatFullPath);
                            }

                            if( aThis._v_Dump_DirContents) {
                                aThis.pToConsoleLikeEvent( "DIRCONTENT parent=" +  aParentDirToTreeLevelPath + " parentLevel=" + aParentDirToTreeLevel + " => FILE " + aSubdirOrFileToStatFullPath);
                            }
                        }

                        if( theDirsOrFiles.length) {
                            aThis.pStatDirsOrFiles( theCallback, theParentDirToTree, theDirsOrFiles)
                        }
                        else{
                            theCallback();
                        }

                    }
                    catch( anException) {

                        var aExceptionDetail = null;
                        if( anException) {
                            aExceptionDetail = aThis.fExceptionDetail( anException);
                        }
                        var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));
                    }
                });
            };
            if( pStatDirsOrFiles){}/* CQT */
            aPrototype.pStatDirsOrFiles = pStatDirsOrFiles;












            var fNextTreeDirsCallback = function( theCallback) {
                var aMethodName = "fNextTreeDirsCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, null, null, null);

                    aThis.pTryToTreeDirs( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fNextTreeDirsCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fNextTreeDirsCallback){}/* CQT */
            aPrototype.fNextTreeDirsCallback = fNextTreeDirsCallback;











            var fExceptionNextTreeDirsHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextTreeDirsHandler){}/* CQT */
            aPrototype.fExceptionNextTreeDirsHandler = fExceptionNextTreeDirsHandler;








            var pS_TreeDirs = function( theCallback) {
                var aMethodName = "pS_TreeDirs";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( !this._v_Tree && !this._v_TreeDirs && !this._v_TreeFiles) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_Tree && !this._v_TreeDirs && !this._v_TreeFiles", null));
                    return;
                }


                /* ACV OJO 201511093030

                 if( !this._v_FullDirExisted) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, this._v_UsedFullDirPath, "!this._v_FullDirExisted", null));
                    return;
                }
                */


                var aExceptionHandler = this.fExceptionTreeDirsHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fTreeDirsCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    this.pInitFinderToTreeDirs( aCallback);

                    this.pTryToTreeDirs( aCallback);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_TreeDirs){}/* CQT */
            aPrototype.pS_TreeDirs = pS_TreeDirs;




















            var fRemoveDirsOrFilesCallback = function( theCallback, theMethodName, theCallbackName) {
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
                    aCallbackName = "fRemoveDirsOrFilesCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fRemoveDirsOrFilesCallback){}/* CQT */
            aPrototype.fRemoveDirsOrFilesCallback = fRemoveDirsOrFilesCallback;









            var fExceptionRemoveDirsOrFilesHandler = function( theCallback, theMethodName) {

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
            if( fExceptionRemoveDirsOrFilesHandler){}/* CQT */
            aPrototype.fExceptionRemoveDirsOrFilesHandler = fExceptionRemoveDirsOrFilesHandler;













            var pInitFinderToRemoveDirsOrFiles = function() {

                this._v_FullDirRemoved = false;

                this._v_FilesToRemovePaths = null;
                if( this._v_RmDirContentsFiles) {
                    this._v_FilesToRemovePaths = this._v_FilesInTreePaths.slice();
                }

                this._v_DirsToRemovePaths = null;
                if( this._v_RmDirContentsDirs) {
                    this._v_DirsToRemovePaths = this._v_DirsInTreePaths.slice();
                }

            };
            if( pInitFinderToRemoveDirsOrFiles){}/* CQT */
            aPrototype.pInitFinderToRemoveDirsOrFiles = pInitFinderToRemoveDirsOrFiles;











            var pTryToRemoveNextDirOrFile = function( theCallback) {
                var aMethodName = "pTryToRemoveNextDirOrFile";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FINDNEXT, null, null, null);}


                var aFileOrDirToRemoveNext = this.fFindFileOrDirToRemoveNext();
                if( !aFileOrDirToRemoveNext) {

                    this._v_FullDirRemoved = true;

                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_NOMORE, null, null, null));
                    return;
                }

                var aCallback = this.fNextDirOrFileToRemoveCallback( theCallback);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleNextSubCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextDirOrFileToRemoveHandler( aCallback);

                try {
                    this.pRemoveNextDirOrFile( aCallback, aFileOrDirToRemoveNext);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }

            };
            if( pTryToRemoveNextDirOrFile){}/* CQT */
            aPrototype.pTryToRemoveNextDirOrFile = pTryToRemoveNextDirOrFile;








            var pRemoveNextDirOrFile = function( theCallback, theFileOrDirToRemove) {
                var aMethodName = "pRemoveNextDirOrFile";

                if( !theFileOrDirToRemove) {
                    return;
                }


                var aFileOrDirToRemoveIsDir = theFileOrDirToRemove[ "isDir"];
                var aFileOrDirToRemovePath  = theFileOrDirToRemove[ "path"];

                if( !aFileOrDirToRemovePath) {
                    throw "pRemoveNextDirOrFile !theFileOrDirToRemove[ 'path']";
                }

                if( aFileOrDirToRemoveIsDir) {
                    this.pRemoveNextDir( theCallback, theFileOrDirToRemove);
                }
                else {
                    this.pRemoveNextFile( theCallback, theFileOrDirToRemove);
                }

            };
            if( pRemoveNextDirOrFile){}/* CQT */
            aPrototype.pRemoveNextDirOrFile = pRemoveNextDirOrFile;





            
            


            var pRemoveNextDir = function( theCallback, theDirToRemove) {
                var aMethodName = "pRemoveNextDir";

                if( !theDirToRemove) {
                    return;
                }


                var aDirToRemoveIsDir = theDirToRemove[ "isDir"];
                var aDirToRemovePath  = theDirToRemove[ "path"];

                if( !aDirToRemoveIsDir) {
                    throw "pRemoveNextFile !theDirToRemove[ 'isDir']" + aDirToRemovePath;
                }


                if( this._v_Dump_Removals) {
                    this.pToConsoleLikeEvent( "REMOVING DIR " + aDirToRemovePath);
                }


                var aThis = this;

                theM_fs.rmdir( aDirToRemovePath, function( theError) {

                    try {

                        aThis._v_LastRmdirError = theError;
                        aThis._v_LastRmdirPath  = aDirToRemovePath;

                        var aRmdirError_JSONstr           = JSON.stringify(  aThis._v_LastRmdirError);
                        var aRmdir_Report = "theM_fs.rmdir( aDirToRemovePath=" + aDirToRemovePath +  " RmError=" + aRmdirError_JSONstr;

                        if( theError) {

                            if( aThis._v_Dump_Removals) {
                                aThis.pToConsoleLikeEvent( "ERROR Readdir " + aRmdir_Report);
                            }

                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, aDirToRemovePath, "ERROR theM_fs.rmdir", aRmdir_Report));
                            return;
                        }


                        if( aThis._v_Dump_Removals) {
                            aThis.pToConsoleLikeEvent( "REMOVED DIR " + aRmdir_Report);
                        }

                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, aDirToRemovePath, "OK theM_fs.rmdir", aRmdir_Report));

                    }
                    catch( anException) {

                        var aExceptionDetail = null;
                        if( anException) {
                            aExceptionDetail = aThis.fExceptionDetail( anException);
                        }
                        var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                    }
                });

            };
            if( pRemoveNextDir){}/* CQT */
            aPrototype.pRemoveNextDir = pRemoveNextDir;












            var pRemoveNextFile = function( theCallback, theFileToRemove) {
                var aMethodName = "pRemoveNextFile";

                if( !theFileToRemove) {
                    return;
                }


                var aFileToRemoveIsDir = theFileToRemove[ "isDir"];
                var aFileToRemovePath  = theFileToRemove[ "path"];

                if( aFileToRemoveIsDir) {
                    throw "pRemoveNextFile theFileToRemove[ 'isDir']" + aFileToRemovePath;
                }

                if( this._v_Dump_Removals) {
                    this.pToConsoleLikeEvent( "REMOVING FILE " + aFileToRemovePath);
                }



                var aThis = this;

                theM_fs.unlink( aFileToRemovePath, function( theError) {

                    try {

                        aThis._v_LastRmdirError = theError;
                        aThis._v_LastRmdirPath  = aFileToRemovePath;

                        var anUnlinkError_JSONstr = JSON.stringify(  aThis._v_LastRmdirError);
                        var anUnlink_Report = "theM_fs.unlink( aFileToRemovePath=" + aFileToRemovePath +  " UnlinkError=" + anUnlinkError_JSONstr;

                        if( theError) {

                            if( aThis._v_Dump_Removals) {
                                aThis.pToConsoleLikeEvent( "ERROR RmFile " + anUnlink_Report);
                            }

                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, aFileToRemovePath, "ERROR theM_fs.rmdir", anUnlink_Report));
                            return;
                        }

                        if( aThis._v_Dump_Removals) {
                            aThis.pToConsoleLikeEvent( "REMOVED FILE " + aFileToRemovePath);
                        }

                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, aFileToRemovePath, "OK theM_fs.rmdir", anUnlink_Report));

                    }
                    catch( anException) {

                        var aExceptionDetail = null;
                        if( anException) {
                            aExceptionDetail = aThis.fExceptionDetail( anException);
                        }
                        var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);

                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                    }
                });

            };
            if( pRemoveNextFile){}/* CQT */
            aPrototype.pRemoveNextFile = pRemoveNextFile;







            var fNewVoidFileOrDirToRemove = function() {

                var aFileOrDirToRemove = {
                    "isDir": null,
                    "path" : null
                };

                return aFileOrDirToRemove;
            };
            if( fNewVoidFileOrDirToRemove){}/* CQT */
            aPrototype.fNewVoidFileOrDirToRemove = fNewVoidFileOrDirToRemove;









            var fFindFileOrDirToRemoveNext = function() {


                if( this._v_FilesToRemovePaths) {

                    var aNumPendingFilesToRemovePaths = this._v_FilesToRemovePaths.length;
                    if( aNumPendingFilesToRemovePaths) {

                        var aNextFileToRemovePath = this._v_FilesToRemovePaths[ aNumPendingFilesToRemovePaths - 1];
                        if( !aNextFileToRemovePath) {
                            throw "EXCEPTION fFindFileOrDirToRemoveNext !this._v_FilesToRemovePaths[ " + ( aNumPendingFilesToRemovePaths - 1) + "]";
                        }


                        var aNextFileToRemove = this.fNewVoidFileOrDirToRemove();
                        aNextFileToRemove[ "isDir"] = false;
                        aNextFileToRemove[ "path"]  = aNextFileToRemovePath;

                        this._v_FilesToRemovePaths.splice( aNumPendingFilesToRemovePaths - 1, 1);

                        return aNextFileToRemove;
                    }
                }

                

                if( this._v_DirsToRemovePaths) {

                    var aNumPendingDirsToRemovePaths = this._v_DirsToRemovePaths.length;
                    if( aNumPendingDirsToRemovePaths) {

                        var aNextDirToRemovePath = this._v_DirsToRemovePaths[ aNumPendingDirsToRemovePaths - 1];
                        if( !aNextDirToRemovePath) {
                            throw "EXCEPTION fFindDirOrDirToRemoveNext !this._v_DirsToRemovePaths[  " + ( aNumPendingDirsToRemovePaths - 1) + "]";
                        }


                        var aNextDirToRemove = this.fNewVoidFileOrDirToRemove();
                        aNextDirToRemove[ "isDir"] = true;
                        aNextDirToRemove[ "path"]  = aNextDirToRemovePath;

                        this._v_DirsToRemovePaths.splice( aNumPendingDirsToRemovePaths - 1, 1);

                        return aNextDirToRemove;
                    }
                }

                return  null;
            };
            if( fFindFileOrDirToRemoveNext){}/* CQT */
            aPrototype.fFindFileOrDirToRemoveNext = fFindFileOrDirToRemoveNext;









            var fNextDirOrFileToRemoveCallback = function( theCallback) {
                var aMethodName = "fNextDirOrFileToRemoveCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, null, null, null);

                    aThis.pTryToRemoveNextDirOrFile( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fNextDirOrFileToRemoveCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fNextDirOrFileToRemoveCallback){}/* CQT */
            aPrototype.fNextDirOrFileToRemoveCallback = fNextDirOrFileToRemoveCallback;








            var fExceptionNextDirOrFileToRemoveHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUB_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextDirOrFileToRemoveHandler){}/* CQT */
            aPrototype.fExceptionNextDirOrFileToRemoveHandler = fExceptionNextDirOrFileToRemoveHandler;











            var pS_RemoveDirsOrFiles = function( theCallback) {
                var aMethodName = "pS_RemoveDirsOrFiles";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_FullDirExisted && !this._v_DirsCreated) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, this._v_UsedFullDirPath, "!this._v_FullDirExisted && !this._v_DirsCreated", null));
                    return;
                }


                var aExceptionHandler = this.fExceptionRemoveDirsOrFilesHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fRemoveDirsOrFilesCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    this.pInitFinderToRemoveDirsOrFiles( aCallback);

                    this.pTryToRemoveNextDirOrFile( aCallback);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_RemoveDirsOrFiles){}/* CQT */
            aPrototype.pS_RemoveDirsOrFiles = pS_RemoveDirsOrFiles;
















            
            




            var fCreateDirsCallback = function( theCallback, theMethodName, theCallbackName) {
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
                    aCallbackName = "fCreateDirsCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fCreateDirsCallback){}/* CQT */
            aPrototype.fCreateDirsCallback = fCreateDirsCallback;









            var fExceptionCreateDirsHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "null Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionCreateDirsHandler){}/* CQT */
            aPrototype.fExceptionCreateDirsHandler = fExceptionCreateDirsHandler;












            var pInitFinderToStatOrMkdirPathSteps = function( theCallback) {

                var aMethodName = "pInitFinderToStatOrMkdirPathSteps";

                if( !this._v_UsedFullDirPath || !this._v_FullDirPathParseResult) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, this._v_UsedFullDirPath, "!this._v_UsedFullDirPath || !this._v_FullDirPathParseResult", null));
                }

                this._v_FullDirPathSteps          = null;
                this._v_PathsToStatOrMkdir        = null;
                this._v_DirStepsMode              = null;
                this._v_DirStepIndex              = null;
                this._v_PathsToStatOrMkdir        = [ ];
                this._v_PathStatsBefore           = [ ];
                this._v_PathStatsErrorsBefore     = [ ];
                this._v_PathStatsAfter            = [ ];
                this._v_PathStatsErrorAfter       = [ ];

                this._v_DirsCreated               = [ ];
                this._v_MkdirsExceptions          = [ ];


                var aRootDir      = this._v_FullDirPathParseResult.root;
                var anAbsoluteDir = this._v_FullDirPathParseResult.absolute;

                if( !anAbsoluteDir) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, this._v_UsedFullDirPath, "!this._v_FullDirPathParseResult.absolute", null));
                    return;
                }

                var aPathWOroot = null;
                if( aRootDir && aRootDir.length) {
                    aPathWOroot = anAbsoluteDir.substring( aRootDir.length)
                }
                else {
                    aPathWOroot = anAbsoluteDir;
                }

                var someFullDirPathSteps = anAbsoluteDir.split( this.DIRPATHSEPARATOR);
                if( !someFullDirPathSteps || !someFullDirPathSteps.length) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, this._v_UsedFullDirPath, "!anAbsoluteDir.split( this.DIRPATHSEPARATOR)", anAbsoluteDir));
                    return;
                }

                this._v_FullDirPathSteps = someFullDirPathSteps;

                var aNumFullDirPathSteps = this._v_FullDirPathSteps.length;
                for( var aStepIdx = aNumFullDirPathSteps; aStepIdx > 0; aStepIdx--) {

                    var aStep = this._v_FullDirPathSteps[ aStepIdx - 1];
                    if( !aStep || !aStep.length) {
                        break;
                    }
                    var somePathSteps = this._v_FullDirPathSteps.slice( 0, aStepIdx);
                    var aPathWithSteps = somePathSteps.join( this.DIRPATHSEPARATOR);

                    this._v_PathsToStatOrMkdir.push( aPathWithSteps);
                    this._v_PathStatsBefore.push( null);
                    this._v_PathStatsErrorsBefore.push( null);
                    this._v_PathStatsAfter.push( null);
                    this._v_PathStatsErrorAfter.push( null);

                    this._v_DirsCreated.push( null);
                    this._v_MkdirsExceptions.push( null);

                }


                this._v_DirStepsMode = this.DIRSTEPSMODESTAT;

                this._v_DirStepIndex = -1;
            };
            if( pInitFinderToStatOrMkdirPathSteps){}/* CQT */
            aPrototype.pInitFinderToStatOrMkdirPathSteps= pInitFinderToStatOrMkdirPathSteps;








            var pTryToStatOrMkdirPath = function( theCallback) {
                var aMethodName = "pTryToStatOrMkdirPath";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FINDNEXT, null, null, null);}


                var aStepToStatOrMkdirNext = this.fFindPathToStatOrMkdirNext();
                if( !aStepToStatOrMkdirNext) {

                    this._v_FullDirExists              = true;

                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_NOMORE, null, null, null));
                    return;
                }


                var aCallback = this.fNextStatOrMkdirPathStepCallback( theCallback);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this.fNextStatOrMkdirPathStepCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionStatOrMkdirNextPathHandler( aCallback);

                try {

                    if( !this._v_DirStepsMode || ( !( this._v_DirStepsMode == this.DIRSTEPSMODESTAT) && !( this._v_DirStepsMode == this.DIRSTEPSMODEMKDIR))) {
                        throw "pTryToStatOrMkdirPath EXCEPTION: Unsupported or Unknown _v_DirStepsMode";
                    }

                    if( this._v_DirStepsMode == this.DIRSTEPSMODESTAT) {
                        this.pStatCurrentPathBeforeMkdir( aCallback);
                        return;
                    }

                    if( this._v_DirStepsMode == this.DIRSTEPSMODEMKDIR) {
                        this.pMkdirCurrentPath( aCallback);
                        return;
                    }

                    throw "pTryToStatOrMkdirPath EXCEPTION: Unsupported or Unknown _v_DirStepsMode";

                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pTryToStatOrMkdirPath){}/* CQT */
            aPrototype.pTryToStatOrMkdirPath = pTryToStatOrMkdirPath;









            var fFindPathToStatOrMkdirNext = function() {

                if( !this._v_PathsToStatOrMkdir) {
                    return null;
                }

                var aNumPathsToStatOrMKdir = this._v_PathsToStatOrMkdir.length;
                if( !aNumPathsToStatOrMKdir) {
                    return null;
                }

                if( !this._v_DirStepsMode || ( !( this._v_DirStepsMode == this.DIRSTEPSMODESTAT) && !( this._v_DirStepsMode == this.DIRSTEPSMODEMKDIR))) {
                    throw "fFindPathToStatOrMkdirNext EXCEPTION: Unsupported or Unknown _v_DirStepsMode";
                }



                if( this._v_DirStepsMode == this.DIRSTEPSMODESTAT) {

                    if( this._v_DirStepIndex >= ( aNumPathsToStatOrMKdir - 1)) {
                        throw "fFindPathToStatOrMkdirNext EXCEPTION: ( (_v_DirStepsMode == this.DIRSTEPSMODESTAT) && ( _v_DirStepIndex < 1))";
                    }

                    this._v_DirStepIndex += 1;

                    if( this._v_DirStepIndex >= aNumPathsToStatOrMKdir) {

                        this._v_DirStepsMode == this.DIRSTEPSMODEMKDIR;
                        this._v_DirStepIndex = 0;
                    }

                    this._v_LastPathToStatOrMkdir = this._v_PathsToStatOrMkdir[  this._v_DirStepIndex];

                    if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, "fFindPathToStatOrMkdirNext", this.EVENTKIND_INFO, this._v_LastPathToStatOrMkdir, "FOUND PathTo " + this._v_DirStepsMode, this._v_DirStepIndex);}

                    return this._v_LastPathToStatOrMkdir;
                }


                if( this._v_DirStepsMode == this.DIRSTEPSMODEMKDIR) {

                    if( this._v_DirStepIndex < 0) {
                        return null;
                    }

                    this._v_DirStepIndex -= 1;


                    if( this._v_DirStepIndex < 0) {
                        return null;
                    }

                    this._v_LastPathToStatOrMkdir = this._v_PathsToStatOrMkdir[  this._v_DirStepIndex];

                    if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, "fFindPathToStatOrMkdirNext", this.EVENTKIND_INFO, this._v_LastPathToStatOrMkdir, "FOUND PathTo " + this._v_DirStepsMode, this._v_DirStepIndex);}

                    return this._v_LastPathToStatOrMkdir;
                }

                throw "fFindPathToStatOrMkdirNext EXCEPTION: Unsupported or Unknown _v_DirStepsMode";
            };
            if( fFindPathToStatOrMkdirNext){}/* CQT */
            aPrototype.fFindPathToStatOrMkdirNext = fFindPathToStatOrMkdirNext;









            var fNextStatOrMkdirPathStepCallback = function( theCallback) {
                var aMethodName = "fNextStatOrMkdirPathStepCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, null, null, null);

                    aThis.pTryToStatOrMkdirPath( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fNextStatOrMkdirPathStepCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fNextStatOrMkdirPathStepCallback){}/* CQT */
            aPrototype.fNextStatOrMkdirPathStepCallback = fNextStatOrMkdirPathStepCallback;








            var fExceptionStatOrMkdirNextPathHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionStatOrMkdirNextPathHandler){}/* CQT */
            aPrototype.fExceptionStatOrMkdirNextPathHandler = fExceptionStatOrMkdirNextPathHandler;




            





            var pStatCurrentPathBeforeMkdir = function( theCallback) {
                var aMethodName = "pStatCurrentPathBeforeMkdir";

                if( !this._v_LastPathToStatOrMkdir) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_LastPathToStatOrMkdir", null));
                    return;
                }

                var aThis = this;

                theM_fs.stat( this._v_LastPathToStatOrMkdir, function( theError, theStats) {

                    aThis._v_LastPathStatErrorBefore = theError;
                    aThis._v_LastPathStatBefore      = theStats;

                    aThis._v_PathStatsErrorsBefore[ aThis._v_DirStepIndex] = aThis._v_LastPathStatErrorBefore;
                    aThis._v_PathStatsBefore[       aThis._v_DirStepIndex] = aThis._v_LastPathStatBefore;


                    var aStatBefore_JSONstr      = JSON.stringify(  aThis._v_LastPathStatBefore);
                    var aStatErrorBefore_JSONstr = JSON.stringify(  aThis._v_LastPathStatErrorBefore);
                    var aStatBefore_Report = "theM_fs.stat( _v_LastPathToStatOrMkdir=" + aThis._v_LastPathToStatOrMkdir + " _v_DirStepIndex=" + aThis._v_DirStepIndex + ") => StatBefore=" + aStatBefore_JSONstr + " StatErrorBefore=" + aStatErrorBefore_JSONstr;


                    if( theError) {

                        if( aThis._v_Dump_Stats) {
                            aThis.pToConsoleLikeEvent( "ERROR Stat " + aStatBefore_Report);
                        }

                        if( ( theError.errno == aThis.STAT_ERRNO_ENOENT) || ( theError.code == aThis.STAT_ERRCODE_ENOENT)) {

                            theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_INFO, aThis._v_LastPathToStatOrMkdir, aStatBefore_Report, aThis._v_LastPathStatErrorBefore));
                            return;
                        }

                        throw "theM_fs.stat ERROR " + aStatBefore_Report;
                    }


                    if( !theStats && !theError) {
                        if( aThis._v_Dump_Stats) {
                            aThis.pToConsoleLikeEvent( "ERROR !theStats && !theError " + aStatBefore_Report);
                        }

                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_INFO, aThis._v_LastPathToStatOrMkdir, aStatBefore_Report, aThis._v_LastPathStatErrorBefore));
                        return;
                    }


                    if( !theStats.isDirectory()) {
                        if( aThis._v_Dump_Stats) {
                            aThis.pToConsoleLikeEvent( "ERROR !theStats.isDirectory() " + aStatBefore_Report);
                        }


                        throw "!theM_fs.stat.isDirectory(" + aThis._v_LastPathToStatOrMkdir + ")";
                    }

                    aThis._v_DirStepsMode = aThis.DIRSTEPSMODEMKDIR;

                    if( aThis._v_Dump_Stats) {
                        aThis.pToConsoleLikeEvent( "OK " + aStatBefore_Report);
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, aThis._v_StatBefore, aThis._v_UsedFullDirPath, null));
                });


            };
            if( pStatCurrentPathBeforeMkdir){}/* CQT */
            aPrototype.pStatCurrentPathBeforeMkdir = pStatCurrentPathBeforeMkdir;









            var pMkdirCurrentPath = function( theCallback) {
                var aMethodName = "pMkdirCurrentPath";


                if( !this._v_LastPathToStatOrMkdir) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_LastPathToStatOrMkdir", null));
                    return;
                }


                if( !this._v_CreateDir) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_INFO, null, "!this._v_CreateDir", null));
                    return;
                }


                var aThis = this;

                theM_fs.mkdir( this._v_LastPathToStatOrMkdir, this._v_CreateDirMode, function( theException) {

                    if( theException) {

                        aThis._v_MkdirsExceptions[ aThis._v_DirStepIndex] = theException;

                        if( aThis._v_Dump_Mkdirs) {
                            aThis.pToConsoleLikeEvent( "EXCEPTION MKDIR " + aThis._v_LastPathToStatOrMkdir + JSON.stringify( theException));
                        }

                        theCallback(  aThis.fRecord( aThis._v_Type, aThis._v_Id, this, aMethodName, aThis.EVENTKIND_FAIL, aThis._v_LastPathToStatOrMkdir, "theM_fs.mkdir EXCEPTION", theException));
                        return;
                    }

                    aThis._v_DirsCreated[ aThis._v_DirStepIndex] = aThis._v_LastPathToStatOrMkdir;

                    if( aThis._v_Dump_Mkdirs) {
                        aThis.pToConsoleLikeEvent( "OK MKDIR " + aThis._v_LastPathToStatOrMkdir);
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, aThis._v_StatBefore, aThis._v_UsedFullDirPath, null));
                });


            };
            if( pMkdirCurrentPath){}/* CQT */
            aPrototype.pMkdirCurrentPath = pMkdirCurrentPath;










            var pS_CreateDirs = function( theCallback) {
                var aMethodName = "pS_CreateDirs";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( this._v_FullDirExisted && !this._v_FullDirRemoved) {

                    if( this._v_FailIfAlreadyExists) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, this._v_UsedFullDirPath, "this._v_FullDirExisted  && !this._v_FullDirRemoved && this._v_FailIfAlreadyExists", null));
                        return;
                    }
                    else {
                        theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, this._v_UsedFullDirPath, "this._v_FullDirExisted  && !this._v_FullDirRemoved && !this._v_FailIfAlreadyExists", null));
                        return;
                    }
                }


                var aExceptionHandler = this.fExceptionCreateDirsHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fCreateDirsCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    this.pInitFinderToStatOrMkdirPathSteps( aCallback);

                    this.pTryToStatOrMkdirPath( aCallback, aMethodName);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_CreateDirs){}/* CQT */
            aPrototype.pS_CreateDirs = pS_CreateDirs;














            var pF_Directory = function( theCallback) {
                var aMethodName = "pF_Directory";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Directory){}/* CQT */
            aPrototype.pF_Directory = pF_Directory;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Directory.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Directory = function( theCallback) {
                var aMethodName = "pSS_Directory";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_ResolveParms.bind( this),
                    this.pS_ComputeUsedFullPath.bind( this),
                    this.pS_StatBefore.bind( this),
                    this.pS_TreeDirs.bind( this),
                    this.pS_RemoveDirsOrFiles.bind( this),
                    this.pS_CreateDirs.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_Directory){}/* CQT */
            aPrototype.pSS_Directory = pSS_Directory;







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






            return aPrototype;

        })();




        var Directory_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._v_DirectoryLazy = null;

            this._v_BasePathParmName            = null;
            this._v_BasePath                    = null;
            this._v_DirPathParmName             = null;
            this._v_DirPath                     = null;
            this._v_FullDirPathParmName         = null;
            this._v_FullDirPath                 = null;
            this._v_ExpandHome                  = null;

            this._v_Tree                        = null;
            this._v_TreeDirs                    = null;
            this._v_TreeLevel                   = null;
            this._v_TreeFiles                   = null;

            this._v_RmDir                       = null;
            this._v_RmDirContentsFiles          = null;
            this._v_RmDirContentsDirs           = null;
            this._v_FailIfNotEmpty              = null;

            this._v_FailIfNotExists             = null;
            this._v_FailIfAlreadyExists         = null;
            this._v_CreateDir                   = null;
            this._v_CreateDirMode                  = null;

            this._v_Dump_Paths                  = null;
            this._v_Dump_Stats                  = null;
            this._v_Dump_ParseResult            = null;
            this._v_Dump_Readdirs               = null;
            this._v_Dump_DirContents            = null;
            this._v_Dump_Tree                   = null;
            this._v_Dump_TreeIndented           = null;
            this._v_Dump_TreeStats              = null;
            this._v_Dump_Removals               = null;
            this._v_Dump_Mkdirs                 = null;

            this._v_BasePathIsFromParmName      = null;
            this._v_DirPathIsFromParmName       = null;
            this._v_FullDirPathIsFromParmName   = null;

            this._v_HomeDirPath                 = null;

            this._v_FullDirPathOrJoined         = null;
            this._v_HomeExpandedInFullDirPath   = null;
            this._v_FullDirPathParseResult      = null;
            this._v_FullDirPathMayBeRelative    = null;
            this._v_UsedFullDirPath             = null;

            this._v_StatBefore                  = null;
            this._v_StatErrorBefore             = null;
            this._v_FullDirExisted              = null;
            this._v_FullDirRemoved              = null;
            this._v_FullDirExists               = null;
            this._v_DirsCreated                 = null;
            this._v_MkdirsExceptions            = null;
            this._v_StatAfter                   = null;
            this._v_StatErrorAfter              = null;

            this._v_FullDirPathSteps            = null;
            this._v_PathsToStatOrMkdir          = null;

            this._v_DirStepsMode                = null;

            this._v_DirStepIndex                = null;
            this._v_LastPathToStatOrMkdir       = null;
            this._v_LastPathStatBefore          = null;
            this._v_LastPathStatErrorBefore     = null;
            this._v_LastPathIsNotDirectory      = null;
            this._v_LastPathStatAfter           = null;
            this._v_LastPathStatErrorAfter      = null;

            this._v_PathStatsBefore             = null;
            this._v_PathStatsErrorsBefore       = null;
            this._v_PathStatsAfter              = null;
            this._v_PathStatsErrorAfter         = null;

            this._v_DirsToTree    = null;
            this._v_DirsTree                    = null;
            this._v_DirsInTreePaths             = null;
            this._v_FilesInTreePaths            = null;

            this._v_LastReaddirError            = null;
            this._v_LastReaddirSubdirsOrFiles   = null;

            this._pInit_Directory(
                theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        Directory_Constructor.prototype = aDirectory_Prototype;





        var Directory_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aDirectory_Prototype;
            this._v_Type = null;


            this._v_DirectoryLazy = null;

            this._v_BasePathParmName            = null;
            this._v_BasePath                    = null;
            this._v_DirPathParmName             = null;
            this._v_DirPath                     = null;
            this._v_FullDirPathParmName         = null;
            this._v_FullDirPath                 = null;
            this._v_ExpandHome                  = null;

            this._v_Tree                        = null;
            this._v_TreeDirs                    = null;
            this._v_TreeLevel                   = null;
            this._v_TreeFiles                   = null;

            this._v_RmDir                       = null;
            this._v_RmDirContentsFiles          = null;
            this._v_RmDirContentsDirs           = null;
            this._v_FailIfNotEmpty              = null;

            this._v_FailIfNotExists             = null;
            this._v_FailIfAlreadyExists         = null;
            this._v_CreateDir                   = null;
            this._v_CreateDirMode                  = null;

            this._v_Dump_Paths                  = null;
            this._v_Dump_Stats                  = null;
            this._v_Dump_ParseResult            = null;
            this._v_Dump_Readdirs               = null;
            this._v_Dump_DirContents            = null;
            this._v_Dump_Tree                   = null;
            this._v_Dump_TreeIndented           = null;
            this._v_Dump_TreeStats              = null;
            this._v_Dump_Removals               = null;
            this._v_Dump_Mkdirs                 = null;

            this._v_BasePathIsFromParmName      = null;
            this._v_DirPathIsFromParmName       = null;
            this._v_FullDirPathIsFromParmName   = null;

            this._v_HomeDirPath                 = null;

            this._v_FullDirPathOrJoined         = null;
            this._v_HomeExpandedInFullDirPath   = null;
            this._v_FullDirPathParseResult      = null;
            this._v_FullDirPathMayBeRelative    = null;
            this._v_UsedFullDirPath             = null;

            this._v_StatBefore                  = null;
            this._v_StatErrorBefore             = null;
            this._v_FullDirExisted              = null;
            this._v_FullDirRemoved              = null;
            this._v_FullDirExists               = null;
            this._v_DirsCreated                 = null;
            this._v_MkdirsExceptions            = null;
            this._v_StatAfter                   = null;
            this._v_StatErrorAfter              = null;

            this._v_FullDirPathSteps            = null;
            this._v_PathsToStatOrMkdir          = null;

            this._v_DirStepsMode                = null;

            this._v_DirStepIndex                = null;
            this._v_LastPathToStatOrMkdir       = null;
            this._v_LastPathStatBefore          = null;
            this._v_LastPathStatErrorBefore     = null;
            this._v_LastPathIsNotDirectory      = null;
            this._v_LastPathStatAfter           = null;
            this._v_LastPathStatErrorAfter      = null;

            this._v_PathStatsBefore             = null;
            this._v_PathStatsErrorsBefore       = null;
            this._v_PathStatsAfter              = null;
            this._v_PathStatsErrorAfter         = null;

            this._v_DirsToTree    = null;
            this._v_DirsTree                    = null;
            this._v_DirsInTreePaths             = null;
            this._v_FilesInTreePaths            = null;

            this._v_LastReaddirError            = null;
            this._v_LastReaddirSubdirsOrFiles   = null;
        };
        Directory_SuperPrototypeConstructor.prototype = aDirectory_Prototype;



        var aModule = {
            "Directory_Prototype": aDirectory_Prototype,
            "Directory_Constructor": Directory_Constructor,
            "Directory_SuperPrototypeConstructor": Directory_SuperPrototypeConstructor
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

            var aM_runsubs_test  = require('./runsubs-test');
            var aM_parms_general = require('../general-test/parms-general');
            var aM_overrider     = require('./overrider');
            var aM_sentinels     = require('./sentinels');
            var aM_specloader    = require('./resloader/specloader');
            var aM_fs            = require('fs');
            var aM_path          = require('path');
            var aM_osenv         = require('osenv');
            var aM_parse_filepath= require('parse-filepath');
            var aM_traversals    = require('./traversals/traversals');

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
                aM_traversals
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
            "./traversals/traversals"
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
                theM_traversals
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
                theM_traversals
            );
        });
    }


}());


