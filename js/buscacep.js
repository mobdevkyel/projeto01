const cep = document.querySelector("#Cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}


cep.addEventListener("blur", (e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu errado: ' + e,message))
    var inputlocalidade = document.getElementById('localidade');
    var inputuf = document.getElementById('uf');
    inputlocalidade.value = '';
    inputuf.value = '';
})