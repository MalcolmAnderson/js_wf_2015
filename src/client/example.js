/**
 * Created by malcolm on 6/18/15.
 */
(function() {
    "use strict";

    var constants = require("./constants.js");

    //var example = windows.example = {};


    exports.validateTextField = function validateTextField(field) {
        field.setAttribute("class", constants.REQUIRED_FIELD_CLASS);
    };
}());
