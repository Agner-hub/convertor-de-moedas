
function botao(){
    let paraConverter = document.querySelector(".to-Convert");
    let convertida = document.querySelector(".convert");
    let inputValue = document.querySelector(".input-value").value;
    
    const dollar = 5.2;

    const conversao = new Intl.NumberFormat("en-US",/*linguagem/País */ {
        style: "currency",/*Tipo,no caso, moeda */
        currency: "USD",/*Sigla dp país */
    }).format(inputValue / dollar);/*O que formatar */

    paraConverter.innerHTML = new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
    }).format(inputValue);
    
    convertida.innerHTML = (conversao);
    

    
}