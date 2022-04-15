/*
    # Sistema de gastos familiares
    Crie um objeto que possui 2 propriedades, ambas do tipo Array:
        * receitas: []
        * despesas: []
    
    Agora crie uma função que irá calcular o total de receitas e despesas e
    irá mostrar uma mensagem se a família está com saldo positivo ou negativo,
    segundo o valor do saldo.
    
*/

deixe  familia  =  {
    receitas : [ 2500 ,  3000 ,  1000 ] ,
    despesas : [ 150 ,  100 ,  50 ,  1200 ]
}

função  soma ( arr ) {
    deixe  total  =  0 ;

    for ( deixe o  valor  de  arr )  {
        total  +=  valor
    }

    retorno  total ;
}

função  calculaBalanco ( )  {

    const  calculaReceitas  =  soma ( família . receitas ) ;
    const  calculaDespesas  =  soma ( familia despesas ) ; _

    const  total  =  calcularReceitas  -  calcularDespesas
    
    const  saldoPositivo  =  total  >=  0 ;

    deixe  mensagem  =  "negativo"

    if  ( saldoPositivo )  {
        mensagem  =  'positivo'
    }

    consola . log ( `Seu saldo é: ${ mensagem } : ${ total . toFixed ( 2 ) } R$` )
    
}

calculaBalanco ( ) ;