// Objeto de exemplo
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
  };
  
  // Iterando sobre as propriedades do objeto usando for in
  for (var chave in carro) {
    console.log(chave + ": " + carro[chave]);
  }