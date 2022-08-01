alert("Olá, vamos jogar um jogo?")

var nome = prompt("Qual o seu nome?")

alert("Escolha seu destino " + nome + "...")

var area = prompt("Qual carreira você deseja seguir? 1-Front-End ou 2-Back-End")

// Escolhendo Linguagem
if (area == 1) {
    var ling = prompt("Você deseja aprender 1-React ou 2-Vue?")
} else if (area == 2) {
    var ling = prompt("Você deseja aprender 3-C# ou 4-Java?")
} else {
    alert("Nenhuma opção selecionada...")
}

// Comentando linguagem e escolha se especializar/se tornar Fullstack
if ((area == 1) || (area == 2)) {

    // Verificando área
    if (area == 1) {
        if (ling == 1) {
            alert("Ótima escolha! O React é flexível e facilita a interface com outras bibliotecas e frameworks")
        } else if (ling == 2) {
            alert("Ótima escolha! O Vue é versátil e tem um excelente desempenho")
        } else {
            alert("Nenhuma opção selecionada...")
        }

        // Verificando escolha de linguagem
        if ((ling == 1) || (ling == 2)) {
            var esc = prompt("Você escolhe 1-seguir se especializando ou 2-seguir no desenvolvimento para se tornar Fullstack?")

            // Comentando escolha
            if (esc == 1) {
                alert("Que bom que você deseja se especializar!")
            } else if (esc == 2) {
                alert("Que bom que você escolheu se tornar Fullstack!")
            } else {
                alert("Nenhuma opção selecionada...")
            }

            // Perguntando sobre tecnologias 
            if ((esc == 1) || (esc == 2)) {
                var ctecn = prompt("Quantas tecnologias você gostaria de se especializar ou de conhecer? ")

                var c = 0

                while (c < ctecn) {
                    prompt("Tecnologia: ")
                    c++
                }

                alert("Muito bom! Você deseja aprender " + ctecn + " tecnologia(s)")
            } else {
                alert("Nenhuma opção selecionada...")
            }
        }else{
            alert("Nenhuma opção selecionada...")
        }

    } else if (area == 2) {
        if (ling == 3) {
            alert("Ótima escolha! O C# simplifica muitas das complexidades de C++, além disso, fornece recursos avançados")
        } else if (ling == 4) {
            alert("Ótima escolha! O Java permite a utilização de diferentes plataformas, sendo elas Android, Linux e Windows")
        } else {
            alert("Nenhuma opção selecionada...")
        }

        // Verificando escolha de linguagem
        if ((ling == 3) || (ling == 4)) {
            var esc = prompt("Você escolhe 1-seguir se especializando ou 2-seguir no desenvolvimento para se tornar Fullstack?")

            // Comentando escolha
            if (esc == 1) {
                alert("Que bom que você deseja se especializar!")
            } else if (esc == 2) {
                alert("Que bom que você escolheu se tornar Fullstack!")
            } else {
                alert("Nenhuma opção selecionada...")
            }

            // Perguntando sobre tecnologias 
            if ((esc == 1) || (esc == 2)) {
                var ctecn = prompt("Quantas tecnologias você gostaria de se especializar ou de conhecer? ")

                var c = 0

                while (c < ctecn) {
                    prompt("Tecnologia: ")
                    c++
                }

                alert("Muito bom! Você deseja aprender " + ctecn + " tecnologia(s)")
            } else {
                alert("Nenhuma opção selecionada...")
            }
        }
    } else {
        alert("Nenhuma opção selecionada...")
    }
}