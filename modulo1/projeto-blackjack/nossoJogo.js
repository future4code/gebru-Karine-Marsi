      /**
       * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
       * 
       * 
          const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
          
          console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
          console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
       * 
       * 
       * 
       */
         //# Projeto Blacjack 
      
         console.log("Bem vindes ao jogo de Blackjack!")
       
            if (confirm("Quer iniciar uma partida de Blackjack?")){

               
            }else{

          console.log("O jogo acabou")
       }
      //começar jogo 
               
               const jogador1 =comprarCarta(),
               const  jogador2 = comprarCarta(),
               const computador1=comprarCarta(),
               const computador2 =comprarCarta()
               
            
            const pontuçãoJogador = jogador1.valor + jogador2.valor
            const pontuçãoComputador =computador1.valor + computador2.valor
         

         console.log(`Usuário- cartas: ${jogador1.texto} ${jogador2.texto}- pontuação ${pontuçãoJogador} `)
         console.log(`Computador- cartas: ${computador1.texto} ${computador2.texto}- pontuação ${pontuçãoComputador} `)

         if(pontuçãoJogador === pontuçãoComputador){
               console.log("Empatamos!")
         } else if (pontuçãoJogador > pontuçãoComputador){
               console.log("Você ganhou! Parabéns!")

            }else if (pontuçãoJogador <pontuçãoComputador){
               console.log("Desculpe, não foi dessa vez.Ganhei!")
            }
         

        // Fim do Jogo