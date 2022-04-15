/*
    Crie um identificador numérico que transforme as notas do sistema para
    sistema de notas em caracteres tipo ABC
    * De 90 para cima - A
    *Entre 80 e 89 - B
    *Entre 70 e 79 - C
    *Entre 60 e 69 - D
    * menor que 60 - E
*/

function  getNota ( nota )  {

    deixe  notaA  =  nota  >=  90  &&  nota  <=  100 ;
    deixe  notaB  =  nota  >=  80  &&  nota  <=  89 ;
    deixe  notaC  =  nota  >=  70  &&  nota  <=  79 ;
    deixe  notaD  =  nota  >=  60  &&  nota  <=  69 ;
    deixe  notaE  =  nota  <  60

    let  notFinal ;

    if  ( notaA )  {
        notaFinal  =  'A'
        consola . log ( notaFinal )
    }  senão  if  ( notaB )  {
        notaFinal  =  'B'
        consola . log ( notaFinal )
    }  senão  if  ( notaC )  {
        notaFinal  =  'C'
        consola . log ( notaFinal )
    }  senão  if  ( notaD )  {
        notaFinal  =  'D'
        consola . log ( notaFinal )
    }  senão  if  ( notaE )  {
        notaFinal  =  'E'
        consola . log ( notaFinal )
    }  senão  {
        notaFinal  =  'Nota inválida.'
        consola . log ( notaFinal )
    }

}

getNota ( 80 )
getNota ( 50 )
getNota ( 90 )