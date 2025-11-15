let valor, desconto
valor =  parseFloat (prompt("O valor do produto é"))
desconto = valor-(12/100)*valor
alert (`Valor com desconto: R$ ${desconto.toFixed(2)}`)