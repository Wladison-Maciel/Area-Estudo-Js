const entrada = require('prompt-sync')({sigint: true});
let confirm = 0;
let idade = 0;
let nome = "";

while (nome == "") {
    nome = String(entrada("Digite seu nome: "));
    if (nome == "") {
        console.log("Caixa vazia, digite novamente!");
    }
}
while (confirm == 0) {
    idade = Number.parseInt(entrada("Digite sua idade: "));
    if (idade == 0 || idade == "") {
        console.log("Idade invalida");
    }
    if (idade < 18 && idade > 0) {
        console.log("Não aceitamos usuários menores do que 18 anos");
    }
    else if (idade >= 18) {
        console.log("Idade aceita");
        confirm = confirm + 1;
    }
}
/* proxímo Update colocar uma validação em relação ao email
Ex: O programa verificará se o email do usuário contem o @(sufixo(@gmail)) + .com ( ou outro tipo de endereço).
*/
console.log(`Seja bem-vindo ${nome}`);
// Após isso, fazer a parte de login, na qual o usuário irá colocar os dados cadastrados :)