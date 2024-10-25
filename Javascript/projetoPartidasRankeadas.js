//Processos para input de números
const readline = require('readline');

const rl = readline.createInterface ({
   input: process.stdin,
   output: process.stdout 
});

let determinarRank; //Declaração da função

//Declaração de variáveis a serem utilizadas
let vitorias = 0
let derrotas = 0
let saldoVitorias = 0
let nivel = ""

const perguntarVitorias = () => {
    rl.question("Digite o número de vitórias: ", (nVitorias) => {
        vitorias = parseInt(nVitorias);

        if (vitorias < 0) { //Evitar inconsistências
            console.log("O número de vitórias não pode ser negativo\n");
            perguntarVitorias();
        }
        else {
            perguntarDerrotas();
        }
    });
}

const perguntarDerrotas = () => {
    rl.question("Digite o número de derrotas: ", (nDerrotas) => {
        derrotas = parseInt(nDerrotas);

        if (derrotas < 0) { //Evitar inconsistências
            console.log("O número de derrotas não pode ser negativo\n");
            perguntarDerrotas();
        }
        else {
            nivel = determinarRank(vitorias, derrotas);

            console.log("O herói tem saldo de " + saldoVitorias + " vitórias e está no nível de " + nivel + "\n"); //Saída

            rl.close()
        }
    })
}

perguntarVitorias(); //Execução da lógica

//Função para determinar rank baseado no saldo de vitórias
determinarRank = function(vitorias, derrotas) {
    saldoVitorias = parseInt(vitorias - derrotas);

    //Determinação do rank
    if (saldoVitorias < 10) {
        return "Ferro"
    }
    else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        return "Bronze"
    }
    else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        return "Prata"
    }
    else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        return "Ouro"
    }
    else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        return "Diamante"
    }
    else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        return "Lendário"
    }

    //saldoVitorias > 100
    return "Imortal"
}
