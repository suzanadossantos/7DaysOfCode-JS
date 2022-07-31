function enviar(){ 
    var nome = document.getElementById("inome").value
    var idade = Number(document.getElementById("iidade").value)
    var ling = document.getElementById("iling").value
    var perg1 = document.getElementById("iperg1")
    var perg2 = document.getElementById("iperg2")

    if((nome != "") && (idade != 0) && (ling != "")){
        alert(`Olá ${nome}, você tem ${idade} e já está aprendendo ${ling}`)

        if(perg1.checked){
            alert("Muito bom! Continue estudando e você terá muito sucesso.")
        }else if(perg2.checked){
            alert("Ahh que pena... Já tentou aprender outras linguagens?")
        }
    }else{
        alert("Responda todas as perguntas...")
    }
}