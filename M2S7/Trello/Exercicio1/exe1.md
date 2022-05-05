Características da linguagem Javascript:
R:  Características da Linguagem

O código fonte javascript é incluído no próprio arquivo HTML.

Para isso existe uma tag do HTML que permite identificar e separar o que é script do que é marcação HTML. Esta tag chama-se <script>. Existem ainda algumas outras situações em que é permitido incluir comandos de script no HTML. 

É uma linguagem interpretada (também chamada de linguagem de script).

Isso significa que os comandos javascript são executados um a um diretamente por um interpretador, sem que haja necessidade de compilação como nas linguagens de programação convencionais. No caso do javascript, quem faz o papel do interpretador é o navegador do usuário que, ao receber um arquivo html, executa o script na medida em que encontra os comandos javascript dentro do código HTML.

Javascript é uma linguagem baseada em objetos.

O projeto de programas orientados a objetos tenta tratar um programa como um conjunto de partes individuais (objetos) que executam tarefas distintas, e não como uma seqüência de comandos que executam uma tarefa específica. Objetos similares são agrupados em classes. Numa linguagem orientada a objetos você precisa construir (instanciar) todos os objetos que você for utilizar no seu programa. A linguagem javascript é dita “baseada em objetos” porque ela já possui um conjunto de objetos embutidos. Por exemplo, não é necessário construir um objeto para manusear datas e horas pois em javascript já existe um pronto para ser usado.

Em termos de sintaxe, a linguagem javascript herdou suas principais construções e comandos da linguagem Java que por sua vez os havia herdado das linguagens C e C++. Devido ao escopo de aplicação limitado de javascript vários recursos existentes nestas outras linguagens foram deliberadamente omitidos.

Programação dirigida por eventos

Esta é uma característica muito importante de javascript. Sempre que alguma coisa que tenha um significado importante acontece ocorre um evento. O clique num botão, o arrastar do mouse, o preenchimento de um campo de um formulário ou o envio do mesmo, são exemplos de eventos provocados pela interação do usuário com a página. Javascript permite que criemos trechos de programa (geralmente implementados na forma de funções) que respondem de acordo com a ocorrência destes eventos. A consequência disso é que a página dexa de ser um documento estático e parece ganhar inteligência, reagindo de acordo com as ações do usuário.

Javascript é independente de plataforma

Numa linguagem de programação convencional, você compila o seu programa gerando um arquivo executável que, se distribuído, só poderá ser executado num ambiente operacional de hardware e software específicos. Como os comandos javascript são interpretados pelo navegador do usuário, não existe este problema. Uma mesma página Web com código javascript poderá ser interpretada pelo Netscape, independentemente do usuário estar utilizando um PC com Windows ou uma máquina RISC com UNIX. Os problemas de compatibilidade que existem são outros e normalmente dizem respeito ao navegador utilizado e suas versões. No decorrer do curso veremos algumas situações em que isso acontece e quais as suas conseqüências.

R2: Arrays: 

Seria uma estrutura que permite o armazenamento de outras variáveis, que podem ser do tipo primário, um array de objetos JavaScript ou, até mesmo, JavaScript array functions, ou seja, é possível armazenar funções em um elemento do array.

Isso significa que os itens podem ser de tipos diferentes, ou seja, podemos ter em um array um elemento string, outro elemento inteiro e outro do tipo objeto. Para acessar cada item nessa estrutura temos um índice numérico.

R3: Functions e Arrow Functions

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

Dois fatores influenciaram a introdução das arrow functions: funções mais curtas e a inexistência da palavra chave this.

Sem this separado:
Antes das arrow functions, toda nova função definia seu próprio valor de this (baseado em como a função era chamada, um novo objeto no caso de um construtor, undefined em chamadas de funções com modo estrito (strict mode), o objeto base se a função é chamada como um "método de objeto", etc.). Este comportamento é importuno com um estilo de programação orientado a objeto.

R4: Manipulação da DOM - Seletores e Eventos:

O DOM (Document Object Model) é uma interface que representa como os documentos HTML e XML são lidos pelo seu browser. Após o browser ler seu documento HTML, ele cria um objeto que faz uma representação estruturada do seu documento e define meios de como essa estrutura pode ser acessada.

Quais as vantagens do DOM?
Com ele você tem infinitas possibilidades, você pode criar aplicações que atualizam os dados da página sem que seja necessário uma atualização. Pode também criar aplicações que são customizáveis pelo usuário, mudar o layout da página sem que seja necessário atualização. Arrastar, mover, excluir elementos. Ou seja, você tem infinitas possibilidades, milhares de coisas que você pode fazer manipulando o DOM, basta você usar sua criatividade.

querySelector()
Retorna o primeiro elemento que se equipara ao seletor CSS passado. Lembrando que o seletor deve seguir a sintaxe CSS. Caso não tenha nenhum seletor, ele retornará _null. _

Events
Os elementos DOM além de possuirem métodos também possuem eventos. São eles que fazem a interatividades dos elementos no documento, mas não se engane: eventos também são métodos.

Conclusão
O DOM nos proporciona várias API’s importantes para a criação de aplicações fantásticas e cada vez mais inovadoras, entendendo o básico dele você já consegue fazer coisas incríveis.

Fontes:
http://www.nce.ufrj.br/ginape/js/conteudo/introducao/caracteristicas.htm#:~:text=O%20c%C3%B3digo%20fonte%20javascript%20%C3%A9,chama%2Dse%20.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array