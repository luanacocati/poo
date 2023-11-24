lass veiculo{
    constructor (marca,modelo,ano){
    this.marca=marca;
    this.modelo=modelo;
    this.ano=ano;
    }
}
let marca = prompt("Marca");
let modelo = prompt("Modelo");
let ano = prompt("Ano")

const veiculo1= new veiculo(marca,modelo,ano);
alert (veiculo1.marca + "\n" + veiculo1.modelo + "\n" + veiculo1.ano);

