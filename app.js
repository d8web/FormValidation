let form = document.querySelector('.form');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userPassword = document.getElementById('password');
let userBirthdate = document.getElementById('birthdate')
IMask(userBirthdate, {mask: '00/00/0000'});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let send = true;

    let user = userName.value;
    if(user.length <= 4 || user.length > 50) {
        send = false;
        userName.style.borderColor = "red"
        userName.parentElement.lastChild.previousSibling.innerText = "Nome precisa ter entre 4 e 50 caracteres"
    } else {
        userName.style.borderColor = "green"
    }

    let email = userEmail.value;
    const pattern = /\S+@\S+\.\S+/;
    if(pattern.test(email)) {
        userEmail.style.borderColor = "green"
    } else {   
        send = false;
        userEmail.style.borderColor = "red";
        userEmail.parentElement.lastChild.previousSibling.innerText = "Email inválido!"
    }

    let birthdate = userBirthdate.value;
    let dateUserBirthdate = birthdate.split('/')
    if(dateUserBirthdate.length !== 3) {
        send = false;
        userBirthdate.style.borderColor = "red"
        userBirthdate.parentElement.lastChild.previousSibling.innerText = "Data inválida!";
    } else {
        userBirthdate.style.borderColor = "green"
    }
    
    let password = userPassword.value;
    if(password.length <= 3 || password.length > 50) {
        send = false;
        userPassword.style.borderColor = "red"
        userPassword.parentElement.lastChild.previousSibling.innerText = "Senha precisa entre 3 a 50 caracteres!";
    } else {
        userPassword.style.borderColor = "green"
    }

    if(send) {
        form.submit();
    }
});