class Estudante{
    constructor (nome,matricula){
    this.nome=nome;
    this.matricula=matricula;
    }
}
let nome = prompt("Nome");
let matricula = prompt("Matricula");

const aluno1= new Estudante(nome,matricula);
alert (aluno1.nome + "\n" + aluno1.matricula );

