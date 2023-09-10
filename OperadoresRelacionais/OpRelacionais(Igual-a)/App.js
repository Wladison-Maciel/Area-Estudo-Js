const entrada = require('prompt-sync')({sigint: true});

let num = parseInt(entrada("Digite um número de 1 a 3: "))

if(num == 1){
    console.log("O número digitado foi 1");
}
if(num == 2){
    console.log("O número digitado foi 2");
}
if(num == 3){
    console.log("O número digitado foi 3");
}