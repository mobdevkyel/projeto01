var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');


btnLogin.addEventListener('click', function () {

    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
        //alert("Usuário Conectado!");
        // console.log("Success!");
        window.location.replace('inicio.html');
        
        // carregar tabela
        firebase.database().ref('Usuarios').once('value',
        function(alldata){
            alldata.forEach(
                function(CurrentRecord){
                    var name = CurrentRecord.val().Nome;
                    AddItemsTable(name);
                }
            );

        });

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert("Email ou usuario não existe");
        // console.log("Failure!")
    });
    
});

