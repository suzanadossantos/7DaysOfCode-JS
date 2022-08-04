alert("Sua lista de compras")

var res = prompt("Você deseja adicionar comida na sua lista?")

var frutas = ['']
var bebidas = ['']
var doces = ['']

while (res == 'sim') {

    var com = prompt("Comida: ")

    var cat = prompt("Qual a categoria? 1-frutas 2-bebidas 3-doces")

    if (cat == 1) {
        frutas.push(com)
    } else if (cat == 2) {
        bebidas.push(com)
    } else if (cat == 3) {
        doces.push(com)
    }

    res = prompt("Você desaja adicionar comida na sua lista?")
}

if (res == 'não') {
    alert("---Sua lista---")
    alert(" Frutas: " + frutas + "\n" + " Bebidas: " + bebidas + "\n" + " Doces: " + doces)
}else if((res != "sim") || (res != "não")){
    alert("Responda com sim ou não...")
}