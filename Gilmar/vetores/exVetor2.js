let numero = parseInt(prompt("Numeros que você deseja? "))
let vetor = []
for(let i=0; i<numero; i++){
    vetor [i] = prompt("Digite o número " + (i+1) + ":")
}
for(let i = numero - 1; i>=0; i--){
    document.writeln(vetor[i])
}