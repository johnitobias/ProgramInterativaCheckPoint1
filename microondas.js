function microondas(prato = "", tempo = 0) {
    let tempoPadrao, mensagem;
  
    switch(prato) {
      case "pipoca":
        console.log("PRATO: Pipoca");
        tempoPadrao = 10;
        break;
      case "macarrão":
        console.log("PRATO: Macarrão");
        tempoPadrao = 8;
        break;
      case "carne":
        console.log("PRATO: Carne");
        tempoPadrao = 15;
        break;
      case "feijão":
        console.log("PRATO: Feijão");
        tempoPadrao = 12;
        break;
      case "brigadeiro":
        console.log("PRATO: Brigadeiro");
        tempoPadrao = 8;
        break;
      default:
        mensagem = "Prato inexistente."
    }
    
    if (mensagem !== "Prato inexistente.") {
      if (tempo < tempoPadrao) mensagem = "Tempo insuficiente."
      else if (tempo >= tempoPadrao * 3) mensagem = "Kabumm!"
      else if (tempo >= tempoPadrao * 2) mensagem = "A comida queimou!"
      else mensagem = "Prato pronto, bom apetite!!!"
      
      console.log("TEMPO: " + tempo);
      console.log("RESULTADO: " + mensagem);
    } else {
      console.log("PRATO: " + prato)
      console.log("RESULTADO: " + mensagem)
    }
  }
  
  // microondas("prato", tempo);
   microondas();
  