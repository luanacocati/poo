class Veiculo {
    constructor(marca, modelo, ano) {
        obs(parametro)
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}
class Carro extends Veiculo {
    constructor(marca, modelo, ano, potencia) {
        super(marca, modelo, ano);
        this.potencia = potencia;
    }
}
class Moto extends Veiculo {
    constructor(modelo, ano, potencia) {
        super(marca, modelo, ano);
        this.potencia = potencia;
    }
}

let opcao = prompt ("garagem da Cocati\n1.moto\n2.carro");
switch(opcao){
    case '1':
        let marca =prompt("marca");
        let modelo =prompt ("modelo");
        let ano = prompt("ano");
        let potencia=prompt ("potencia");
        const moto1 = new Moto(marca,modelo,ano,potencia);
        alert(`${moto1.marca}\n ${moto1.modelo}\n ${moto1.ano}\n ${moto1.potencia}`);break;
    case '2':
        let marca=prompt("marca");
        let modelo=prompt ("modelo");
        let ano=prompt("ano");
        let potencia=prompt ("potencia");
        const carro1 = new Carro(marca,modelo,ano,potencia);
        alert(`${carro1.marca}\n${carro1.modelo}\n${carro1.ano}\n${carro1.potencia}`);break;
    
    default:alert("opcao invalida");
}