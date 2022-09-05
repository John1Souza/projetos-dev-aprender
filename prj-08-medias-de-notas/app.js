function Enviar() {

    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;

    var notas = [parseInt(nota1), parseInt(nota2), parseInt(nota3)];

    var cont = 0;
    var soma = 0;

    while(cont <= notas.length){
        if(typeof notas[cont] === 'number'){
            soma += notas[cont];
        }
        cont++;
    }
    var media = soma/(notas.length);

    if (media >= 0 && media <= 59){
        alert(`Média final: ${Math.floor(media)} isso é um F, Parabéns!`);
    }else if(media >= 60 && media <= 69){
        alert(`Média final: ${Math.floor(media)} isso é um D, Parabéns!`);
    }else if(media >= 70 && media <= 79){
        alert(`Média final: ${Math.floor(media)} isso é um C, Parabéns!`);
    }
    else if(media >= 80 && media <= 89){
        alert(`Média final: ${Math.floor(media)} isso é um B, Parabéns!`);
    }
    else if(media >= 90 && media <= 100){
        alert(`Média final: ${Math.floor(media)} isso é um A, Parabéns!`);
    }


    // alert(Math.floor(media));

}


// document.getElementById("nota1").value;
// document.getElementById("nota2").value;
// document.getElementById("nota3").value;

// var nota1 = 70;
// var nota2 = 70;
// var nota3 = 80;

// var notas = [parseInt(nota1), parseInt(nota2), parseInt(nota3)];

// var cont = 0;
// var soma = 0;

// while(cont <= notas.length){
//     if(typeof notas[cont] === 'number'){
//         soma += notas[cont];
//     }
//     console.log(cont);
//     cont++;
// }

// var media = soma/(notas.length);


// console.log(Math.floor(media));

