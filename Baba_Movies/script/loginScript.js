  let x = document.getElementById("login");
  let y = document.getElementById("register");
  let aboutUs = document.querySelector(".about-us-btn");
  let loginSubmit = document.querySelector(".login-submit");
  let loginEmailField = document.querySelector(".login-email-field");
  let loginPasswordField = document.querySelector(".login-password-field");
  let registerSubmit = document.querySelector(".register-submit");
  let fName = document.querySelector(".fname-field");
  let lName = document.querySelector(".lname-field");
  let registerEmailField = document.querySelector(".register-email-field");
  let registerPasswordField = document.querySelector(".register-password-field");
  let loginOverlay = document.querySelector(".login-overlay");
  let loginOkay = document.querySelector(".login-okay");
  let registerOverlay = document.querySelector(".register-overlay");
  let registerOkay = document.querySelector(".register-okay");
  let hideIcon;
  let hideIcon2;


  // about us button
  aboutUs.addEventListener("click", function(){
    window.alert("Please Visit Home Page");
  });

  // Login Validation
  loginSubmit.addEventListener("click", function(){
    let isValid = true;

  if (!loginEmailField.value.endsWith('@gmail.com') || loginEmailField.value.length < 13) {
      document.querySelector(".error1").innerHTML = "Invalid Email";
      isValid = false;
  }
  else{
    document.querySelector(".error1").innerHTML = "";
    let isValid = true;
  }

  if (loginPasswordField.value.length < 4) {
    document.querySelector(".error2").innerHTML =  "Password must be at least 4 characters";
    isValid = false;
  }
  else{
    document.querySelector(".error2").innerHTML = "";
    let isValid = true;
  }

  if (isValid) {
    loginOverlay.style.display = "block";
  }
  });

  // Login Confirmation
  loginOkay.addEventListener("click",function(){
    loginOverlay.style.display = "none";
    loginEmailField.value = "";
    loginPasswordField.value = "";
    document.getElementById('password').type="password";
    document.getElementById('password-hide').src="password-hide.png";
    hideIcon = 0;
  });

  // Registration Validation
  registerSubmit.addEventListener("click", function(){
    let isValid = true;

    if (fName.value.length < 4) {
      document.querySelector(".error3").innerHTML = "Name must be at least 4 characters";
      isValid = false;
  }

  else{
    document.querySelector(".error3").innerHTML = "";
      isValid = true;
  }

  if (lName.value.length < 4) {
    document.querySelector(".error4").innerHTML = "Name must be at least 4 characters";
    isValid = false;
  }

  else{
    document.querySelector(".error4").innerHTML = "";
      isValid = true;
  }

  if (!registerEmailField.value.endsWith('@gmail.com') || registerEmailField.value.length < 13) {
    document.querySelector(".error5").innerHTML = "Invalid Email";
    isValid = false;
}
else{
  document.querySelector(".error5").innerHTML = "";
  let isValid = true;
}

if (registerPasswordField.value.length < 4) {
  document.querySelector(".error6").innerHTML =  "Password must be at least 4 characters";
  isValid = false;
}
else{
  document.querySelector(".error6").innerHTML = "";
  let isValid = true;
}

if (isValid) {
  registerOverlay.style.display = "block";
}
  });

  // Register Confirmation
  registerOkay.addEventListener("click",function(){
    registerOverlay.style.display = "none";
    fName.value = "";
    lName.value = "";
    registerEmailField.value = "";
    registerPasswordField.value = "";
    document.getElementById('password2').type="password";
    document.getElementById('password-hide2').src="password-hide.png";
    hideIcon2 = 0;
  });

  // hide show icon for login
  function pass(){
    if(hideIcon===1){
      document.getElementById('password').type="password";
      document.getElementById('password-hide').src="password-hide.png";
      hideIcon = 0;
    }
    else{
      document.getElementById('password').type="text";
      document.getElementById('password-hide').src="password-show.png";
      hideIcon = 1;
    }
  }

  // hide show icon for registration
  function pass2(){
    if(hideIcon2===1){
      document.getElementById('password2').type="password";
      document.getElementById('password-hide2').src="password-hide.png";
      hideIcon2 = 0;
    }
    else{
      document.getElementById('password2').type="text";
      document.getElementById('password-hide2').src="password-show.png";
      hideIcon2 = 1;
    }
  }

  // login form
  function login() {
      x.style.left = "4px";
      y.style.right = "-520px";
      x.style.opacity = 1;
      y.style.opacity = 0;
  }
  // registration form
  function register() {
      x.style.left = "-510px";
      y.style.right = "5px";
      x.style.opacity = 0;
      y.style.opacity = 1;
  }