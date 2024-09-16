// Métodos Arrays
const arrayGeral = new Array(1, 2, 3, 4, 5);

let dois = arrayGeral.find(item => item == 2);

//console.log(dois)

let indexNUmeroCinco = arrayGeral.findIndex(item => item == 5)
//console.log(indexNUmeroCinco);


// Referência de Memória com IndexOf

const obj = {id: 2};
let array = [{id: 1}, {id: 3}]

array.push(obj);

//console.log(array.findIndex(item => item.id == 2));
//console.log(array.indexOf(obj));

//const some3 = arrayGeral.some(item => item == 3);
//console.log(some3);

//const every3 = arrayGeral.every(item => item == 3);
//console.log(every3);

//const includes4 = arrayGeral.includes(4);
//console.log(includes4);

//const includes7 = arrayGeral.includes(7);
//console.log(includes7);

// LOOPS

// ForEach (método)
// array.forEach(item => console.log(item))

// for of (for each normal do java)
// for (const item of array) {
//     console.log(item);
// }

// for normal (com index)
// for (const index in array) {
//     console.log(index);
// }

// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i);
// }