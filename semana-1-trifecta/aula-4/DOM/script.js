function enviarForm(event) {
    console.log(document);

    const inputNome = document.getElementById('nome');
    console.log(inputNome.value);

    const inputIdade = document.getElementById('idade');
    console.log(inputIdade.value);

    const inputs = document.getElementsByTagName('input');
    console.log(inputs);

    const labelByClass = document.getElementsByClassName('titulo-div')[0];
    console.log(labelByClass);
    
    const div = document.querySelector('div');
    console.log(div)
    
    event.preventDefault();
    
    const labelByClassNome = document.getElementsByClassName('titulo-div')[0];
    labelByClassNome.textContent = `Olá, ${inputNome.value}!`
    
    const labelByClassIdade = document.getElementsByClassName('titulo-div')[1];
    labelByClassIdade.textContent = `Você tem ${inputIdade.value} anos!`
}

function keyLogger(event) {
    const descricaoNome = document.getElementById('descricaoNome');
    descricaoNome.textContent = event.key;
    descricaoNome.style.backgroundColor = 'pink';
}