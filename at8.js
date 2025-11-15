let A = parseInt(prompt("Qual o valor A? "))
let B = parseInt(prompt("Qual o valor B? "))
let C = parseInt(prompt("Qual o valor C? "))
let numero = [A, B, C]
numero.sort((A, B) => B - A)
alert(`Ordem decresente: ${numero[0]}, ${numero[1]}, ${numero[2]}`)