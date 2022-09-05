function Enviar() {


    var titulo = document.getElementById("titulo").value;
    var ano = document.getElementById("ano").value;
    var diretor = document.getElementById("diretor").value;
    var personagem = document.getElementById("personagem").value;

    
    // var titulo = 'johnatas';
    var ano1 = parseInt(ano);
    // var diretor = 'johnatas';
    // var personagem = 'johnatas';

    const valores = {
        'Titulo': titulo, 
        'Ano': ano1, 
        'Diretor': diretor, 
        'Personagem': personagem
    };

    for(var indice in valores){
        if( typeof valores[indice] === 'string'){
            alert(`${indice}: ${valores[indice]}`);
        }
        
    }
    

}

// var titulo = 'johnatas';
// var ano = 2018;
// var diretor = 'johnatas';
// var personagem = 'johnatas';

// let valores = [titulo, ano, diretor, personagem];

// var cont = 0;
// while(cont <= valores.length){
//     if(typeof valores[cont] == 'string'){
//         console.log(valores[cont]);
//     }   
//     cont++;
// }


