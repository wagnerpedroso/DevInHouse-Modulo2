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

const resultadorfinal = jogadores.reduce(function(resultado,jogador){
    const posicaoExiste = resultado.find(itemresultado => itemresultado.posicao)
    if (posicaoExiste){
       posicaoExiste.jogadores.push(jogador.nome);
        } else {
            resultado.push({
                posicao: jogador.posicao,
                jogador:[jogador.nome],
                });
        }
        return resultadorfinal;
})

console.log(resultadorfinal);
