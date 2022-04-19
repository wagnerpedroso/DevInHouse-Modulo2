/*

    PARÂMETRO REST

*/

let meuArray = [1,2,3,4,5,6];

function soma(a,b){
    
    return a + b;

}

console.log(soma(1,2,3,4,5,6))


/*

    Como fazer uma função que consiga somar todos os parâmetros ? 

*/ 

function somarTodos(...meuArray) {
    
    let soma = 0;

    for(let numero of meuArray){
        soma += numero;
    }

    return soma;
}

console.log(somarTodos(1)); // 1
console.log(somarTodos(1,2)); // 3
console.log(somarTodos(1,2,3)); // 6
console.log(somarTodos(...meuArray)); // 21


function showName(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);

    // É iterável
    for(let arg of arguments) {
        console.log(arg)
    }

    // Porém, arguments não possuem propriedades de Array: Como 'forEach', por exemplo.
    // meuArray.forEach((item) => console.log(item))
}

showName('Julio', 'Mauricio', 'Helena')