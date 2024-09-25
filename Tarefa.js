// Explicacao:
//Tarefa tem 3 atributos: descricao, prioridade (opcional), e status, que inicia como pendente
//metodo exibirInformacoes retorna uma string formatada com os detalhes da tarefa
//metodo marcarConcluida altera o status da tarefa para concluida 
var Tarefa = /** @class */ (function () {
    function Tarefa(descricao, prioridade) {
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.status = "Pendente";
    }
    Tarefa.prototype.exibirInformacoes = function () {
        return "tarefa: ".concat(this.descricao, " | Prioridade: ").concat(this.prioridade ? this.prioridade : "Nenhuma", " | Status: ").concat(this.status);
    };
    Tarefa.prototype.marcarConcluida = function () {
        this.status = "tar.feita";
    };
    return Tarefa;
}());
