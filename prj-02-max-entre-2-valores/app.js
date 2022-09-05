function Enviar() {

    var valor1 = document.getElementById("var1").value;
    var valor2 = document.getElementById("var2").value;
    // var nota3 = document.getElementById("emailid").value;

    // var media = (parseInt(valor1) + parseInt(valor2)) / 2;
    if(valor1 > valor2 ) {
        alert(`O maior valor entre ${valor1} e ${valor2} é o valor ${valor1}`);
    }else {
        alert(`O maior valor entre ${valor1} e ${valor2} é o valor ${valor2}`);

    }

}