const pratos = {
    1: { nome: 'Pipoca', tempopadrao: 10 },
    2: { nome: 'Macarrão', tempopadrao: 8 },
    3: { nome: 'Carne', tempopadrao: 15 },
    4: { nome: 'Feijão', tempopadrao: 12 },
    5: { nome: 'Brigadeiro', tempopadrao: 8 }
  };
  
  function fazerPrato(nPrato, tempo) {
    const prato = pratos[nPrato];
  
    if (!prato) {
      return console.log('Prato inexistente');
    }
  
    let mensagem;
    const tempoPadrao = prato.tempopadrao;
  
    if (tempo < tempoPadrao) {
      console.log('Prato pronto, bom apeite!!!');
      mensagem = 'Tempo insuficiente';
    } else if (tempo > tempoPadrao * 2 && tempo <= tempoPadrao * 3) {
      console.log('Prato pronto, bom apeite!!!');
      mensagem = 'A comida queimou';
    } else if (tempo > tempoPadrao * 3) {      
      mensagem = 'Kabummm';
      console.log('Prato pronto, bom apeite!!!');
    } else {
      mensagem = 'Prato pronto, bom apeite!!!';
    }
  
    return console.log(mensagem);
  }
  //fazerprato(numeroPrato, tempo escolhido)
  fazerPrato(5, 10);