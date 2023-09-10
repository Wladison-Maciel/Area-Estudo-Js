const entrada = require('prompt-sync')({sigint: true});

let num = parseInt(entrada("Digite o número 1: "))

if(num != 1){
    console.log("Você não digitou o número 1")
} else{
    console.log("Você digitou o número 1")
}