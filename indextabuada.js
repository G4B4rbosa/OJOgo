var acerto = 0;
var erro = 0;
var campo1;
var campo2;
var campoResposta;
var valor1;
var valor2;
var total;
var divAcertos;
var divErros;
var operador;
var operadores = ["+", "-", "x", "÷"];

divErros = document.querySelector('#divErros');
divAcertos = document.querySelector('#divAcertos');
campo1 = document.querySelector('#txtValor1');
campo2 = document.querySelector('#txtValor2');
campoResposta = document.querySelector('#txtResposta');

campoResposta.addEventListener('keyup', (Event) => {
    if (Event.key == "Enter") {
        // conferirMultiplicacao();
        // conferirDivisao();
        // conferirAdicao();
        // conferirSubtracao();
        Sortear();


        conferirOperador(operacaoAleatoria);



        var operacaoAleatoria = operadorAleatorio();

        // if (erro == 5) {
        //     window.location.href = "./gameover.html";
        // }
        // if (acerto >= 1) {
        //     // criar função sortear divisão
        //     operador = document.getElementById("operadores");
        //     operador.textContent = "÷"
        // }
        document.getElementById('txtResposta').value = '';
    }
});

desabilitarBotaoClicado();

function conferirOperador(operacaoAleatoria) {
    if (operadores[operacaoAleatoria] == "+") {
        conferirAdicao();
    } else if (operadores[operacaoAleatoria] == "-") {
        conferirSubtracao();
    } else if (operadores[operacaoAleatoria] == "÷") {
        conferirDivisao();
    } else if (operadores[operacaoAleatoria] == "x") {
        conferirMultiplicacao();
    }
}

function operadorAleatorio() {
    var operacaoAleatoria = Math.floor(Math.random() * operadores.length);

    operadores[operacaoAleatoria];
    console.log(operadores[operacaoAleatoria]);
    var operador = document.getElementById("operadores");
    operador.textContent = operadores[operacaoAleatoria];
    return operacaoAleatoria;
}

function Sortear() {
    valor1 = Math.floor((Math.random() * 10));
    campo1.value = valor1;
    valor2 = Math.floor((Math.random() * 10));
    campo2.value = valor2;
}

function conferirSubtracao() {
    Resposta = isNaN(campoResposta.value);
    console.log(Resposta);
    total = valor1 - valor2;
    verificarResposta();

}

function conferirAdicao() {
    Resposta = isNaN(campoResposta.value);
    console.log(Resposta);
    total = valor1 + valor2;
    verificarResposta();

}

function conferirDivisao() {
    Resposta = isNaN(campoResposta.value);
    console.log(Resposta);
    total = valor1 / valor2;
    verificarResposta();

}


function conferirMultiplicacao() {
    Resposta = isNaN(campoResposta.value);
    console.log(Resposta);
    total = valor1 * valor2;
    verificarResposta();

}

function verificarResposta() {
    if (Resposta == false && Resposta >= 0) {
        if (total == campoResposta.value) {
            acerto++;
            divAcertos.innerHTML = acerto;
        } else {
            erro++;
            divErros.innerHTML = erro;
        }
    }
}

function desabilitarBotaoClicado() {
    const botoes = document.querySelectorAll('.botao');
    console.log(botoes);

    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            botao.classList.add('selecionado');
        });
    });
}
