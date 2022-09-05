function Enviar() {
    function Endereco(rua, cidade, cep){
        this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
    }

    var rua1 = document.getElementById("rua1").value;
    var cidade1 = document.getElementById("cidade1").value;
    var cep1 = document.getElementById("cep1").value;

    var rua2 = document.getElementById("rua2").value;
    var cidade2 = document.getElementById("cidade2").value;
    var cep2 = document.getElementById("cep2").value;
    
    
    const endereco1 = new Endereco(rua1,cidade1,cep1);
    const endereco2 = new Endereco(rua2,cidade2,cep2);
    
    
    function saoIguais(endereco1, endereco2){
        return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep === endereco2.cep
        // for(var i in endereco1){
        //     for(var j in endereco2){
        //         if(endereco1[i] === endereco2[j]){
        //             console.log(`${endereco1[i]}, ${endereco2[j]}`);
        //             }
        //         }
        // }
    }
    
    alert(saoIguais(endereco1, endereco2));
    
    function temEnderecoMemoriaIguais(endereco1, endereco2){
        return endereco1 === endereco2;
    }
    
    alert(temEnderecoMemoriaIguais(endereco1, endereco2));

}

// function Endereco(rua, cidade, cep){
//     this.rua = rua,
//     this.cidade = cidade,
//     this.cep = cep
// }

// const endereco1 = new Endereco('são tadeu','São Paulo','71596000');
// const endereco2 = new Endereco('são tadeu','São Paulo','71596000');


// function saoIguais(endereco1, endereco2){
//     return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep === endereco2.cep
//     // for(var i in endereco1){
//     //     for(var j in endereco2){
//     //         if(endereco1[i] === endereco2[j]){
//     //             console.log(`${endereco1[i]}, ${endereco2[j]}`);
//     //             }
//     //         }
//     // }
// }

// console.log(saoIguais(endereco1, endereco2));

// function temEnderecoMemoriaIguais(endereco1, endereco2){
//     return endereco1 === endereco2;
// }

// console.log(temEnderecoMemoriaIguais(endereco1, endereco2));



