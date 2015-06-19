/**
 * Created by malcolm on 6/18/15.
 */
(function() {
    "use strict";

    var example = windows.example = {};

    var REQUIRED_FIELD_CLASS = "example-required";

    example.validateTextField = function validateTextField(field) {
        field.setAttribute("class", REQUIRED_FIELD_CLASS);
    }
}());
