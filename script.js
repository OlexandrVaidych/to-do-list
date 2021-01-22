let btnLogin = document.getElementById('btnLogin');
let formLogin = document.getElementById('formLogin');
let closeLogin = document.getElementById('closeLogin');
let btnCancelLogin = document.getElementById('btnCancelLogin');

let btnRegister = document.getElementById('btnRegister');
let formRegister = document.getElementById('formRegister');
let closeRegister = document.getElementById('closeRegister');
let btnCancelRegister = document.getElementById('btnCancelRegister');

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

btnLogin.addEventListener("click", showLoginForm);
closeLogin.addEventListener("click", closeLoginForm);
btnCancelLogin.addEventListener("click", closeLoginForm);

btnRegister.addEventListener("click", showRegisterForm);
closeRegister.addEventListener('click', closeRegisterForm);
btnCancelRegister.addEventListener("click", closeRegisterForm);