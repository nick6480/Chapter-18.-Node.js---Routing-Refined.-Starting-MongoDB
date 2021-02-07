"use strict";
/*
 *  new server.js adds request body data
 */
const http = require("http");                   // http module
const lib = require("../private/libWebUtil");   // home grown utilities
const hostname = "localhost";
const port = Number(process.argv[2]) || 3000;

module.exports = {
    start(router) {
        const server = http.createServer();

        server.on("request", function (req, res) {      // eventhandler for "request"
            console.log(lib.makeLogEntry(req));         // home made utility for logging
            let body = [];
            req.on("data", function (bodyData) {        // eventhandling for data reception
                body.push(bodyData);                    // bodyData is an object
            });
            req.on("end", function () {                 // eventhandling for end-of-data
                body = Buffer.concat(body).toString();  // body2string
                router.route(req, res, body);           // pass to router
            });
        });

        server.listen(port, hostname, function () {
            console.log(`Log: Server started on http://${hostname}:${port}/`);
        });
    }
}