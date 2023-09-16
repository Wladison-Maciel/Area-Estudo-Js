function MinhaFuncaoConstrutora(parametro) {
    this.parametro = parametro;
  
    this.exibirParametro = function() {
      console.log('Você chamou a função com o parâmetro:', this.parametro);
    };
  }
  
  const instancia = new MinhaFuncaoConstrutora('Olá, mundo!');
  instancia.exibirParametro();