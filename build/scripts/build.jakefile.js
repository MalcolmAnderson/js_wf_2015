(function() {
    "use strict";

    var version = require("../util/version_checker.js");

    var startTime =Date.now();

    desc( "Lint and test");
    task( "default", [ "version", "lint" ], function() {
        var elapsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\n\nBUILD OK (" + elapsedSeconds.toFixed(2) + "s)");
    });


    //*** LINT

    desc( "Lint everything");
    task( "lint", [ "lintNode", "lintClient" ]);

    task( "lintNode", function() {
        console.log("Linting Node.js code: - TODO = add Code");
    });

    task( "lintClient", function() {
        console.log("Linting browser code: - TODO = add Code");
    });


    //*** CHECK VERSION

    desc("Check Node version");
    task("version", function() {
        console.log ("Check Node.js version: .");
        version.check({
            name: "Node",
            expected: require("../../package.json").engines.node,
            actual: process.version,
            strict: true
        }, complete, fail);
    }, {async: true});

}());