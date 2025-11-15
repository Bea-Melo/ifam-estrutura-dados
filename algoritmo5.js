/* let  preco, grama
grama = prompt("Informe o peso em gramas: ")
preco = (preco/1000)*45
alert (`Preço total ${preco}`) */

let peso = parseFloat(prompt("Peso"))
let price = (peso*45)/1000
alert (`Valor final: R$ ${price.toFixed(2)}`)