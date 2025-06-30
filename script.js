        const toConvert = document.querySelector(".currency-selector-to-convert")/*selecionar para converção*/

        const convert = document.querySelector(".currency-selector-convert")/*  selecionar converter para: */

function botao(){
        

        const inputValue = document.querySelector(".input-value").value //barra de pesquisa

        const paraConverte = document.querySelector(".to-Convert") //texto para converter abaixo da img
        const valorConvertido = document.querySelector(".convert") //texto abaixo da img convertida

        const dolarToday = 5.20 // Valor do Dólar Americano em Real Brasileiro
        const euroToday = 6.50  //valor do euro em Real Brasileiro
        const libraToday = 7.20 // Valor da Libra Esterlina em Real Brasileiro
        const bitcoinToday = 200000 // Valor do Bitcoin em Real Brasileiro


        if(convert.value == "dollar"){
            valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { //linguagem e configurações
            style: 'currency', //tipo de formatação, no caso moeda
            currency: 'USD' //moeda que será convertida
        }).format(inputValue / dolarToday)/*Dollar */
        }
        
        if(convert.value == "euro"){
            valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { //linguagem e configurações
            style: 'currency', //tipo de formatação, no caso moeda
            currency: 'EUR' //moeda que será convertida
        }).format(inputValue / euroToday)/*Euro */
        
    }
        if(convert.value == "libra"){
            valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', { //linguagem e configurações
            style: 'currency', //tipo de formatação, no caso moeda
            currency: 'GBP' //moeda que será convertida
        }).format(inputValue / libraToday)/*Libra */
        }

        if(convert.value == "bitcoin"){
            valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { //linguagem e configurações
            style: 'currency', //tipo de formatação, no caso moeda
            currency: 'BTC' //moeda que será convertida
        }).format(inputValue / bitcoinToday)/*Bitcoin */
        }





        paraConverte.innerHTML = new Intl.NumberFormat('pt-BR', { //linguagem e configurações
            style: 'currency',//tipo de formatação, no caso moeda
            currency: 'BRL',
        }).format(inputValue)/*Real */
    }
    function mudarImg(){
        const moedaImg = document.querySelector(".moeda-convertida img") //selecionar a imagem da moeda convertida
        const nomeMoeda = document.querySelector(".moeda-nome") //selecionar o nome da moeda convertida
        
       if(convert.value == "dollar"){ //verifica se o valor selecionado é igual a dollar
            moedaImg.src = "section/dollar.png" //muda a imagem da moeda convertida
            nomeMoeda.innerHTML = "US$ Dóllar" //muda o nome da moeda convertida
        }

        if(convert.value == "euro"){ //verifica se o valor selecionado é igual a euro
            moedaImg.src = "section/euro.png" //muda a imagem da moeda convertida
            nomeMoeda.innerHTML = "€ Euro" //muda o nome da moeda convertida
        }

        if(convert.value == "libra"){ //verifica se o valor selecionado é igual a libra
            moedaImg.src= "section/libra.png" //muda a imagem da moeda convertida
            nomeMoeda.innerHTML = "£ Libra" //muda o nome da moeda convertida
        }

        if(convert.value == "bitcoin"){ //verifica se o valor selecionado é igual a bitcoin
            moedaImg.src = "section/bitcoin.png" //muda a imagem da moeda convertida
            nomeMoeda.innerHTML = "₿ Bitcoin" //muda o nome da moeda convertida

        }
        botao() //chama a função botao para atualizar o valor convertido caso a moeda seja alterada
       }


    