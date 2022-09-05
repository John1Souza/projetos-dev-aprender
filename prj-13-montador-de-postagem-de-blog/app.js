// function Enviar() {

//     var nota1 = document.getElementById("nomeid").value;
//     var nota2 = document.getElementById("foneid").value;
//     var nota3 = document.getElementById("emailid").value;

//     var total = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
//     if(total >  5 ) {
//         alert('Passoy com media: ' + Math.floor(total) + ' Parabens');
//     }else {
//         alert('Voce é burro: ' + total + ' Estude mais');

//     }

// }
var titulo = 'John';
var mensagem = 'John';
var autor = 'John';
var visualizacoes = 500;
var estaAoVivo = 'sim';



const postagem = {
    titulo : titulo,
    mensagem : mensagem,
    autor : autor,
    visualizacoes: visualizacoes,
    comentarios: (autor, mensagem),
    estaAoVivo: estaAoVivo
}

console.log(postagem);