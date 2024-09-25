

const readlineSync = require('readline-sync');

class Tarefa {
    descricao: string;
    prioridade: string;
    completa: boolean;

    constructor(descricao: string, prioridade: string = "normal") {
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.completa = false;
    }

    marcarComoFeita() {
        this.completa = true;
    }

    toString(): string {
        return `${this.descricao} [${this.prioridade}] - ${this.completa ? "Feita" : "Pendente"}`;
    }
}

class FilaDeTarefas {
    tarefas: Tarefa[];

    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa: Tarefa) {
        this.tarefas.push(tarefa);
        console.log("Tarefa adicionada com sucesso!");
    }

    removerTarefa() {
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa para remover.");
        } else {
            this.tarefas.shift();
            console.log("Primeira tarefa removida.");
        }
    }

    listarTarefas() {
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa na fila.");
        } else {
            console.log("Tarefas:");
            this.tarefas.forEach((tarefa, index) => {
                console.log(`${index + 1}. ${tarefa.toString()}`);
            });
        }
    }

    tarefaPronta() {
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa para marcar como feita.");
        } else {
            this.tarefas[0].marcarComoFeita();
            console.log("Primeira tarefa marcada como feita.");
        }
    }
}

function atualizarRelogio() {
    setInterval(() => {
        const data = new Date();
        const horas = data.getHours().toString().padStart(2, '0');
        const minutos = data.getMinutes().toString().padStart(2, '0');
        const segundos = data.getSeconds().toString().padStart(2, '0');
        const hhmmss = [horas, minutos, segundos].join(':');
        console.log(hhmmss.padStart(120, ' '));
    }, 1000);  // Atualiza o relógio a cada segundo
}

function menu() {
    let fila = new FilaDeTarefas();
    atualizarRelogio();  // Inicia o relógio

    while (true) {
        console.log("\n[][]][][][][][][][][][]");
        console.log("--- Menu de Tarefas ---");
        console.log("[01] Incluir tarefa");
        console.log("[02] Excluir tarefa");
        console.log("[03] Listar tarefas");
        console.log("[04] Marcar 1ª tarefa como feita");
        console.log("[99] Sair");
        console.log("[][]][][][][][][][][][]");

        const opcao = readlineSync.question("Escolha uma opcao: ");

        switch (opcao) {
            case '01':
                let descricao = readlineSync.question("Digite a descricao da tarefa: ");
                let prioridade = readlineSync.question("Digite a prioridade (opcional): ");
                let tarefa = new Tarefa(descricao, prioridade);
                fila.adicionarTarefa(tarefa);
                break;

            case '02':
                fila.removerTarefa();
                break;

            case '03':
                fila.listarTarefas();
                break;

            case '04':
                fila.tarefaPronta();
                break;

            case '99':
                console.log("Saindo...");
                console.log("[ BOA SORTE NA NOVA EMPREITADA ]");
                console.log("[ NOS VEREMOS EM BREVE !!! ]");
                console.log('\u0007');  // Gera um beep no terminal
                return;

            default:
                console.log("Opção inválida, tente novamente.");
        }
    }
}

menu();


