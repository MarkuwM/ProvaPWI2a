let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let celular = document.getElementById('celular')
let salvar = document.getElementById('salvar')
let limpar = document.getElementById('limpar')

function campos(){
    if(nome = null){
        alert('Preencha todos os campos')
    }else if(email = null){
        alert('Preencha todos os campos')
    }else if(telefone = null){
        alert('Preencha todos os campos')
    }else if(celular = null){
        alert('Preencha todos os campos')
    }else{
        alert('Cadastro realizado com sucesso')
    }
}

salvar.addEventListener('click', campos)
limpar.addEventListener('click', function(){
    nome = document.getElementById('nome').value = ' '
    email = document.getElementById('email').value = ' '
    telefone = document.getElementById('telefone').value = ' '
    celular = document.getElementById('celular').value = ' '
})