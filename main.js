"use strict";

var server = require("./bin/server");               // make server module available
var router = require("./routes/router");            // router module

server.start(router);                               // start server
                                                    // callback to route