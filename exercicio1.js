let quantidade = prompt("Quantos números desejar digitar? ")
let numero = [ ]
let soma = 0 
for(let i=0; i<quantidade; i++){
    numero[i] = parseInt(prompt(`Digite o número ${i+1}: `))
    soma = soma + numero[i]
}
if(soma>100){
document.writeln(`Soma maior que cem: ${soma}`)
}else{
document.writeln(`Soma menor que cem`)}