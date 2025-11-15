let episodios, tempo, dias
episodios = parseInt(prompt ("Informe a quantidade de episódios da série"));
tempo = parseFloat(prompt("Informe a média de tempo de cada episódio"));
dias = (episodios*tempo)/50;
alert (`Serão necessários ${Math.ceil(dias)} dias para assistir toda a série`)
