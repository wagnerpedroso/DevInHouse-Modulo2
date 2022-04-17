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

const toaldeG = jogadores.reduce((toaldeG, jogadores) => toaldeG += jogador.gols, 0);
console.log(toaldeG);

