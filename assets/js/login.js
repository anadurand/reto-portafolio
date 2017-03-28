var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  //validateForm();
});

window.addEventListener('load',function() {
  var loginButton = document.getElementById('login');
  loginButton.addEventListener('click',function() {
    var emailInput = document.getElementById('inputemail');
    var passwordInput = document.getElementById('inputpassword');
    if (emailInput.value == "" ) {
      Email.innerHTML = "* Este campo es requerido";
    }
    if (passwordInput.value == "") {
      Password.innerHTML = "* Este campo es requerido";
    }

  });
});
