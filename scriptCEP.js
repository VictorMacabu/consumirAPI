'use strict';



const cep = document.getElementById("recebe-cep").value;
const url = `viacep.com.br/ws/${cep}/json/`;
document.getElementById("busca-cep")
        .addEventListener('onClick',pesquisarCep);
        