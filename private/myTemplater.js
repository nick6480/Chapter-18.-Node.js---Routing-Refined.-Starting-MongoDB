/* myTemplater.js Home made experimental templating */
"use strict";

const fs = require("fs");

exports.receipt = function(obj) {
    let html = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>McKilroy's First Test Template</title>
    </head>
    <body>
        <h1>Kilroy's Receipt</h1>
        <div>
            <p>You entered the following</p>
            <h3>Subject</h3>
            <p>${obj.POST.subject}</p>

            <h3>Message</h3>
            <pre>${obj.POST.message}</pre>

            <h3>Name</h3>
            <p>${obj.POST.name}</p>

            <h3>Email</h3>
            <p>${obj.POST.email}</p>

            <h3>Date</h3>
            <p>${obj.POST.date}</p>
        </div>
        <div>
            <h3>We noticed, and we will get back to you asap.</h3>
            <p><a href="/">Return to front page</a><p>
        </div>
    </body>
</html>`;
    return html;
}




exports.contactList = function() {

  let arr = [];

  //Gets JSON data
  let jsonData = fs.readFileSync("./public/json/contact.json", 'utf8')
  if (jsonData.length > 0) {
    arr = JSON.parse(jsonData);
  }



  let list = "";

  for (var i = 0; i < arr.length; i++) { //Loops trough array
    for(var elm in arr[i]) { //writes each element in HTML
      let contact = `<span>${elm}:<span> <span>${arr[i][elm]}<span><br>`
      list += contact; // Adds them all togeter
    }
    list += "<br>"
  }


  let html = `<!doctype html>
  <html>
      <head>
          <meta charset="utf-8"/>
          <title>McKilroy's First Test Template</title>
      </head>

      <body>
          <h1>Kilroy's Contact list</h1>
          <div id="list"
            ${list}
          </div>
          <div>
              <p><a href="/">Return to front page</a><p>
          </div>
      </body>
  </html>`;
  return html;
}
