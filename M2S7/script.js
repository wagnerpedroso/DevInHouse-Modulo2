const aluno = {
    nome:'Wagner Pedroso',
    turma:'Senior',
    imprimeDados:function () {
    console.log(`Meu nome é ${this.nome} e estou na turma ${this.turma}`);
    },

}





function criaAluno (nome, idade, turma) {
    return{        
        exibeAluno: function() {
            const aluno = document.createElement('span');
            aluno.innerText = `Meu nome é ${nome}, ninha idade é ${idade} turma ${turma}`

            const pai = document.querySelector('body');
            pai.appendChild(aluno);
        }
}
}

const aluno1 = criaAluno('Wagner Pedroso', 28, '101A');
aluno1.exibeAluno();
const aluno2 = criaAluno('Jessica Milwerstet', 29, '1A');
aluno1.exibeAluno();
const aluno3 = criaAluno('Wagner teste1', 58, '10A');
aluno1.exibeAluno();





function criaProfessor (nome, idade, turma) {
    return{        
        exibeProfessor: function() {
            const professor = document.createElement('span');
            professor.innerText = `Meu nome é ${nome}, ninha idade é ${idade} turma ${turma}`

            const pai = document.querySelector('body');
            pai.appendChild(professor);
        }
}
}

const professor1 = criaAluno('Wagner Pedroso', 28, '101A');
aluno1.exibeProfessor();
const professor2 = criaAluno('Jessica Milwerstet', 29, '1A');
aluno1.exibeProfessor();
const professor3 = criaAluno('Wagner teste1', 58, '10A');
aluno1.exibeProfessor();
