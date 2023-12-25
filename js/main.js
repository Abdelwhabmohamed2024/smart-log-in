var email = document.getElementById("email");
var password = document.getElementById("password");
var newName = document.getElementById("newName");
var newEmail = document.getElementById("newEmail");
var newPassword = document.getElementById("newPassword");
var cartona = "";
var users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("showMe").addEventListener("click", function () {
  document.getElementById("showHim").style.display = "block";
});

     
document.getElementById("log-in").addEventListener("click", function () {
  login();
});

document.getElementById("sign").addEventListener("click", function () {
  signUpPageInput();
});

document.getElementById("log").addEventListener("click", function () {
  createAccount();
});

document.getElementById("in").addEventListener("click", function () {
  loginPageInput();
});

document.getElementById("log-out").addEventListener("click", function () {
  logout();
});
function login() {
  var inputs = {
    emailUser: email.value,
    passUser: password.value,
  };

  var user = User(inputs.emailUser);

  if ((user && user.passInput !== inputs.passUser) || (email.value =="" || password.value =="")) {
    alert("Invalid email or password");
   
  } else {
    welcomePageInput();
    cartona = document.getElementById("loggedInUserName").innerHTML = user.nameInput;
  }
 
}

function createAccount() {
  var inputs = {
    nameInput: newName.value,
    emailInput: newEmail.value,
    passInput: newPassword.value,
  };

  if (!user(inputs.emailInput)) {
    users.push(inputs);
    saveInputs();
    loginPageInput();
  } else {
    alert("An account with this email already exists");
  }
}

function loginPageInput() {
  document.getElementById("signUpPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

function signUpPageInput() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("signUpPage").style.display = "block";
}

function welcomePageInput() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("signUpPage").style.display = "none";
  document.getElementById("welcomePage").style.display = "block";
  document.getElementById("loggedInUserName").innerHTML = cartona;
}

function logout() {
  document.getElementById("welcomePage").style.display = "none";
  loginPageInput();
}

function user(email) {
  return users.find((user) => user.emailInput == email);
}

function User(email) {
  return users.find((user) => user.emailInput == email);
}

function saveInputs() {
  localStorage.setItem("users", JSON.stringify(users));
}


var openn= function () {
  if (users.length > 0) {
 
    loginPageInput();
  }}


























