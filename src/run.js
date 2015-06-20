/**
 * Created by malcolm on 6/18/15.
 */
(function() {
    "use strict";

    var path = require("path");
    var server = require("./server/server.js");

    var port = process.argv[2];

    server.start(port, path.resolve(__dirname, "./client"), function() {
        console.log("Server started on port " + port);
    });

    var sys = require('sys');
    var exec = require('child_process').exec;
    //function puts(error, stdout, stderr) { sys.puts(stdout) } exec("ls -la", puts);
    function puts(error, stdout, stderr) { sys.puts(stdout) } exec("firefox http://localhost:5000/index.html", puts);

    //firefox http://localhost:5000/index.html

}());