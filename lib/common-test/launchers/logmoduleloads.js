
/*
 logmoduleloads.js
 Created 201601181635
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

gfLOGMODULELOADS = function( theModuleFullName) {
    console.log( ',{"msg": "LOADEDMODULE ' + theModuleFullName + '"}');
}




    // Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gfLOGMODULELOADS;
}
// AMD / RequireJS
else if (typeof define !== 'undefined' && define.amd) {
    define( function () {
        return gfLOGMODULELOADS;
    });
}
