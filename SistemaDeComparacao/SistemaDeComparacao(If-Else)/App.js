const entrada = require('prompt-sync')({sigint: true});

// Entrada de dados (Input)
let idade = String(entrada("Digite sua idade: "));

// Verificando se o número digitado é maior ou igual a 18
if(idade >= 18){
    console.log("Seja bem-vindo ao sistema!")
} else{
    console.log("Acesso negado")
}
// Se o número for menor do que 18, independente de qual, será negado
