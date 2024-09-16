function criaAluno(nome) {
    return {nome: nome, notas: [], media: 0, status: ''}
}

function geraNota() {
    return +(Math.random() * 10).toFixed(2)
}

function atribuiNotasAleatorias(aluno) {
    aluno.notas.push(geraNota());
    aluno.notas.push(geraNota());
    aluno.notas.push(geraNota());
}

function calculaMedia(aluno) {
    aluno.media =+ (aluno.notas.reduce((a, c) => a + c)/aluno.notas.length).toFixed(2)
}

function verificaStatus(aluno) {
    aluno.media >= 7 ? aluno.status = 'APROVADO' : aluno.status = 'REPROVADO'
}

function fazAsCoisaAcontecer(lista) {
    for (const aluno of lista) {
        atribuiNotasAleatorias(aluno);
       calculaMedia(aluno);
       verificaStatus(aluno);
    }
}

let joao = criaAluno('João')
let lucas = criaAluno('Lucas')
let nicolas = criaAluno('Nicolas')
let nasser = criaAluno('Nasser')
let mateus = criaAluno('Mateus')
let matheus = criaAluno('Matheus')

let listaAlunos = [joao, lucas, nicolas, nasser, mateus, matheus];

fazAsCoisaAcontecer(listaAlunos);

console.log(listaAlunos)
