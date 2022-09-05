function Enviar() {

    var rua = document.getElementById("rua").value;
    var cidade = document.getElementById("cidade").value;
    var cep = document.getElementById("cep").value;

    const endereco = {
        Rua: rua,
        Cidade: cidade,
        CEP: cep
    };

    for (var i in endereco){
        alert(`${i}: ${endereco[i]}`);
    }

}

// var rua = 10;
// var cidade = 'Brasilia';
// var cep = '71596-241';

// const endereco = {
//     Rua: rua,
//     Cidade: cidade,
//     CEP: cep
// };

// for (var i in endereco){
//     console.log(i, endereco[i]);
// }