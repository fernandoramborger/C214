class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano, eixos){
        this.placa = placa;
        this.ano = ano;
        this.eixos = eixos;
    }

    setEixos(novoEixos){
        this.eixos = novoEixos;
    }

    exibirDados(){
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
        console.log("Eixos: ", this.eixos);
    }
}

let caminhao = new Caminhao();
caminhao.setPlaca('SHAD23');
caminhao.setAno(2010);
caminhao.setEixos(10);
caminhao.exibirDados();