(function() {
    "use strict";

    var startTime =Date.now();

    task( "default", function() {
        var elapsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\n\nBUILD OK (" + elapsedSeconds.toFixed(2) + "s)");
    });
}());