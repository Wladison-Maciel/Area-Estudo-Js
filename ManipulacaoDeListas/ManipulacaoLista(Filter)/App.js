const entrada = require('prompt-sync')({sigint: true});
// Lista Criada com nomes
const lista = ["Lucas","Marcio","Gustavo","Italo","Mendes","Lárcio","Gerdson"]

// Crie um novo array usando o método filter() para selecionar strings que começam com "G"
const filtraString = lista.filter(string => string.startsWith("G"));

// Imprime as strings que começam com "G"
for (const string of filtraString) {
    console.log(string);
}