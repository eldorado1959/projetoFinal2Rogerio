var readlineSync = require('readline-sync');
var Tarefa = /** @class */ (function () {
    function Tarefa(descricao, prioridade) {
        if (prioridade === void 0) { prioridade = "normal"; }
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.completa = false;
    }
    Tarefa.prototype.marcarComoFeita = function () {
        this.completa = true;
    };
    Tarefa.prototype.toString = function () {
        return "".concat(this.descricao, " [").concat(this.prioridade, "] - ").concat(this.completa ? "Feita" : "Pendente");
    };
    return Tarefa;
}());
var FilaDeTarefas = /** @class */ (function () {
    function FilaDeTarefas() {
        this.tarefas = [];
    }
    FilaDeTarefas.prototype.adicionarTarefa = function (tarefa) {
        this.tarefas.push(tarefa);
        console.log("Tarefa adicionada com sucesso!");
    };
    FilaDeTarefas.prototype.removerTarefa = function () {
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa para remover.");
        }
        else {
            this.tarefas.shift();
            console.log("Primeira tarefa removida.");
        }
    };
    FilaDeTarefas.prototype.listarTarefas = function () {
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa na fila.");
        }
        else {
            console.log("Tarefas:");
            this.tarefas.forEach(function (tarefa, index) {
                console.log("".concat(index + 1, ". ").concat(tarefa.toString()));
            });
        }
    };
    FilaDeTarefas.prototype.tarefaPronta = function () {
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa para marcar como feita.");
        }
        else {
            this.tarefas[0].marcarComoFeita();
            console.log("Primeira tarefa marcada como feita.");
        }
    };
    return FilaDeTarefas;
}());
function atualizarRelogio() {
    setInterval(function () {
        var data = new Date();
        var horas = data.getHours().toString().padStart(2, '0');
        var minutos = data.getMinutes().toString().padStart(2, '0');
        var segundos = data.getSeconds().toString().padStart(2, '0');
        var hhmmss = [horas, minutos, segundos].join(':');
        console.log(hhmmss.padStart(120, ' '));
    }, 1000); // Atualiza o relógio a cada segundo
}
function menu() {
    var fila = new FilaDeTarefas();
    atualizarRelogio(); // Inicia o relógio
    while (true) {
        console.log("\n[][]][][][][][][][][][]");
        console.log("--- Menu de Tarefas ---");
        console.log("[01] Incluir tarefa");
        console.log("[02] Excluir tarefa");
        console.log("[03] Listar tarefas");
        console.log("[04] Marcar 1ª tarefa como feita");
        console.log("[99] Sair");
        console.log("[][]][][][][][][][][][]");
        var opcao = readlineSync.question("Escolha uma opcao: ");
        switch (opcao) {
            case '01':
                var descricao = readlineSync.question("Digite a descricao da tarefa: ");
                var prioridade = readlineSync.question("Digite a prioridade (opcional): ");
                var tarefa = new Tarefa(descricao, prioridade);
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
                console.log('\u0007'); // Gera um beep no terminal
                return;
            default:
                console.log("Opção inválida, tente novamente.");
        }
    }
}
menu();
