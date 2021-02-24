var btnCad = document.getElementById('btnCad');
var inputName = document.getElementById('Name');
var inputCpf = document.getElementById('Cpf');
var inputMail = document.getElementById('Email');
var inputPass = document.getElementById('Password');
var inputRepeatPassword = document.getElementById('RepeatPassword');
var inputAge = document.getElementById('Age');
var inputstatus = document.getElementById('status');
var inputCep = document.getElementById('Cep');
var inputlocalidade = document.getElementById('localidade');
var inputuf = document.getElementById('uf');


btnCad.addEventListener('click', function () {

    firebase.auth().createUserWithEmailAndPassword(inputMail.value, inputPass.value)
    .then(function (response) {
        console.log(response)
        firebase.database().ref('Usuarios').push({
            Nome: inputName.value,
            Cpf: inputCpf.value,
            Idade: inputAge.value,
            cidade: inputlocalidade.value,
            UF: inputuf.value,
            Cep: inputCep.value,
            EstadoCivil: inputstatus.value,
            Senha: inputPass.value,
            userID:firebase.auth().currentUser.uid,
            Email:firebase.auth().currentUser.email})
        firebase.auth().signOut();
        alert("Cadastro realizado....!");
        
        window.location.replace('inicio.html');
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert("Preencha todos os campos ou altere o email");
        
    });
});


