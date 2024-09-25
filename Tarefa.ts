

// Explicacao:
//Tarefa tem 3 atributos: descricao, prioridade (opcional), e status, que inicia como pendente
//metodo exibirInformacoes retorna uma string formatada com os detalhes da tarefa
//metodo marcarConcluida altera o status da tarefa para concluida 

class Tarefa {
    descricao: string;
    prioridade: string;
    status: string;

    constructor(descricao: string, prioridade?: string) {  // interrogaçao (?) indica que  parametro e opcional 
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.status = "Pendente";
    }

    exibirInformacoes(): string {
        return `tarefa: ${this.descricao} | Prioridade: ${this.prioridade ? this.prioridade : "Nenhuma"} | Status: ${this.status}`;
    }

    marcarConcluida(): void {
        this.status = "tar.feita";
    }
}
