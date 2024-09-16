function addTarefa(event) {
    const descTarefa = document.getElementById('addTarefaField');
    const listaTarefas = document.getElementById("lista-tarefas");

    if(descTarefa.value.trim().length > 0) {
        const novaTarefa = document.createElement('li');
        novaTarefa.classList.add('tarefa')
        novaTarefa.innerHTML =
            `
            <div class="tarefa-buttons">
            <button onclick="concluirTarefa(event)">Concluir</button>
            <button onclick="deletarTarefa(event)">Deletar</button>
            </div>
            <div class="tarefa-desc">
            <p>${descTarefa.value}</p>
            </div>
            `;
        listaTarefas.appendChild(novaTarefa);

    } else {
        console.error("ERRO: Tarefa vazia! Escreva algo no campo para criar uma tarefa")
        alert("ERRO: Tarefa vazia! Escreva algo no campo para criar uma tarefa")
    }

    if(listaTarefas.contains(document.getElementById('noTarefaText'))) {
        const textoTemp = document.getElementById('noTarefaText')
        listaTarefas.removeChild(textoTemp);
    }
    atualizaContador();
    event.preventDefault();
}

function concluirTarefa(event) {
    const tarefa = event.target.parentNode.parentNode;
    tarefa.classList.add("tarefa-completa");
    atualizaContador();
}

function deletaTarefasConcluidas(event) {

    const listaTarefas = document.getElementById('lista-tarefas');
    const tarefasCompletas = Array.from(document.getElementsByClassName('tarefa-completa'));

    tarefasCompletas.forEach(tarefa => 
        listaTarefas.removeChild(tarefa)
    );

    atualizaContador();
    event.preventDefault();
}

function deletarTarefa(event) {
    const tarefa = event.target.parentNode.parentNode;
    tarefa.parentNode.removeChild(tarefa);
    atualizaContador();
}

function atualizaContador() {
    let totalTarefas = Array.from(document.getElementById('lista-tarefas').children).length;
    const contadorPendentes = document.getElementById('qtdPendentes');
    const contadorConcluidas = document.getElementById('qtdConcluidas');
    const qtdCompletas = document.getElementsByClassName('tarefa-completa').length;

    contadorConcluidas.textContent = qtdCompletas;
    contadorPendentes.textContent = totalTarefas - qtdCompletas;

    

}