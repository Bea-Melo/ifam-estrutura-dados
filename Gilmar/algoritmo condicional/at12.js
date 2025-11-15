let numero = prompt("Qual o numero de matricula? ")
let nota1 = parseFloat(prompt("Qual a 1° nota? "))
let nota2 = parseFloat(prompt("Qual a 2° nota? "))
let nota3 = parseFloat(prompt("Qual a 3° nota? "))
let me = parseFloat(prompt("Qual a média das notas? "))
let ma = (nota1+nota2+nota3 *3 +me)/6
let conceito
let situacao
if(ma>=90){
    conceito = "A", situacao = "Aprovado"
}else if(ma>=75 && ma<90){
   conceito = "B", situacao = "Aprovado"
}else if(ma>=60 && ma<75){
 conceito = "C", situacao = "Aprovado"
}else if(ma>=40 && ma<60){
    conceito = "D", situacao = "Reprovado"
}else{
    conceito = "E", situacao = "Reprovado"
}
alert(`Aluno N°: ${numero}\n Notas: ${nota1}, ${nota2}, ${nota3}\n Média dos exercicios: ${me}\n Média de aprovação: ${ma.toFixed(2)}\n Conceito: ${conceito}\n Situação: ${situacao}`)