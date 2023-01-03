//Variáveis do ator

let yAtor = 367;
let xAtor = 250;
let comprimentoAtor = 26;
let alturaAtor = 30;
let colisao = false;
let diametroAtor = 25;
let movimentoLivre = true; //controle do movimento


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(){
  if (movimentoLivre){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 2;
    }
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 2;
    }
    if (keyIsDown(LEFT_ARROW)){
      xAtor -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)){
      xAtor += 2;
    }
  }
}

function verificaColisao(){
  
  for (let i = 0; i < imagemCarros.length; i++){
    
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro,           xAtor, yAtor, comprimentoAtor, alturaAtor);
    
    if (colisao){
      voltaAtorPosicaoInicial();
      somColisao.play();
      if (minhasVidas > 0){
        minhasVidas -= 1;
      }   
      if (minhasVidas < 1){
        somTrilha.stop(0);
        yAtor = 500;
        setTimeout(() => {fimDeJogo = true}, 200);
        setTimeout(() => {movimentoLivre = false}, 600);

      }
    }
  }
}

function voltaAtorPosicaoInicial(){
    yAtor = 367;
    movimentoLivre = false; //evita uma colisão surpresa ao retornar
    setTimeout(() => {movimentoLivre = true}, 500);
}

function limiteBorda(){
  if(xAtor<0){
    xAtor = 1;
  }
  if(xAtor>480){
    xAtor = 480;
  }
  if(yAtor>366){
    yAtor= 366;
  }
}

function marcaPontos(){
  if (yAtor < 5){
    meusPontos += 1;
    somPonto.play();
    voltaAtorPosicaoInicial();
  }
}

