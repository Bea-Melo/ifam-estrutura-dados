const A = [ ]; B = [ ]; C = [ ]
for(let i=0; i<4; i++){
 A[i] = parseInt(prompt(A))
}alert("Preencha o vetor A: ")
 for(let i=0; i<4; i++){
 B[i] = parseInt(prompt(B))
}alert("Preencha o vetor B: ")
 for(let i=0; i<4; i++){
    C[i] = A[i] * B[i]
 }alert("Produtos dos vetores: ")
for(let i=0; i<4; i++){
document.writeln(C[i])}