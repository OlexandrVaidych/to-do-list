const btnLogin = document.getElementById('btnLogin');
const formLogin = document.getElementById('formLogin');
const closeLogin = document.getElementById('closeLogin');
const btnCancelLogin = document.getElementById('btnCancelLogin');

const btnRegister = document.getElementById('btnRegister');
const formRegister = document.getElementById('formRegister');
const closeRegister = document.getElementById('closeRegister');
const btnCancelRegister = document.getElementById('btnCancelRegister');

const username = document.getElementById('username');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');
const confirmPassword = document.getElementById('confirmPassword');

const email = document.getElementById('email');
const password = document.getElementById('password');

function showLoginForm() {
    formLogin.style.display='block';
}

function closeLoginForm() {
    formLogin.style.display='none';
}

function showRegisterForm(){
    formRegister.style.display='block';
}

function closeRegisterForm(){
    formRegister.style.display='none';
}

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Get fieldname
function getFieldName(input) {
    if (input.id === "username" || input.id === "email" || input.id === "password"){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    else if(input.id === "confirmPassword"){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1, 7) + " " +
            input.id.charAt(7).toLowerCase() + input.id.slice(8);
    }
    else{
        return input.id.slice(3);
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });
    return isRequired;
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

// Check the username field for all letters
function checkAllLetters(input) {
    let isRequired = false;
    {
        const letters = /^[A-Za-z]+$/;
        if(letters.test(input.value.trim())) {
            // showSuccess(input);
            isRequired = true;
        }
        else {
            showError(input, `${getFieldName(input)} does not contain all letters`);
        }
    }
    return isRequired;
}

// Check email is valid
function checkEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} is not valid`);
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

btnLogin.addEventListener("click", showLoginForm);
closeLogin.addEventListener("click", closeLoginForm);
btnCancelLogin.addEventListener("click", closeLoginForm);

btnRegister.addEventListener("click", showRegisterForm);
closeRegister.addEventListener('click', closeRegisterForm);
btnCancelRegister.addEventListener("click", closeRegisterForm);

// Event listeners
formRegister.addEventListener('submit', function(e) {
    e.preventDefault();

    if(!checkRequired([username, regEmail, regPassword, confirmPassword])){
        if(checkAllLetters(username)){
            checkLength(username, 3, 15);
        }
        checkLength(regPassword, 6, 25);
        checkEmail(regEmail);
        checkPasswordsMatch(regPassword, confirmPassword);
    }
});

formLogin.addEventListener('submit', function(e) {
    e.preventDefault();

    if(!checkRequired([email, password])){
        checkEmail(email);
        checkLength(password, 6, 25);
    }
});