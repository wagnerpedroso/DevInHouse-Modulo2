class Aluno{
    constructor(nome, idade, turma, sexo) {
        this.nome = nome
        this.idade = idade
        this.turma = turma
        this.sexo = sexo
    }

}

const wagner = new Aluno('Wagner Pedroso', 26, 'NDTV', 'Masculino');
console.log(Aluno.wagner);