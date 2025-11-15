let numero = parseInt(prompt("Quantos números você que exibir? "))
let tabuada = [ ]
for(let i=0; i<=10; i++){
    tabuada[i] = numero * i
}
document.writeln("Tabuada do numero" + numero)
document.writeln(tabuada)