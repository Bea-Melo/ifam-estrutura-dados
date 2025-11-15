let numero = parseInt(prompt("Qual o numero? "))
if(numero > 0){ resultado = 2 * numero
    alert(`${numero} X 2 = ${resultado} Número positivo!`)
}else if(numero < 0){
    resultado = 3 * numero
    alert(`${numero} X 3 = ${resultado} é número negativo!`)
}
else
    alert(`O número informado é zero por isso ele permanece como 0`)