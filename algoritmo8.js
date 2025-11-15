let valor, acrescimo
valor =  parseFloat (prompt("O valor do produto é"))
acrescimo = (0.30*valor)+valor
alert (`Valor final com acréscimo: R$ ${acrescimo.toFixed(2)}`)