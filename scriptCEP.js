'use strict';

const buscarCep = async()=> {
    const cep = document.getElementById("recebe-cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    
    const dados = await fetch(url);
    const valores  = await dados.json();
    console.log(valores.json());
}

document.getElementById("busca-cep")
    .addEventListener("click", buscarCep);
 

    const preencherFormulario = (valores) => {
        document.getElementById('endereco').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
    }