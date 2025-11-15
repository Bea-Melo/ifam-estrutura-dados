let valor, gorjeta
valor =  parseFloat (prompt("Informe o valor total do consumo"))
gorjeta = valor*0.08
valor = valor*1.08
alert (`gorjeta: R$ ${gorjeta.toFixed(2)}`)
alert (`valor ${valor.toFixed(2)}`)
