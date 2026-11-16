const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const confirmPassError = document.getElementById('confirmPassError');
const genderError = document.getElementById('genderError');
const termsError = document.getElementById('termsError');


submitBtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword() &&
        validateGender() &&
        validateTerms()
    ) {
        alert("Form submit successful");
    }

});


// Name Validation
function validateName() {

    let name = document.getElementById('name').value.trim();

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Write your full name";
        return false;
    }

    nameError.innerHTML = "";
    return true;
}


// Email Validation
function validateEmail() {

    let email = document.getElementById('email').value.trim();

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Enter valid email";
        return false;
    }

    emailError.innerHTML = "";
    return true;
}


// Password Validation
function validatePassword() {

    let password = document.getElementById('password').value;

    if (password.length == 0) {
        passError.innerHTML = "Password is required";
        return false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        passError.innerHTML = "Provide valid password";
        return false;
    }

    passError.innerHTML = "";
    return true;
}


// Confirm Password Validation
function validateConfirmPassword() {

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (confirmPassword.length == 0) {
        confirmPassError.innerHTML = "Confirm password is required";
        return false;
    }

    if (password != confirmPassword) {
        confirmPassError.innerHTML = "Password does not match";
        return false;
    }

    confirmPassError.innerHTML = "";
    return true;
}


// Gender Validation
function validateGender() {

    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;

    if (!male && !female) {
        genderError.innerHTML = "Please select your gender";
        return false;
    }

    genderError.innerHTML = "";
    return true;
}


// Terms and Conditions Validation
function validateTerms() {

    let terms = document.getElementsByName('terms');

    for (let i = 0; i < terms.length; i++) {

        if (!terms[i].checked) {
            termsError.innerHTML = "Please accept all Terms and Conditions";
            return false;
        }

    }

    termsError.innerHTML = "";
    return true;
}