class Onibus extends Veiculo{
    assentos;

    constructor(placa, ano, assentos){
        this.placa = placa;
        this.ano = ano;
        this.assentos = assentos;
    }

    setAssentos(novoAssentos){
        this.assentos = novoAssentos;
    }

    exibirDados(){
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
        console.log("Assentos: ", this.assentos);
    }
}

let onibus = new Onibus();
onibus.setPlaca('GADR23');
onibus.setAno(2011);
onibus.setAssentos(40);
onibus.exibirDados();