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