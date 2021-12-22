var listadePeca = ["Filtro de Ar", "Óleo", "Amortecedor"];

if (listadePeca.length < 10){
    // Condição que é possivel cadastrar
    console.log("Possível cadastrar mais peças")
    } else {
        console.log("Não tem mais espaço na lista")
    }


    let peso = 50;
    if (peso < 100){
        console.log("Peça deve pesar no mínimo 100g")
    }else {
        console.log("Peça possui peso adequado")
    }


    let nomePeca ="Disco de Freio";
    if (nomePeca.length > 3){
        console.log("Nome da peça está adequada para o cadastro")
    }else if (nomePeca.length==0){
        console.log("O nome da peça não pode se vazio")
    } 
    else {
        console.log("O nome da peça deve possuir mais de 3 caracteres, favor digitar um nome adequado.")
    }
