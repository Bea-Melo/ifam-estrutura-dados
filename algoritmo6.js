let pessoas, Valor, show
pessoas = parseFloat (prompt("Informe a quantidade de pessoas"))
show = parseInt (prompt("Informe o valor do show"))
valor = show/pessoas
alert (`Valor: R$ ${valor.toFixed(2)}`)