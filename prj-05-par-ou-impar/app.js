function Enviar() {

    var valor = document.getElementById("var1").value;
    var cont = 0;

    while(cont <= valor){
        if(cont % 2 == 0){
            alert(`${cont} é um numero PAR!`)
        }else{
            alert(`${cont} é um numero IMPAR`)
        }
        cont++;
    }
    


}