var nome = "Saulo"
var notaDoPrimeiroBimestre = 9.642
var notaDoSegundoBimestre = 7.464
var notaDoTerceiroBimestre = 6.888
var notaDoQuartoBimestre = 6.257

var notaFinal = (notaDoPrimeiroBimestre = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(2)


console.log("Olá, " + nome)
//console.log(notaFixada)
//Abaixo, um dos desafios.
console.log("Está é sua média final, = "+ ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) /4).toFixed(1))


//Abaixo outro desafio de temperatura
var fahrenheit = 46

var celsius = (fahrenheit - 32) / 1.8

console.log("A temperatura em celsius é, = "+ celsius.toFixed(1))

//Abaixo outro desafio de moeda

var dollar = 5
var real = dollar / 1

console.log("O preço do dollar em real é de: "+ real)

// Isso é um comentário

// Revisão;
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação