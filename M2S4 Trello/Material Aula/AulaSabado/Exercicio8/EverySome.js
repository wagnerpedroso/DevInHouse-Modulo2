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

//Gols dos volantes
const volantes = jogadores
.filter(jogador => jogador.posicao === 'volante')
.every(volante => volante.gols >= 1);

const atacante = jogadores
.filter(jogador => jogador.posicao === 'volante')
.some(atacante => atacante.gols > 7);

console.log(volantes);
console.log(atacante);