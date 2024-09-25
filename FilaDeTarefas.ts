
//Explicacao:
//FilaDeTarefas tem lista de tarefa que representa a fila
//metodo adicionarTarefa adiciona uma nova tarefa ao final da fila
//metodo removerTarefa remove e retorna a primeira tarefa da fila
//metodo listarTarefas exibe todas tarefas na fila
//metodo tarefaPronta marca primeira tarefa como "cncluida


class FilaDeTarefas {
    fila: Tarefa[];

    constructor() {
        this.fila = [];
    }

    adicionarTarefa(tarefa: Tarefa): void {
        this.fila.push(tarefa);
        console.log(`Tarefa '${tarefa.descricao}' adicionada.`);
    }

    removerTarefa(): Tarefa | undefined {
        if (this.fila.length > 0) {
            const tarefaRemovida = this.fila.shift();
            if (tarefaRemovida) {
                console.log(`Tarefa '${tarefaRemovida.descricao}' removida.`);
            }
            return tarefaRemovida;
        } else {
            console.log("Nenhuma tarefa na fila.");
        }
    }

    listarTarefas(): void {
        if (this.fila.length > 0) {
            this.fila.forEach((tarefa, index) => {
                console.log(`${index + 1}. ${tarefa.exibirInformacoes()}`);
            });
        } else {
            console.log("Nenhuma tarefa na fila.");
        }
    }

    tarefaPronta(): void {
        if (this.fila.length > 0) {
            this.fila[0].marcarConcluida();
            console.log(`Tarefa '${this.fila[0].descricao}' marcada como concluída.`);
        } else {
            console.log("Nenhuma tarefa na fila.");
        }
    }
}
