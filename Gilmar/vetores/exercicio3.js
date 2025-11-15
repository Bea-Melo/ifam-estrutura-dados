let numero = prompt("Quais números quer ver? ")
let numeros = [ ]
let impares = 0
for(let i=0; i<quantidade; i++){
    numeros[i] = prompt(`Digite o número ${i+1}`)
    if(numeros[i] % 2 ==0)
    impares+=numero[i]
}
document.writeln("lista: "+numeros + "<br>")
document.writeln(`<br>Soma das posições de impares: ${impares}`)