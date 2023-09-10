const entrada = require('prompt-sync')({sigint: true});

let num = parseInt(entrada("Digite um número maior que 10: "));

while (num > 10){
    console.log(num)
    num = num - 1
}