const entrada = require('prompt-sync')({sigint: true});

// Entrada de dados com números inteiros
let SuaIdade = Number.parseInt(entrada("Digite sua idade: "));
let IdadeIrma = Number.parseInt(entrada("Digite a idade do seu irmão ou irmã: "));

// Verificando se as duas idades são menores que 18
if(SuaIdade && IdadeIrma < 18){
    console.log("Vocês dois são menores de idade!")
}
// Verificando se você é de maior e sua irmã de menor
if(SuaIdade >= 18 && IdadeIrma <18){
    console.log("Você é de maior, já sua irmã é de menor!")
// Verificando se você é de menor e sua irmã de maior
}
if(SuaIdade < 18 && IdadeIrma >= 18){
    console.log("Você é de menor, já sua irmã de maior!")
}
// Verificando se as duas idades são maiores do que 18
if(SuaIdade >= 18 && IdadeIrma >= 18){
    console.log("Vocês dois são de maiores!")
}