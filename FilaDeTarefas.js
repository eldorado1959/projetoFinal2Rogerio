//Explicacao:
//FilaDeTarefas tem lista de tarefa que representa a fila
//metodo adicionarTarefa adiciona uma nova tarefa ao final da fila
//metodo removerTarefa remove e retorna a primeira tarefa da fila
//metodo listarTarefas exibe todas tarefas na fila
//metodo tarefaPronta marca primeira tarefa como "cncluida
var FilaDeTarefas = /** @class */ (function () {
    function FilaDeTarefas() {
        this.fila = [];
    }
    FilaDeTarefas.prototype.adicionarTarefa = function (tarefa) {
        this.fila.push(tarefa);
        console.log("Tarefa '".concat(tarefa.descricao, "' adicionada."));
    };
    FilaDeTarefas.prototype.removerTarefa = function () {
        if (this.fila.length > 0) {
            var tarefaRemovida = this.fila.shift();
            if (tarefaRemovida) {
                console.log("Tarefa '".concat(tarefaRemovida.descricao, "' removida."));
            }
            return tarefaRemovida;
        }
        else {
            console.log("Nenhuma tarefa na fila.");
        }
    };
    FilaDeTarefas.prototype.listarTarefas = function () {
        if (this.fila.length > 0) {
            this.fila.forEach(function (tarefa, index) {
                console.log("".concat(index + 1, ". ").concat(tarefa.exibirInformacoes()));
            });
        }
        else {
            console.log("Nenhuma tarefa na fila.");
        }
    };
    FilaDeTarefas.prototype.tarefaPronta = function () {
        if (this.fila.length > 0) {
            this.fila[0].marcarConcluida();
            console.log("Tarefa '".concat(this.fila[0].descricao, "' marcada como conclu\u00EDda."));
        }
        else {
            console.log("Nenhuma tarefa na fila.");
        }
    };
    return FilaDeTarefas;
}());
