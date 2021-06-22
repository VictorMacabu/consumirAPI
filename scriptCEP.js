'use strict';
const eNumero = (numero) => /^[0-9]+$/.test(numero);// .test verifica se o input é número 

const cepValido = (cep) => cep.length == 8 && eNumero(cep); // verifica se o input tem 8 digitos

const buscarCep = async () => { //Requisita à API e trata o cep recebido  
    const cep = document.getElementById("recebe-cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) { //verifica se cep pode ser valido

        const dados = await fetch(url);
        const valores = await dados.json();

        if (valores.hasOwnProperty('erro')) { //verifica se viacep retorna json com erro=true.
            document.getElementById('recebe-cep').value = 'CEP não encontrado!';
            document.getElementById('recebe-cep').style.color = "red";
            document.getElementById('recebe-cep').style.outlineColor = "red";
            document.getElementById("iRespostaCEP").style.display = "none"; //muda o estado do display do mostrador 
        } else {
            document.getElementById('recebe-cep').style.outlineColor = "#6aa4f8";
            atribuirValores(valores);
            document.getElementById("iRespostaCEP").style.display = ""; //muda o estado do display do mostrador 
        }
    } else {
        document.getElementById('recebe-cep').value = 'CEP incorreto!';
        document.getElementById('recebe-cep').style.color = "red";
        document.getElementById('recebe-cep').style.outlineColor = "red";
        document.getElementById("iRespostaCEP").style.display = "none"; //muda o estado do display do mostrador 
    }

}

document.getElementById("busca-cep") //cria evento click no buscador de CEP
    .addEventListener("click", buscarCep);

const atribuirValores = (valores) => { //insere os valores extraidos no mostrador.
    document.getElementById('cep').innerHTML = valores.cep;
    document.getElementById('logradouro').innerHTML = valores.logradouro;
    document.getElementById('estado').innerHTML = valores.uf;
    document.getElementById('cidade').innerHTML = valores.localidade;

}