/*

    # Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo Array:

        * receitas: []
        * despesas: []
    
    Agora crie uma função que irá calcular o total de receitas e despesas e
    irá mostrar uma mensagem se a família está com saldo positivo ou negativo,
    segundo o valor do saldo.
    
*/

let familia = {
    receitas: [2500, 3000, 1000],
    despesas: [150, 100, 50, 1200]
}

function soma(arr){
    let total = 0;

    for(let value of arr) {
        total += value
    }

    return total;
}

function calculaBalanco() {

    const calculaReceitas = soma(familia.receitas);
    const calculaDespesas = soma(familia.despesas);

    const total = calculaReceitas - calculaDespesas
    
    const saldoPositivo = total >= 0;

    let mensagem = "negativo"

    if (saldoPositivo) {
        mensagem = 'positivo'
    }

    console.log(`Seu saldo é: ${mensagem}: ${total.toFixed(2)} R$`)
    
}

calculaBalanco();