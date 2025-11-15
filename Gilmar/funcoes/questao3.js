
let preco = parseFloat(prompt("Informe o preço original"));
let desconto = parseFloat(prompt("Informe a porcentagem de desconto"));


function calcularDesconto (original, desconto){
    let valorDesconto = original*(desconto / 100);
    return original-valorDesconto;
}
let precofinal = calcularDesconto(preco, desconto);
alert (`Preço final: R$ ${precofinal.toFixed(2)}`);