function botao(){
        const toConvert = document.querySelector(".currency-selector-to-convert")/*selecionar para converção*/

        const convert = document.querySelector(".currency-selector-convert")/*  selecionar para converter*/

        const inputValue = document.querySelector(".input-value").value

        const paraConverte = document.querySelector(".to-Convert")
        const valorConvertido = document.querySelector(".convert")

        const dolarToday = 5.20 // Valor do Dólar Americano em Real Brasileiro
        const euroToday = 6.50
        const libraToday = 7.20 // Valor da Libra Esterlina em Real Brasileiro
        const bitcoinToday = 200000 // Valor do Bitcoin em Real Brasileiro

        
        if(convert.value == "dollar"){
            valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue / dolarToday)/*Dollar */
        }
        
        if(convert.value == "euro"){
            valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', 
            currency: 'EUR'
        }).format(inputValue / euroToday)/*Euro */
        
    }
        if(convert.value == "libra"){
            valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue / libraToday)/*Libra */
        }

        if(convert.value == "bitcoin"){
            valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValue / bitcoinToday)/*Bitcoin */
        }





        paraConverte.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(inputValue)/*Real */
    }