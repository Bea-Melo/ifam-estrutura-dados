let nome = prompt("Qual o seu nome? ")
let sexo = prompt("Qual o seu sexo (F ou M)? ")
let estado_civil = prompt("Qual o seu estado civil no momento? ")
let anos
if (sexo.toLowerCase() == "f" && estado_civil.toLowerCase() == "casada")
    {
      anos = parseInt(prompt("Quantos anos de casamento (Dígitos)? "))
      alert(`Nome: ${nome}\n Sexo: ${sexo}\n Estado Civil: ${estado_civil}\n Anos de casamento: ${anos}`)
}
    
    else
        alert(`Nome: ${nome}\n Sexo: ${sexo}\n Estato Civil: ${estado_civil}`)