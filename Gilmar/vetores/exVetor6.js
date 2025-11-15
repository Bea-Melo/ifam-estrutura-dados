let quantidade = parseInt(prompt("Quantos intens serão registrados? "))
let item = []
let preco = []
let total = 0
for(let i=0; i<quantidade; i++){
   item[i] = prompt(`Informe o nome do item: `)
 preco[i] = parseFloat(prompt(`Informe o valor do item: `))
 total+=preco[i]
 total_final=total+preco[i]
} 
document.writeln(`<b>Lista: <br>`)
for(let i=0; i<quantidade; i++){
    document.writeln(`<b><br>Item: ${item} R$ ${preco}`)
}
document.writeln(`<br><b>Total da lista: ${total}`)