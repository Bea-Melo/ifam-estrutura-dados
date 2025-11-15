let diciplina = prompt("Quantas disciplinas?")
let notas = []
let soma = 0
for (let i = 0; i <diciplina; i++){
  notas[i] = prompt(`Nota da disciplina ${i + 1}`)
  soma+=notas[i];
}
let media = soma/ diciplina;
if (media >= 6){
  document.writeln(`Média: ${media.toFixed(2)} Aprovado`)}
else
  document.w(`Média: ${media.toFixed(2)}  Reprovado`)
