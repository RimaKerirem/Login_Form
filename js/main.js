let showPassword = document.getElementById("check");
let password = document.getElementById("pass");

showPassword.onclick = function () {
  if (showPassword.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
};
