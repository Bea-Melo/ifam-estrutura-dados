let kg, gramas, onca
kg = parseFloat(prompt("Informe o peso da pessoa em kg"))
gramas = kg*1000
onca = gramas/28.35
alert (`O peso equivale a aproximadamente ${onca.toFixed(2)} onças.`)