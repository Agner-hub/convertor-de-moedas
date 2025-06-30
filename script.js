function botao(){
        const toConvert = document.querySelector(".currency-selector-to-convert")
        const convert = document.querySelector(".currency-selector-convert")
        const inputValue = document.querySelector(".input-value").value

        const paraConverte = document.querySelector(".to-Convert")
        const valorConvertido = document.querySelector(".convert")

        const dolarToday = 5.2

        const jaConverted = inputValue / dolarToday

        paraConverte.innerHTML = inputValue
        valorConvertido.innerHTML = jaConverted
        

        
        
}