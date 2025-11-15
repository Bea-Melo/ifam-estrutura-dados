function celsiusParaFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
let tempCelsius = parseFloat (prompt("Digite a temperatura °C:"));
alert ("Em Fahrenheit: "+ celsiusParaFahrenheit(tempCelsius)+ "°F");