function Enviar() {


    var titulo = document.getElementById("titulo").value;
    var ano = document.getElementById("ano").value;
    var diretor = document.getElementById("diretor").value;
    var personagem = document.getElementById("personagem").value;

    
    // var titulo = 'johnatas';
    // var ano = 2018;
    // var diretor = 'johnatas';
    // var personagem = 'johnatas';

    let valores = [titulo, ano, diretor, personagem];

    var cont = 0;
    while(cont <= valores.length){
        if(typeof valores[cont] === 'string'){
            alert(typeof valores[cont]);
        }   
        cont++;
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


