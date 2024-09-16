const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Pedro',
    idade: '22',
    nomeSobrenome: function () {
        return this.nome + this.sobrenome;
    }
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.nomeSobrenome());

const carro = new Object();


carro.marca = 'ABC-1234'
carro.placa = 'peugeto'

console.log(carro);