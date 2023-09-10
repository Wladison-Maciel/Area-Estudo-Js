const entrada = require('prompt-sync')({sigint: true});

let idade = parseInt(entrada("Digite sua idade: "));

if(idade >= 18){
    console.log("Você é maior de idade!")
} else{
    console.log("Você é menor de idade!")
}