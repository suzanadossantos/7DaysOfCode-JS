alert("Sua lista de compras")

var res = prompt("Você deseja 1-adicionar comida na sua lista 2-remover da lista 3-finalizar programa")

var frutas = ['']
var bebidas = ['']
var doces = ['']

if (res == '1') {
    while (res == '1') {

        var com = prompt("Comida: ")

        var cat = prompt("Qual a categoria? 1-frutas 2-bebidas 3-doces")

        if (cat == 1) {
            frutas.unshift(com)
        } else if (cat == 2) {
            bebidas.unshift(com)
        } else if (cat == 3) {
            doces.unshift(com)
        }

        res = prompt("Você deseja 1-adicionar comida na sua lista 2-remover da lista 3-finalizar programa")

        if (res == '2') {
            alert(" Frutas: " + frutas + "\n" + " Bebidas: " + bebidas + "\n" + " Doces: " + doces)

            var del = prompt(`De qual categoria você gostaria de remover? \n1-Frutas\n2-Bebidas\n3-Doces`)

            if (del == "1") {
                var rfrutas = frutas.indexOf(0);
                frutas.slice(rfrutas, 1)
                alert("O item foi removido")
            } else if (del == "2") {
                var rbebidas = bebidas.indexOf(0);
                bebidas.slice(rbebidas, 1)
                alert("O item foi removido")
            } else if (del == "3") {
                var rdoces = doces.indexOf(0);
                doces.slice(rdoces, 1)
                alert("O item foi removido")
            }
        } else if (res == '3') {
            alert("---Sua lista---")
            alert(" Frutas: " + frutas + "\n" + " Bebidas: " + bebidas + "\n" + " Doces: " + doces)
        }
    }
} else if (res == '3') {
    alert("---Sua lista---")
    alert(" Frutas: " + frutas + "\n" + " Bebidas: " + bebidas + "\n" + " Doces: " + doces)
} else if ((res != "1") || (res != "2") || (res == "3")) {
    alert("Responda com 1, 2 ou 3...")
}