const entrada = require('prompt-sync')({sigint: true});

let idade = parseInt(entrada("Digite sua idade: "));

if(idade <= 17){
    console.log("Você é menor de idade!")
} else {
    console.log("Você é maior de idade!")
}
