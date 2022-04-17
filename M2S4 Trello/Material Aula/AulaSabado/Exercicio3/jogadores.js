const jogadores = [
    {
        nome: 'Taffarel',
        posicao: 'Goleiro',
        gols: 0,
    },
    {
        nome: 'Jorginho',
        posicao: 'Lateral Direito',
        gols: 2,
    },
    {
        nome: 'Ricardo Rocha',
        posicao: 'Zagueiro',
        gols: 5,
    },
    {
        nome: 'Mauro Silva',
        posicao: 'Volante',
        gols: 8,
    },
    {
        nome: 'Bebeto',
        posicao: 'Atacante',
        gols: 10,
    },
    {
        nome: 'Romário',
        posicao: 'Atacante',
        gols: 6,
    },
    {
        nome: 'Dunga',
        posicao: 'Volante',
        gols: 3,
    },
];

//pegar posiçao
const posicao = jogadores.map(function(jogador) {
    return jogador.posicao;
});

//como deixar posição unicas no array
const posicoesUnicas = [];

posicoes.forEach(function (posicao) {
    if(!posicoesUnicas.includes(posicao)){
        posicoesUnicas.push(posicao);
    }   
});

    console.log(posicoesUnicas);

    //cria um arry com nome dos jogadores de cada posção
    const resultado = [];

posicoesUnicas.forEach(function (posicao) {
    //filtro jogadores, aqueles jogar
    const jogadoresPorPosicao = jogadores.filter(jogador => jogador.posicao === posicao);
   
    console.log('minha posição:', posicao, 'os jofadores: ', jogadoresPorPosicao)
    console.log('----------');

    //cia o item com a posição e os jogadores
    const itemDoResultado = {
        posicao: posicao,
        jogadores: jogadoresPorPosicao.map(jogporposiçao => jogporposiçao.nome),
    };
  
        resultado.push(itemDoResultado);    
    });

        console.log(resultado);



//posicoesUnicas.forEach


//console.log(posicoesUnicas);

//console.log(posicoes);