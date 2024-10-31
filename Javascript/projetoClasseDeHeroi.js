//Definição da classe de herói
class Heroi {
    constructor(idade, tipo) {
        this.tipo = tipo;
        this.nome = this.definirNome(tipo);
        this.idade = idade;
    }

    definirNome(tipo) {
        if (tipo === "guerreiro") {
            return "Thandor Braço-de-Ferro";
        } 
        else if (tipo === "mago") {
            return "Eldryon Sombralume";
        } 
        else if (tipo === "monge") {
            return "Kairen da Paz Eterna";
        } 
        else { //tipo === "ninja"
            return "Shinobi Kurokage";
        } 
    }

    atacar() {
        let ataque = ""

        if (this.tipo === "guerreiro") {
            ataque = "espada\n"
        }
        else if (this.tipo === "mago") {
            ataque = "magia\n"
        }
        else if (this.tipo === "monge") {
            ataque = "artes marciais\n"
        }
        else { //this.tipo === "ninja"
            ataque = "shuriken\n"
        }

        console.log("O " + this.tipo + " " + this.nome + " atacou usando " + ataque)
    }
}

//Processos para input de string e número
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirInput() {
    console.log("Escreva o tipo do herói que você quer que ataque")
    console.log("1. Guerreiro")
    console.log("2. Mago")
    console.log("3. Monge")
    console.log("4. Ninja")
    console.log("Digite 'sair' para encerrar.\n")

    rl.question("Tipo: ", (input) => {
        let tipo = input.toLowerCase();

        if (tipo == "sair") {
            rl.close();
            return;
        }

        if (tipo != "guerreiro" && tipo != "mago" && tipo != "monge" && tipo != "ninja") {
            console.log("Tipo inválido de herói, tente novamente.\n");
            pedirInput();
            return;
        }
    
        let heroi = new Heroi(30, tipo)
        heroi.atacar();

        pedirInput();
    });
}

pedirInput();
