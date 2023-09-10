const entrada = require('prompt-sync')({sigint: true});

let numero1 = 1;
let numero2 = 0;

/* Irá verificar se apenas uma condição for aceita, diferente do AND que precisa que
   as duas condições precisam ser aceitas
 */

if(numero1 > 0 || numero2 > 0){
    console.log("Condição aceita")
}