let preco = parseFloat(prompt("Qual o valor da compra? "))
let pagamento = parseInt(prompt("Qual é a forma de pagamento?\n1 Dinheiro ou cheque, desconto de 10%\n2 Avista no cartão, desconto de 15%\n3 Cartão 2x sem juros\n4 Cartão 2x com juros de 10% "))
let total
if(pagamento==1){
    total=preco-(preco*0.10)
    alert(`Pagamento em dinheiro ou cheque, desconto de 10%\n Valor da compra: R${total.toFixed(2)}`)
}else if(pagamento==2){
 total=preco-(preco*0.15)
 alert(`Pagamento avista no cartão, desconto de 15%\n Valor da compra: R${total.toFixed(2)}`)
}else if(pagamento==3){
    total=preco
    alert(`Pagamento 2x sem juros\n Valor da comprar: R${total.toFixed(2)}`)
}else if(pagamento==4){
    total=preco+(preco*0.10)
    alert(`Pagamento em 2x com juros de 10%\n Valor da compra: R${total.toFixed(2)}`)
}else{
    alert(`Código não existe! Escolha outra forma de pagemnto!`)
}