let exobj = {
    nome: 'Wagner',
    sobrenome:'Pedroso',
    idade: 26
}

console.log(exobj);
console.log(typeof exobj);

let b = JSON.stringify(exobj);
console.log(exobj);
console.log(typeof exobj);

// CRIANDO STRING

let a2 = '{"nome": "Wagner", "Sobrenome": "Pedroso", "Idade": 26}'
console.log(typeof a2)
console.log(a2.nome)

let b2 = JSON.parse(a2);
console.log(typeof a2);
console.log(a2.nome);

console.log(b2.nome);