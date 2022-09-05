function Enviar() {

    var nota1 = document.getElementById("nomeid").value;
    var nota2 = document.getElementById("foneid").value;
    // var nota3 = document.getElementById("emailid").value;

    var total = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    if(total >  5 ) {
        alert('Passoy com media: ' + Math.floor(total) + ' Parabens');
    }else {
        alert('Voce é burro: ' + total + ' Estude mais');

    }

}

// Primeira opção
let faixas = [
    {tooltip: 'até R$ 700', minimo: 0, maximo: 700},
    {tooltip: 'de R$ 700 até R$ 1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$ 1000 ou mais', minimo: 1000, maximo: 999999},
]

// Segunda opção (factory function)

function criaFaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo, 
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000),
]

//  Terceira opção (Constructor Function)

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 =[
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('e', 20, 30),
    new FaixaPreco('f', 30, 40),
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);


