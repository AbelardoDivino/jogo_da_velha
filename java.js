// pode jogar com o pc com o ramdom e em dupla

let casas = document.querySelectorAll(".jogo")

let jogador = 'X'

let jogador1,jogador2

let computador = 'O'

let modo = "dupla" // ou "pc"

let score = 0

// poderar ter apens 3 tentativas senao e game over 

modo = prompt("Digite 'dupla' ou 'pc'").toLowerCase()

casas.forEach(function(casa){

    casa.addEventListener("click",function(){

    if (casa.innerHTML === '') {
        if (modo === "dupla") {
          casa.innerHTML = jogador
          if (jogador === "X") {
            jogador =   'O'
          }
          else{
            jogador ='X'
            
        }
        }
    }

})

})





