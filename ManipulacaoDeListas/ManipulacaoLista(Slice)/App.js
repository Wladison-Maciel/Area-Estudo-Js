// Criando uma lista (array) de exemplo
const minhaLista = [1, 2, 3, 4, 5];

// Usando o método slice para criar uma cópia de parte da lista

const copiaDaLista = minhaLista.slice(1, 4);
// O número acima indica o índice do elemento inicial e o final, o que está entre eles é o que
// será captado

console.log(copiaDaLista); // Irá imprimir [2, 3, 4]