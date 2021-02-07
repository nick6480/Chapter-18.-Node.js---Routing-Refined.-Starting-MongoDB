/* libWebUtil.js Service Module */
"use strict";
const querystring = require("querystring"); // file system access

const getJSONString = function (obj) {      // prettyprint obj
    return JSON.stringify(obj, null, 4);
}

exports.makeWebArrays = function (req, data) {
    let get = req.url.split("?");
    let qs = "";
    if (get.length === 2) {
        qs = get[1];
    }

    let GET = querystring.parse(qs);
    let POST = querystring.parse(data);
    console.log(getJSONString({ GET, POST }));
    return { GET, POST };
}

exports.makeLogEntry = function(req) {
    let now = new Date();
    let s = "";
    let month = now.getMonth() < 10 ? "0" + now.getMonth() : "" + now.getMonth();
    let date = now.getDate() < 10 ? "0" + now.getDate() : "" + now.getDate();
    let hours = now.getHours() < 10 ? "0" + now.getHours() : "" + now.getHours();
    let mins = now.getMinutes() < 10 ? "0" + now.getMinutes() : "" + now.getMinutes();
    let secs = now.getSeconds() < 10 ? "0" + now.getSeconds() : "" + now.getSeconds();

    s += `${now.getFullYear()}-${month}-${date}`;
    s += "T";
    s += `${hours}:${mins}:${secs}`;
    s += " ";
    s += `${req.method} ${req.url}`;
    return s;
}