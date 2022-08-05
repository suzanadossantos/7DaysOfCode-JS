alert("----Calculadora----")

var oper = prompt("Escolha a operação: \n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n5-Sair")

if(oper == '5'){
    alert("Até a próxima!")
}

while((oper == '1') || (oper == '2') || (oper == '3') || (oper == '4')){

    var n1 = prompt("Primeiro valor: ")
    var n2 =prompt("Segundo valor:")

    switch (oper){
        case '1':
            adic()
            break
        case '2':
            subtr()
            break
        case '3':
            mult()
            break
        case '4':
            divi()
            break
        default:
            break
    }

    function adic(){
        var r_adic = Number.parseInt(n1) + Number.parseInt(n2)
        alert(`O resultado da soma é ${r_adic}`)
    }

    function subtr(){
        var r_subtr = Number.parseInt(n1) - Number.parseInt(n2)
        alert(`O resultado da subtração é ${r_subtr}`)
    }

    function mult(){
        var r_mult = Number.parseInt(n1) * Number.parseInt(n2)
        alert(`O resultado da multiplicação é ${r_mult}`)
    }

    function divi(){
        var r_divi = Number.parseInt(n1) / Number.parseInt(n2)
        alert(`O resultado da divisão é ${r_divi}`)
    }

   oper = prompt("Escolha a operação: \n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n5-Sair")
}