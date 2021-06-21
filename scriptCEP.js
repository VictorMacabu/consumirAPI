'use strict';


const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const cep = document.getElementById("recebe-cep").value;
const url = `viacep.com.br/ws/${cep}/json/`;

function mudaBorder() { 
   document.getElementById("recebe-cep").Style.border.Color = '#008CBA';
  
}

document.getElementById("recebe-cep")
    .addEventListener('onFocus', mudaBorder());
document.getElementById("busca-cep")
    .addEventListener('onClick', pesquisarCep);
