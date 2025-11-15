let entrevistados = parseInt(prompt("Quantas pessoas serão entrevistatas? "))
let media = 0
let idade = [ ]
for(let i=0; i<entrevistados; i++){
  idade[i] = parseInt(prompt("Qual a idade de cada entrevistado? "))
  media+=idade[i]
}
document.writeln(`<b>Total de entrevistados: ${entrevistados}<br>`)
document.writeln(`<b>Idades dos entrevistadores: ${ idade }<br>`)
document.writeln(`<b>A média das idades são: ${media/entrevistados}<br>`)