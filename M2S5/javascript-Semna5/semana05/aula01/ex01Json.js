// JSON

// Criando um objeto
let a = {
    nome: 'Maycon',
    sobrenome: 'Mendes',
    idade: 32
}

console.log(a)
console.log(typeof a)

/*

    JSON é a representação de um objeto.
    JavaScript Object Notation

*/ 

// Object to String
let b = JSON.stringify(a)

console.log(b)
console.log(typeof b)


// Criando uma string
let a2 = '{"nome": "Yuri", "sobrenome": "Souza", "idade": 26}'

console.log(a2)
console.log(typeof a2)


// String to Object
let b2 = JSON.parse(a2);

console.log(b2);
console.log(typeof b2)

// Em objetos JSON não conseguimos acessar as propriedades
// Como fazemos diretamente nos objetos javascript, porque se tornam strings.