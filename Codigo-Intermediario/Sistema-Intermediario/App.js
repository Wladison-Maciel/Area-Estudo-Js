const entrada = require('prompt-sync')({sigint: true});

let confirm = 0;
let idade = 0;
let nome = "";
let email = "";

/* Iremos verificar se a variável nome atende aos
   requisitos: Ela não pode ser vazia
*/
while (nome == "") {
    nome = entrada("Digite seu nome: ");
    if (nome == "") {
        console.log("Caixa vazia, digite novamente!");
    }
}
/* Agora será o próximo passo para o cliente ter acesso
   ao nosso sistema
*/
while (confirm == 0) {
    idade = Number.parseInt(entrada("Digite sua idade: "));
    // Verificando se idade é igual a 0 ou vazio
    if (idade == 0 || idade == "") {
        console.log("Idade invalida");
    }
    // Verificando se idade é maior do que 100
    else if(idade >= 100){
        console.log("Uau, parabéns você é pessoa mais velha acessar nosso site")
    }
    // Verificando se idade é menor do que 18 e maior do que 0
    else if(idade < 18 && idade > 0) {
        console.log("Não aceitamos usuários menores do que 18 anos");
    }
    // Verificando se idade é maior ou igual a 18
    else if (idade >= 18) {
    // Somente aqui que se encerra o Sistema de Repetição
        console.log("Idade aceita");
        confirm = confirm + 1;
        // confirmação agora tem valor = 1
    }
}
// Verificar agora o email 
while(confirm == 1){
    email = entrada("Digite seu email: ");
    // Verificando se a caixa está vazia ou não 
    if(email == ""){
        console.log("Caixa vazia, digite algo!")
    }
    // Verificando se em uma string coontém uma sub-string
    else if(email.includes("@gmail.com") || email.includes("@hotmail.com") || email.includes("@yahoo.com")){
        console.log("Email aceito!")
        confirm = confirm + 1
        // Se atender a condição o Loop é encerrado
        // confirmação agora tem valor = 2
    } else {
        console.log("Email não aceito!")
        // Caso não seja atendido, não será aceito 
    }
}
console.log("Seja bem vindo ao sistema");