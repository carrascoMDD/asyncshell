/**
 * Created by acv on 18/11/15.
 */
    
    
function pGenAccessors() {

    var anIndent = "    ";


    var aTemplateFunction_get = function() {

        return this._v___thePpty__;
    };


    var aTemplateFunction_set = function( theValue) {

        this._v___thePpty__ = theValue;
    };


    var aSourceFunction_get = aTemplateFunction_get.toString();
    var aSourceFunction_set = aTemplateFunction_set.toString();

    var aPptyRegexp = new RegExp( "__thePpty__", "g");


    /*
    var somePptyNames = [
        "Tag",
        "TagName",
        "Length",
        "VR",
        "IsHeader",
        "IsPrivate",
        "Items",
        "Fragments",
        "Value",
        "ValueReference",
        "ExternalReferences"
    ];
    */


    var somePptyNames = [
        "Index",
        "Offset",
        "Length",
        "BasicOffset"
    ];



    var aNumPptNames = somePptyNames.length;

    var aGeneratedCode = "";

    for( var aPptyNameIdx=0; aPptyNameIdx < aNumPptNames; aPptyNameIdx++) {

        var aPptyName = somePptyNames[ aPptyNameIdx];

        var aGetterName = "fGet_" + aPptyName;
        var aSetterName = "pSet_" + aPptyName;

        var anAccessorCode_get = anIndent + "var " + aGetterName + " = " + aSourceFunction_get.replace( aPptyRegexp, aPptyName) + ";\n" +
            anIndent + "if( " + aGetterName + "){}/* CQT */\n" +
            anIndent + "aPrototype." + aGetterName + " = " + aGetterName + ";";

        var anAccessorCode_set = anIndent + "var " + aSetterName + " = " + aSourceFunction_set.replace( aPptyRegexp, aPptyName) + ";\n" +
            anIndent + "if( " + aSetterName + "){}/* CQT */\n" +
            anIndent + "aPrototype." + aSetterName + " = " + aSetterName + ";";

        aGeneratedCode += ( "\n" + anAccessorCode_get + "\n\n\n\n" + anAccessorCode_set + "\n\n\n\n");
    }

    console.log( aGeneratedCode);
}

pGenAccessors();