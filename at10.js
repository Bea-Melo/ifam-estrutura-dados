let peso = parseFloat(prompt("Qual o seu pesso?"))
let altura = parseFloat(prompt("Qual a sua altura? "))
let IMC = peso/(altura*altura)
let estado
if(IMC<18.5){
    estado = (`Abaixo do peso`)}
else if(IMC<=25){
    estado = (`Peso normal`)}
else if(IMC<=30){
    estado = (`Acima do peso`)
}else
    estado = (`Obeso`)
    alert(`IMC: ${IMC.toFixed(2)}\n Condição: ${estado}`)