function Aluno(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;

    
}
this.imprimeAluno = function() {
    console.log(`Nome: ${this.nome}, Idade:${this.idade},Sexo:${this.idade}`)
}

const alunos = new Aluno('Wagner Pedroso', 26, 'M');
alunos.alunosToString();
console.log(Aluno);

