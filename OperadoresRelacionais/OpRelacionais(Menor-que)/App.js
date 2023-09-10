const entrada = require('prompt-sync')({sigint: true});

let num = parseInt(entrada("Digite um número menor que 10: "));

while(num < 10){
    num = num + 1
    console.log(num)
}