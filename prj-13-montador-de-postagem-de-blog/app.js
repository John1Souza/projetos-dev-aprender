function Enviar() {

    var titulo = document.getElementById('titulo').value;
    var mensagem = document.getElementsById('mensagem').value;
    // var autor = document.getElementById('autor').value;
    // var comentario__autor = document.getElementById('comentario__autor').value;
    // var comentario__mensagem = document.getElementById('comentario__mensagem').value;
    // var comentarios = [{
    //     autor: comentario__autor, 
    //     mensagem: comentario__mensagem
    // }];
    // var visualizacoes = document.getElementById('visualizacoes').value;
    // var estaAoVivo = true;



    // let postagem = {
    //     titulo : titulo,
    //     mensagem : mensagem,
        // autor : autor,
        // visualizacoes: visualizacoes,
        // comentarios: comentarios,
        // estaAoVivo: estaAoVivo
    // }

    // alert(postagem);
    // console.log(postagem);

}
// var titulo = 'John';
// var mensagem = 'John';
// var autor = 'John';
// var comentarios = [{autor:'john', mensagem:'oi'}, {autor:'john', mensagem:'oi'}];
// var visualizacoes = 500;
// var estaAoVivo = true;



// let postagem = {
//     titulo : titulo,
//     mensagem : mensagem,
//     autor : autor,
//     visualizacoes: visualizacoes,
//     comentarios: comentarios,
//     estaAoVivo: estaAoVivo
// }

// console.log(postagem);

function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a','b','c');

console.log(postagem);