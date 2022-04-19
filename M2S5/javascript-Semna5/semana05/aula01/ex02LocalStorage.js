
// LocalStorage

// Armazena informações:
localStorage.setItem('age', '12');
localStorage.setItem('color', 'blue');  

/*

    No LocalStorage só conseguiremos armazenar strings. 

*/

//Diferença entre 
console.log(localStorage.getItem('age'))
console.log(12)


// Acessa informações e as armazena em variáveis:
let age = localStorage.getItem('age');
let color = localStorage.getItem('color');

// Número de itens armazenados:
let itens = localStorage.length;
console.log(itens);


// Armazena informações em notação de objeto;
localStorage.nome = 'Maycon';
localStorage.sobrenome = 'Mendes';

// Acessa informções em notação de objetos:
let nome = localStorage.nome;
console.log(nome);

let sobrenome = localStorage.sobrenome;
console.log(sobrenome)