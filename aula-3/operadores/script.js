// Booleanos

let a = true;
let b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

console.log(a == b);
console.log(a === b);

let idadeJoao = '5';
let idadeMaria = 5;

console.log(idadeJoao == idadeMaria);
console.log(idadeJoao === idadeMaria);


// Operadores Uniários

let numero = 10;
let negativo = -numero;
console.log(`O negativo de ${numero} é ${negativo}`);

let verdadeiro = true;
let falso = !verdadeiro;

let contador = 0;
console.log(`Contador: ${contador}`)

contador++;
console.log(`Contador: ${contador}`)

contador--;
console.log(`Contador: ${contador}`)


// Operator ternário

let idade = 18;
let podeDirigir = idade >= 18 ? 'Pode' : 'Não pode';

console.log(podeDirigir)