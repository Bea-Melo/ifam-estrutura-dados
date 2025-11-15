function verificarIdade(idade){
    if (idade >= 18){
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
alert (verificarIdade(20)); // Maior de idade