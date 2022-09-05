function Enviar() {

    var valor = document.getElementById("var").value;
    // var nota2 = document.getElementById("foneid").value;
    // var nota3 = document.getElementById("emailid").value;

    var soma = 0;


    for(var i = 0; i <= valor; i++){
        if(i % 3 == 0 || i % 5 == 0){
            soma+=i
            
        }        
    }
    alert(`A soma dos multiplos de 3 e 5 é ${soma}`)

}

// var valor = 10;

// var soma = 0;


// for(var i = 0; i <= valor; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//         soma+=i        
//     }
    
    
// }
// console.log(soma);