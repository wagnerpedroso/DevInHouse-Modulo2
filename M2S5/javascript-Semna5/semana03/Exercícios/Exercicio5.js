/* 

    # Identifique se o valor é um booleano primitivo:

    Escreva uma função que recebe um valor por parâmetro
    e verifica se o valor é classificado como booleano primitivo. Retorna true ou false.
    Os booleanos primitivos são true e false.
    
*/

function booWho(bool) {

    if(bool === true || bool === false){
        console.log(bool)
        return true
    } else {
        console.log('Não é um valor booleano')
        return false;
    }
    
  }
  
  booWho(null);