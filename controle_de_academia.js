let nome = prompt("Informe o seu nome: ")
let altura = parseFloat(prompt("Informe a sua altura usando ponto: "))
let idade = parseInt(prompt("Informe sua idade: "))
let peso = parseFloat(prompt("Informe o seu peso em kg: "))
let imc = peso/(altura*altura)
alert (`Nome: ${nome}\n Idade: ${idade}\n Imc: ${imc.toFixed(2 )}` )
if (imc<18.5)
    alert (`Abaixo do peso`)
else if (imc>=18.5 && imc <25)
    alert (`Peso normal`)
else (imc>=25)
    alert (`Sobrepeso`)


