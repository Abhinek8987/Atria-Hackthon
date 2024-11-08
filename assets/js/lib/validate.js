function validateForm() {
    var emailField = document.getElementById("email");
    var emailValue = emailField.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      alert("Please enter a valid data");
      emailField.focus();
      return false;
    }
    return true;
  }