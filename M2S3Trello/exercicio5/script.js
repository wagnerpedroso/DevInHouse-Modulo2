/*
Identifique se o valor é um booleano primitivo:
Escreva uma função que recebe um valor por parâmetro e verifique se o valor é classificado como booleano primitivo. Retorne true ou false.
Os booleanos primitivos são true e false.
*/

// Funções
function isBoolean (valor) {

    if (valor == true || valor == false) {
        console.log("É booleano");
    } else {
        console.log("Não é booleano");
    }
}

isBoolean('false');