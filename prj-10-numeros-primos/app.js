function Enviar() {

    var primo = document.getElementById("primo").value;

    var valor = 0;


    if(primo < 0){
        alert('Valor incorreto detectado');
    }else{
        for(var cont = 1; cont <= primo; cont++){
            if(primo % cont == 0){
                valor++;
            }     
        }
        if(valor === 2){
            alert(`${primo} é um número primo`);
        }else{
            alert(`${primo} não é um número primo`);
        }
    }
    

}

// var primo = 11;
// var valor = 0;


// if(primo < 0){
//     alert('Valor incorreto detectado')
// }else{
//     for(var cont = 1; cont <= primo; cont++){
//         if(primo % cont == 0){
//             valor++;
//         }
        
    
//     }
//     if(valor === 2){
//         alert(`${primo} é um número primo`);
//     }else{
//         alert(`${primo} não é um número primo`);
//     }
// }