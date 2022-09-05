function Enviar() {

    var val = document.getElementById("var").value;
    var valor = parseInt(val);

    var cont = 1;
    var asterisco = '';

    while(cont <= valor){            
        asterisco += '*';
        alert(asterisco);
        cont++;
    }

}

// var valor = 10;

// var cont = 0;
// var asterisco = '*';

// while(cont <= valor){  
//     console.log(asterisco);  
//     asterisco += '*';
//     cont++;
// }

