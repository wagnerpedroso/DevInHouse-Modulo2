/*

    SPREAD OPERATOR

*/ 

let pessoas = {
    nome: 'Maycon',
    idade: 32
}

let contato = {
    telefone: '9898989',
    email: 'mayconsouzamendes@gmail.com'
}


/*

    Atribuindo pessoas à cópia e alterando a propriedade idade,
    Altera a propriedade em pessoas, também.

*/ 

const copia = pessoas
copia.idade = 88
console.log(copia)
console.log(pessoas)

/*

    Podemos replicar o objeto 'pessoas' para a const 'copia', utilizando o spread.

*/

const copia = {...pessoas};
copia.idade = 88;
console.log(copia);
console.log(pessoas);


// Com o spread podemos juntar dois objetos num só:
const contato1 = { ... pessoas, ...contato};
console.log(contato1);
