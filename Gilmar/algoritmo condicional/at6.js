let A = parseInt(prompt("Informe se o valor de A é verdadeiro (1) ou falso (0): "))
let B = parseInt(prompt("Informe se o valor de A é verdadeiro (1) ou falso (0):  "))
if(A==1 && B==1){
    alert(`Ambos são verdadeiros`)
}else if(A==0 && B==0){
    alert(`Ambos são falsos`)
}else if(A==0 && B==1){
    alert("A é falso e B é verdadeiro")
}else{
    alert("A é verdadeiro e B é falso")
}