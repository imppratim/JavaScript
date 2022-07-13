// Remember, we're gonna use strict mode in all scripts now!
"use strict";

document.getElementById("login-submit").addEventListener("click", function () {
  //get user email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //get user pass
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  //check email and pass
  if (userEmail == "kalada@hotmail.com" && userPassword == "secret") {
    console.log("valid user");
    window.location.href = "banking.html";
  }
});
