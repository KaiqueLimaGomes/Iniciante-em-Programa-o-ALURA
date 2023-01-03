let meusPontos = 0;
let minhasVidas = 3;

let xVidas = [20, 45, 70];
let yVida = 5;
let comprimentoVida = 25;
let alturaVida = 25;

// Vidas
function mostraVidas(){
  for (let i = 0; i < minhasVidas; i++){
    image(imagemVida, xVidas[i], yVida, comprimentoVida, alturaVida);
  }
}

function mostraPontos(){
  stroke(0);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text(meusPontos, 280, 25);
}

function mensagemPontos(){
  textSize(20);
  fill(0);
  text("Nível", 230, 25);
  textAlign(CENTER);
}