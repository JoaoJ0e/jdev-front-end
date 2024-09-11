// Exercício 6

function soma(n1, n2) {
    return n1 + n2;
}

function divide(n1, n2) {
    return +(n1 / n2).toFixed(2);
}

let a = 40;
let b = 5;
let c = 2;

let resultadoSoma = soma(a, b);
let resultadoDivisao = divide(resultadoSoma, c);

console.log(resultadoDivisao);

// Exercício 7

function concatena(txt1, txt2) {
    return `${txt1} de ${txt2}`;
}

function pegaDoisPrimeirosChars(string) {
    return string.charAt(0) + string.charAt(1);
}

const nome1 = 'Aula';
const nome2 = 'Frontend';

const resultadoConcatenacao = concatena(nome1, nome2);

console.log(resultadoConcatenacao);

const primeirosDoisChars = pegaDoisPrimeirosChars(nome1);

console.log(primeirosDoisChars);

