const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const input = document.querySelector("input");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
});

const validatePassword = (password) => { 
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;
    return regex.test(password);
  }

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const erroricon = formControl.querySelector('.icon-error');
      
    small.innerHTML = message;
    erroricon.style.display = "block";
    formControl.classList.add('error');
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

const isValidEmail = email => {
    var RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return RegEmail.test(String(email).toLowerCase());
}
function checkInput() {
  const fnameVal = fname.value.trim();
  const lnameVal = lname.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  //first name validation
  if (fnameVal === '') {
    setError(fname, "first name cannot be blank");
  } else {
    setSuccess(input);
  }

  //last name validation
  if (lnameVal === '') {
    setError(lname, "last name cannot be blank");
  } else {
    setSuccess(input);
  }

  //email validation
  if (emailVal === '') {
    setError(email, "Email cannot be blank");
  }
  else if (!isValidEmail(emailVal)) {
    setError(email, "looks like this is not an email");
  }
  else {
    setSuccess(input);
  }

  //password validation
  if (passwordVal === '') {
    setError(password, "password cannot be blank");
  }
 else if (!validatePassword(passwordVal)) {
    setError(password, "must contain at least 1 lowercase alphabetical character,1 uppercase alphabetical character,1 numeric character,1 special character and must be eight characters or longer");
    
  } else {
    setSuccess(input);
  }
}
  



