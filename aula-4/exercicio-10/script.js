function addTarefa(event) {
    const descTarefa = document.getElementById('addTarefaField');
    const listaTarefas = document.getElementById("lista-tarefas");

    if(descTarefa.value.trim().length > 0) {
        const novaTarefa = document.createElement('li');
        novaTarefa.classList.add('tarefa')
        novaTarefa.innerHTML =
        // todo: trocar para duas divs para centralizar
            `<p>${descTarefa.value}</p>
            <button>Concluir</button>
            <button>Deletar</button>`;
        listaTarefas.appendChild(novaTarefa);

    } else {
        console.error("ERRO: Tarefa vazia! Escreva algo no campo para criar uma tarefa")
        alert("ERRO: Tarefa vazia! Escreva algo no campo para criar uma tarefa")
    }

    if(listaTarefas.contains(document.getElementById('noTarefaText'))) {
        const textoTemp = document.getElementById('noTarefaText')
        listaTarefas.removeChild(textoTemp);
    }

    event.preventDefault();
}