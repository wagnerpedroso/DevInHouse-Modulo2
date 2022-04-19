
/*

    Crie uma função que receba dois parâmetros: arrayOriginal e segundoArray.
    Utilize concat para adicionar segundoArray no arrayOriginal.

    Explique a diferença entre os métodos push e concat.

*/

const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];

function concatenaArrays(original, novoArray) {

    return original.concat(novoArray)
    
}


console.log(concatenaArrays(arrOne, arrTwo))

// Push modifica o array original. 
// Concat adiciona novos itens ao final de um array sem alterá-lo