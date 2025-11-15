let paginas, dias, media
paginas = prompt("Informe o número de páginas")
dias = prompt("Informe a quantidade de dias")
media = paginas/dias
alert (`Quantidade média de páginas que precisam ser lidas por dia: ${Math.ceil(media)}`)