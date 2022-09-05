function Enviar() {

    var valor1 = document.getElementById("var1").value;
    var pontos = Math.floor((valor1 - 70)/5);

    if(valor1 > 70 && 12 >= pontos >= 1){
        alert(`Velocidade alta!!! Você levou ${pontos} pontos na carteira`);
    }else if(valor1 > 70 && pontos >= 12){
        alert(`Você passou numa velocidade muito alta!!! Carteira suspensa!`)
    }

}