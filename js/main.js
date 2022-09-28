let showPassword = document.getElementById("check");
let password = document.getElementById("pass");

showPassword.onclick = function () {
  password.type = showPassword.checked ? "text" : "password";
};
