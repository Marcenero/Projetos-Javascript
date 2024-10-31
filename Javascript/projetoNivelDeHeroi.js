//Processos para input de string e número
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = "";
let nivel = 0;

rl.question("Digite o nome do herói: ", (nomeInput) => {
    nome = nomeInput; //Armazena o nome do herói

    rl.question("Digite o nível de XP do herói: ", (nivelInput) => {
        nivel = parseInt(nivelInput); //Armazena o nível do herói

        let rank = "";

        //Determinação do rank
        if (nivel <= 1000) {
            rank = "Ferro";
        }
        else if (nivel > 1000 && nivel <= 2000) {
            rank = "Bronze";
        }
        else if (nivel > 2000 && nivel <= 5000) {
            rank = "Prata";
        }
        else if (nivel > 5000 && nivel <= 7000) {
            rank = "Ouro";
        }
        else if (nivel > 7000 && nivel <= 8000) {
            rank = "Platina";
        }
        else if (nivel > 8000 && nivel <= 9000) {
            rank = "Ascendente";
        }
        else if (nivel > 9000 && nivel <= 10000) {
            rank = "Imortal";
        }
        else { //Nivel > 10000
            rank = "Radiante";
        }

        //Print
        console.log("O Herói de nome " + nome + " está no nível de " + rank + "\n");

        //Encerra o processo
        rl.close();
    });
});
