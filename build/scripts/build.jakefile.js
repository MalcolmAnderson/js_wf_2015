(function() {
    "use strict";

    var version = require("../util/version_checker.js");
    var jshint = require("simplebuild-jshint");
    var jshintConfig = require("../config/jshint.conf.js");
    var shell = require("shelljs");
    var paths = require("../config/paths.js");
    var browserify = require("../util/browserify_runner.js");
    var karma = require("../util/karma_runner.js");

    var startTime =Date.now();


    //*** GENERAL

    desc( "Lint and test");
    task( "default", [ "version", "lint", "build" ], function() {
        var elapsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\n\nBUILD OK (" + elapsedSeconds.toFixed(2) + "s)");
    });

    desc("Start server (for manual testing");
    task("run", [ "build" ], function(){
        console.log("Starting server. Press Ctrl-C to exit.");
        jake.exec("node " + paths.distDir + "/run.js 5000", {interactive: true }, complete);
    }, {async: true});


    //*** LINT

    desc( "Lint everything");
    task( "lint", [ "lintNode", "lintClient" ]);

    task( "lintNode", function() {
        process.stdout.write("Linting Node.js code: ");
        jshint.checkFiles({
            files: ["build/**/*.js" ],
            options: jshintConfig.nodeOptions,
            globals: jshintConfig.nodeGlobals
        }, complete, fail);
    }, {async: true});

    task( "lintClient", function() {
        process.stdout.write("Linting browser code: ");
        jshint.checkFiles({
            files: ["src/client/**/*.js" ],
            options: jshintConfig.nodeOptions,
            globals: jshintConfig.nodeGlobals
        }, complete, fail);
    }, {async: true});



    //*** TEST
    desc("Start Karma server -- run this first");
    task("karma", function(){
        karma.serve(paths.karmaConfig, complete, fail);
    }, {async: true});


    //*** BUILD

    desc("Build distribution package");
    task("build", [ "prepDistDir", "buildClient", "buildServer"]);

    //placeholders
    task("prepDistDir", function() {
        shell.rm("-rf", paths.distDir);

    });

    task("buildClient", [ paths.clientDistDir, "bundleClientJs" ], function() {
        console.log("Copying client code: .");
        shell.cp(paths.clientDir + "/*.html", paths.clientDir + "/*.css", paths.clientDistDir);
    });

    task("bundleClientJs", [paths.clientDistDir], function(){
        console.log("Bundling browser code with Browserify: .");
        browserify.bundle({
            entry: paths.clientEntryPoint,
            outfile: paths.clientDistBundle,
            options: {
                standalone: "example",
                debug: true
            }
        }, complete, fail);
    }, {async: true});

    task("buildServer", function() {
        console.log("Copying server code: .");
        shell.cp("-R", paths.serverDir, paths.serverEntryPoint, paths.distDir);
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


    //*** DIRECTORIES

    directory(paths.distDir);
    directory(paths.clientDistDir);


}());