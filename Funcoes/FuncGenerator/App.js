function* minhaFuncaoGeradora() {
    yield 'Olá, ';
    yield 'mundo!';
  }
  
  const gerador = minhaFuncaoGeradora();
  
  console.log(gerador.next().value); // Saída: Olá,
  console.log(gerador.next().value); // Saída: mundo!