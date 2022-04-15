/*
    = Buscando e contando dados em Arrays =
    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios:
    * Contar o número de categorias e o número de livros em cada categoria.
    * Contar o número de autores.
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver
    os livros desse autor.
*/

const  categoriaDeLivros  =  [
    {
        categoria : "Riqueza" ,
        livros : [
            {
                título : "Os segredos da mente milionária" ,
                autor : "T. Harv Eker" ,
            } ,
            {
                titulo : "O homem mais rico da babilônia" ,
                autor : "George S. Clason" ,
            } ,
            {
                Título : "Pai rico, pai pobre" ,
                autor : "Robert T. Kiyosaki e Sharon L. Lechter" ,
            } ,
        ] ,
    } ,
    {
        categoria : "Inteligência Emocional" ,
        livros : [
            {
                título : "Você é insubstituível" ,
                autor : "Augusto Cury" ,
            } ,
            {
                titulo : "Ansiedade - Como enfrentar o mal do século" ,
                autor : "Augusto Cury" ,
            } ,
            {
                titulo : "Os 7 hábitos das pessoas altamente eficazes "
                autor : "Stephen R. Covey" ,
            } ,
        ] ,
    } ,
] ;

// Conta o número de categorias:
const  totalCategorias  =  categoriaDeLivros . comprimento
consola . log ( 'Total de categorias: '  ,  totalCategorias ) ;

// Conta o número de livros em cada categoria:
for ( deixe  item  de  categoriaDeLivros ) {
    consola . log ( 'Total de livros da categoria: '  ,  item . categoria ) ;
    consola . log ( item.livros.comprimento ) ; _ _ _ _
}

// Conta o número de autores:
função  contaAutores ( )  {
    let  autores  =  [ ] ;

    for ( deixe  categorias  de  categoriaDeLivros ) {
        for ( deixe  livros  de  categorias . livros ) {
            if ( autores.indexOf ( livros.autor ) == - 1 ) { _ _ _ _  
                autores . push ( livros . autor )
            }
        }
    }

    consola . log ( "Total de autores: "  ,  autores . comprimento ) ;
}


// Mostra livros do autor Augusto Cury
function  mostraLivrosDoAugusto ( )  {
    deixe  livros  =  [ ] ;

    for ( deixe  categorias  de  categoriaDeLivros ) {
        for ( deixe  livro  de  categorias . livros ) {
            if  ( livro . autor  ===  'Augusto Cury' )  {
                livros . push ( livro . titulo ) ;
            }
        }
    }

    consola . log ( "Livros do autor: "  ,  livros ) ;
}

// Transforma a função numa função dinâmica que recebe o nome do autor e procura pelo parâmetro.
function  mostraLivrosDoAutor ( autor )  {
    deixe  livros  =  [ ] ;

    for ( deixe  categorias  de  categoriaDeLivros ) {
        for ( deixe  livro  de  categorias . livros ) {
            if  ( livro . autor  ===  autor )  {
                livros . push ( livro . titulo ) ;
            }
        }
    }

    consola . log ( "Livros do autor: "  ,  livros ) ;
}



contaAutores ( )
mostraLivrosDoAugusto ( )
mostraLivrosDoAutor ( 'T. Harv Eker' ) ;