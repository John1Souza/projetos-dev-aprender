function Enviar() {

    var valor = document.getElementById("var1").value;

    if(valor % 3 === 0 && valor % 5 != 0){
        alert(`Você digitou o valor ${valor}, este é divisivel por 3`);
    }else if(valor % 5 === 0 && valor % 3 != 0){
        alert(`Você digitou o valor ${valor}, este é divisivel por 5`);
    }else if(valor % 5 === 0 && valor % 3 == 0){
        alert(`Você digitou o valor ${valor}, este é divisivel por 5 e por 3`);
    }



    // var nota2 = document.getElementById("foneid").value;
    // var nota3 = document.getElementById("emailid").value;

    // var total = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    // if(total >  5 ) {
    //     alert('Passoy com media: ' + Math.floor(total) + ' Parabens');
    // }else {
    //     alert('Voce é burro: ' + total + ' Estude mais');

    // }

}