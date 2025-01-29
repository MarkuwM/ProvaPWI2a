let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let celular = document.getElementById('celular')
let salvar = document.getElementById('salvar')
let limpar = document.getElementById('limpar')

function salvar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let celular = document.getElementById("celular").value;

    if (nome && email && telefone && celular) {
        alert("Cadastro realizado com sucesso");
    } else {
        alert("Preencha todos os campos");
    }
}

salvar.addEventListener('click', campos)
limpar.addEventListener('click', function () {
    nome = document.getElementById('nome').value = ""
    email = document.getElementById('email').value = ""
    telefone = document.getElementById('telefone').value = ""
    celular = document.getElementById('celular').value = ""
})