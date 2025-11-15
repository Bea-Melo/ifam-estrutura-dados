let A = parseFloat(prompt("Qual o valor A? "))
let B = parseFloat(prompt("Qual o valor B? "))
let C = parseFloat(prompt("Qual o valor C? "))
let soma = A + B
if(soma < C){
        alert(`soma = ${soma}\n A =${ A } + B =${ B } é menor que C =${C}?\n Sim, A + B é menor que C`)
    }
    if(soma > C){
        alert(`soma = ${soma}\n A =${ A } + B =${ B } é menor que C =${C}\n Não, A + B é maior que C`)
    }
    else
        {
        alert(`soma = ${soma}\n A =${ A } + B =${ B } é menor que C =${C}?\n C tem o mesmo valor que A + B`)
        }