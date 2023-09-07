const entrada = require('prompt-sync')({sigint: true});

// Entrada de dados (Input)
let idade = String(entrada("Digite sua idade: "));

// Verificando se o número digitado é maior do que 18
if(idade >= 18){
    console.log("Seja bem-vindo ao sistema!")
}
// Se o número digitado for igual a 17, executará isso:
else if(idade == 17){
    console.log("Você pode entrar no sistema, mas seu recursos serão limitados")
} else{
    console.log("Acesso negado!")
}
// Por fim, números menores que 17 terão acesso negado