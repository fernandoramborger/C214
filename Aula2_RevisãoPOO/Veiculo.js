class Veiculo {
    placa;
    ano;

    setPlaca(novaPlaca){
        this.placa = novaPlaca;
    }

    setAno(novoAno){
        this.ano = novoAno;
    }

    exibirDados(){
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
    }
}

let veiculo = new Veiculo();


veiculo.exibirDados();