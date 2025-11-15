let numero = parseInt(prompt("Quantos números deseja informar? "))
let vetor = [ ]
let pares = 0
for(let i=0; i<numero; i++){
    vetor[i] = parseInt(prompt(`Informe os números ${i+1}:`))
   if(vetor[i] % 2 ==0){
       pares++
   }
}
document.writeln(`<br>Números informados: ${vetor}`)
document.writeln(`<br>Quantidade de números pares: ${pares}<b>`)
