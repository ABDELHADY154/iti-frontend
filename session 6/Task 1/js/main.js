function httpGet() {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://reqres.in/api/login");
  xhr.setRequestHeader(
    "Cookie",
    "__cfduid=d69e7926a06e29714b3cad997ca2b577e1599125880"
  );

  xhr.send();
  //   return xmlHttp.responseText;
}

function validateForm() {
  var emailInput = document.forms["myForm"]["email"].value;
  var emailError = document.getElementById("emailError");
  var passwordInput = document.forms["myForm"]["password"].value;
  var passwordError = document.getElementById("passwordError");

  var emailTest = emailInput.search(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  var passTest = /^[A-Za-z]\w{9,30}$/.test(passwordInput);

  if (emailInput == "") {
    emailError.innerHTML = "E-Mail must be filled out";
    return false;
  } else if (emailTest == -1) {
    emailError.innerHTML = "Please enter a valid email";
    return false;
  }

  // --------password-----------//
  if (passwordInput == "") {
    passwordError.innerHTML = "Password must be filled out";
    return false;
  } else if (!passTest) {
    passwordError.innerHTML = "Please enter a valid password";
    console.log(passTest);
    return false;
  } else {
    // var https = require("follow-redirects").https;
    // var fs = require("fs");

    // var options = {
    //   method: "GET",
    //   hostname: "reqres.in",
    //   path: "/api/login",
    //   headers: {
    //     Cookie: "__cfduid=d69e7926a06e29714b3cad997ca2b577e1599125880",
    //   },
    //   maxRedirects: 20,
    // };

    // var req = https.request(options, function (res) {
    //   var chunks = [];

    //   res.on("data", function (chunk) {
    //     chunks.push(chunk);
    //   });

    //   res.on("end", function (chunk) {
    //     var body = Buffer.concat(chunks);
    //     console.log(body.toString());
    //   });

    //   res.on("error", function (error) {
    //     console.error(error);
    //   });
    // });

    // req.end();
    // "email": "eve.holt@reqres.in",
    //  "password": "cityslicka2
    httpGet();
    return true;
  }
}
