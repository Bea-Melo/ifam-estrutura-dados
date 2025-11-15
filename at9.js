let altura=parseFloat(prompt("Qual a sua altura?(Não use vírgula) "))
let sexo = prompt("Qual seu sexo?\n Homem ou Mulher")
let peso
if(sexo.toLowerCase()=="homem"){
    peso = 72.7 * altura.toFixed(2) - 58
    alert(`Levando em conta que você é ${sexo}, o peso ideal é:\n ${peso.toFixed(2)} Kg`)
}else{
    peso = 62.1 * altura.toFixed(2) - 44.7
    alert(`Levando em conta que você é ${sexo}, o peso ideal é:\n ${peso.toFixed(2)} Kg`)
}