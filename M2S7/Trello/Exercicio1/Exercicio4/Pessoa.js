class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    dadosDaPessoa() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade} `);
    }
}


class Professor extends Pessoa{


    constructor(nome, idade, disciplina) {
       super(nome, idade);
       this.disciplina;
    }
}

class Aluno extends Pessoa{
    constructor(nome, idade, turma) {
        super(nome, idade);
        this.turma = turma
    }

}

const wagner = new Aluno('Wagner Pedroso', 26, 'NDTV', 'Senior');
console.log(wagner.dadosDaPessoa());

const jessica = new Aluno('Jessica Milwerstet', 29, 'Ciee');
console.log(jessica.dadosDaPessoa());

const pedro = new Aluno('Pedro teste1', 20, 'Exp');
console.log(pedro.dadosDaPessoa());
