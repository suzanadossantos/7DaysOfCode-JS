alert("Sua lista de compras")

var res = prompt("Você deseja 1-adicionar comida na sua lista ou 2-remover da lista")

var frutas = ['']
var bebidas = ['']
var doces = ['']

while (res == '1') {

    var com = prompt("Comida: ")

    var cat = prompt("Qual a categoria? 1-frutas 2-bebidas 3-doces")

    if (cat == 1) {
        frutas.push(com)
    } else if (cat == 2) {
        bebidas.push(com)
    } else if (cat == 3) {
        doces.push(com)
    }

    res = prompt("Você deseja 1-adicionar comida na sua lista ou 2-remover da lista")

    if(res == '2'){
        alert(" Frutas: " + frutas + "\n" + " Bebidas: " + bebidas + "\n" + " Doces: " + doces)

        var del = prompt(`De qual categoria você gostaria de remover? \n1-Frutas\n2-Bebidas\n3-Doces`)
        
        if(del == "1"){
            var rfrutas = frutas.indexOf(del);
            frutas.slice(rfrutas,1)
            alert("O item foi removido")
        }else if(del == "2"){
            var rbebidas = bebidas.indexOf(del);
            bebidas.slice(rbebidas,1)
            alert("O item foi removido")
        }else if(del == "3"){
            var rdoces = doces.indexOf(del);
            doces.slice(rdoces,1)
            alert("O item foi removido")
        }
    }
}

if (res == '2') {
    alert("---Sua lista---")
    alert(" Frutas: " + frutas + "\n" + " Bebidas: " + bebidas + "\n" + " Doces: " + doces)
}else if((res != "1") || (res != "2")){
    alert("Responda com 1 ou 2...")
}