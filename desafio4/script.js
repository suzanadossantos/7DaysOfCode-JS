alert("Tente adivinhar o número")

var n = Math.floor(Math.random() * (10 - 1 + 1) + 1)
var tent = 3

while(tent > 0){
    var n_usua = prompt("Número: ")

    if(n_usua == n){
        alert("Você acertou! O número era " + n)
        break
    }else if(n_usua != n){
       alert("Número errado")
       tent--
    } 
}

if(tent == 0){
    alert("Suas tentativas acabaram. O número era " + n)
}