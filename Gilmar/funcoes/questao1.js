function tabuada(num){
    for (let i = 1; i<=10; i++){
    console.log(`${num} X ${i} = ${num*i}`)

    }
}
let num = parseInt(prompt("Digite um número para ver a sua tabuada:"));
console.log(tabuada(num));