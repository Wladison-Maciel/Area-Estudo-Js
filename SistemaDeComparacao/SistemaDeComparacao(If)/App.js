const entrada = require('prompt-sync')({sigint: true});

// Entrada de dados (Input)
let idade = String(entrada("Digite sua idade: "));

// Verificando se o número digitado é maior do que 18
if(idade >= 18){
    console.log("Seja bem-vindo ao sistema!")
}
// Se for menor, mas poderia especificar, qual seria esse número
if(idade < 18){
    console.log("Acesso negado")
}