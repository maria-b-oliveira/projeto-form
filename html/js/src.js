var form = document.getElementById('form')
var username = document.getElementById('username')
var email = document.getElementById('email')
var senha = document.getElementById('senha')
var confSenha = document.getElementById('senha-conf')

form.addEventListener('submit', (e) => {
    e.preventDefault
    checkInputs()
})

function checkInputs(){
    var usernameValue = username.value
    var emailValue = email.value
    var senhaValue = senha.value
    var confSenhaValue = confSenha.value

    if (usernameValue === ''){
        setErrorFor(username, 'O nome de usuário é obrigatório.');
    } else{
        setSucessFor(username)
    }

    if (emailValue === ''){
        setErrorFor(email, 'O email é obrigatório')
    } else if (!checkEmail(emailValue)){
        setErrorFor(email, 'Por favor, insira um email válido.');
    } else {
        setSucessFor(email);
    }

    if (senhaValue === '') {
        setErrorFor(senha, 'A senha é obrigatória.');
    } else if (senhaValue.length < 6) {
        setErrorFor(senha, 'A senha precisa ter no mínimo 6 caracteres.');
    } else {
        setSucessFor(senha);
    }

    if (confSenhaValue === '') {
        setErrorFor(confSenha, 'A confirmação de senha é obrigatória.');
    } else if (confSenhaValue !== senhaValue) {
        setErrorFor(confSenha, 'As senhas não conferem.');
    } else {
        setSucessFor(confSenha);
    }
}

var controleForm = form.querySelectorAll(".controle-form");

var formIsValid = [...controleForm].every((controleForm) => {
    return controleForm.className === "controle-form success";
});
    if (formIsValid) {
    console.log("O formulário está 100% válido!");
}


function setErrorFor(input, message){
    var controleForm = input.parentElement;
    var small = controleForm.querySelector('small')
    small.innerText = message;
    controleForm.className = 'controle-form error';
}

function setSucessFor(input, message){
    var controleForm = input.parentElement;
    controleForm.className = 'controle-form sucess';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
}