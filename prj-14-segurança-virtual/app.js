function Enviar() {

    var nome1 = document.getElementById('nome1').value;
    
    var nome2 = document.getElementById('nome2').value;
    

    const listaConvidadosGustavo = ['johnatas','Luis','Carlos', 'Paulo', 'Miguel']


    if(nome2 === 'Gustavo' || nome2 === 'gustavo'){
        for(var i in listaConvidadosGustavo){
            if(listaConvidadosGustavo[i] === nome1){
                alert('Você pode entrar!')
                document.querySelector('#permissao').innerText = "Você pode Entrar!";
                break
            }else{
                alert('Você não pode entrar! seu nome não está na lista');
                document.querySelector('#permissao').innerText = "Você não pode entrar! seu nome não está na lista";
            }
        }
    }


    // for(var i in listaConvidadosGustavo){
    //     if(listaConvidadosGustavo[i] == nome1){
    //         alert(listaConvidadosGustavo[i]);
    //     }
    // }
    

}


// var nome1 = 'Johnatas';
// var nome2 = 'Gustavo';

// const listaConvidadosGustavo = ['Johnatas','Luis','Carlos', 'Paulo', 'Miguel']
// if(nome2 === 'Gustavo' || nome2 === 'gustavo'){
//     for(var i in listaConvidadosGustavo){
//         if(listaConvidadosGustavo[i] === 'Johnatas' || listaConvidadosGustavo[i] === 'johnatas'){
//             console.log(listaConvidadosGustavo[i]);
//         }
//     }
// }

// console.log(listaConvidadosGustavo);