document.getElementById("submitButton").addEventListener("click", function(){
    document.getElementById("reg-form").className="submitted";
    document.getElementById("reg-form").ariaPlaceholder="submitted";
});


function check () {
    var valid = true, error = "", field = "";
  
    field = document.getElementById("fname");
    error = document.getElementById("cfname");
    if (!field.checkValidity()) {
      valid = false;
      field.placeholder = "";
      field.suffix="./images/icon-error.svg";
      field.classList.add("err");
      error.innerHTML = "First Name cannot be empty\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
  
    field = document.getElementById("lname");
    error = document.getElementById("clname");
    if (!field.checkValidity()) {
      valid = false;
      field.placeholder = "";
      field.classList.add("err");
      error.innerHTML = "Last Name cannot be empty\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }

    field = document.getElementById("email");
    error = document.getElementById("cemail");
    if (!field.checkValidity()) {
      valid = false;
      field.placeholder = "";
      field.classList.add("err");
      error.innerHTML = "Looks like this is not an email\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }

    field = document.getElementById("pword");
    error = document.getElementById("cpword");
    if (!field.checkValidity()) {
      valid = false;
      field.placeholder = "";
      field.classList.add("err");
      error.innerHTML = "Password cannot be empty\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
    return valid;
  }