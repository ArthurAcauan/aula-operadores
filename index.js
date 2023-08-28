// this is a js file
// Gabriel Barros

//atividade operadores e lógica de programação

//1 a:false b:false c:true d:boolean.
//const bool1 = true
//const bool2 = false
//const bool3 = !bool2
//let resultado = bool1 && bool2
//console.log("a. ", resultado);
//resultado = bool1 && bool2 && bool3
//console.log("b. ", resultado);
//resultado = !resultado && (bool1 || bool2);
//console.log("c. ", resultado);
//console.log("d. ", typeof resultado);

//2: o erro esta quando ele não bota number na variavel, sendo assim a soma por exemplo ficaria 2+2=22 e o certo seria 2+2=4

//3: a dica seria usar o Number quando se referir a variavel criada.

//Exercicio escrita de codigo 
//1
let idade = prompt("qual a sua idade");
let idadeBestfriend = prompt("qual a idade do seu melhor amigo(a)");
console.log("sua idade é maior do que a do seu melhor amigo?", idade >= idadeBestfriend );
let diferenca = idade - idadeBestfriend;
console.log("a diferença de idade é: ", diferenca);

//2
//solicita ao usuario que insira um numero par
const pergunta1 = prompt("me diga um numero par");
//calcula e imprime o resto da divisão do numero par por 2
const restoDivisao = pergunta1 % 2;
console.log("o resto da divisão de" + pergunta1 + "por 2 é: " + restoDivisao);
//ao testar o programa com diversos numeros pares, notamos que o resto da divisão sempre sera 0.
//isso ocorre porque numero pares são sempre divisiveis por 2 sem deixar resto
//se o usuario inserir um numero impar, o programa ainda funcionará, mas o resto da divisão será diferente de 0.
//isso acontece porque numeros impares não são perfeitamente divisiveis por 2, então havera um resto não nulo.

//3
//solicita a idade do usuario em anos
const idadeAnos = (prompt("Qual é sua idade em anos"));
const idadeMeses = idadeAnos * 12;
const idadeDias = idadeMeses * 365;
const idadeHoras = idadeDias * 24;
console.log("Sua idade em Meses é:", idadeMeses);
console.log("Sua idade em Dias é:", idadeDias);
console.log("Sua idade em Horas é:", idadeHoras); 

//4
const primeiroNumero = (prompt("Me diga um numero:"));
const segundoNumero = (prompt("Me diga outro numero:"));

console.log("o primeiro número é maior que o segundo?" + (primeiroNumero > segundoNumero));
console.log("o primeiro número é igual ao segundo?" + (primeiroNumero === segundoNumero));
console.log("o primeiro número é divisivel pelo segundo?" + (primeiroNumero % segundoNumero === 0));
console.log("o segundo número é divisivel pelo primeiro?" + (segundoNumero % primeiroNumero === 0));
