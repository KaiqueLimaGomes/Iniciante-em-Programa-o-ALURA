/* 

MELHORIAS E IMPLEMENTAÇÕES

- Movimentação do ator nos eixos x e y
- Carros nos dois sentidos das vias.
- Velocidade dos carros aumentada conforme o nível.
- Aperfeiçoamento da colisão entre jogador e carros.
- Implementação de sistema de vidas do jogador.
- Implementação de atraso da movimentação ao retornar ao ponto de origem do jogador.
- Implementação de tela de reinicialização de jogo.

*/

let fimDeJogo = false;

function setup() {
  createCanvas(500, 400);
  
  somTrafego.loop();
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  ressurgirCarro();
  verificaColisao();
  limiteBorda();
  marcaPontos();
  mostraVidas();
  mostraPontos();
  mensagemPontos();
  mostraFimDeJogo();
  ReiniciarJogo();
}

function mostraFimDeJogo(){
  if (fimDeJogo === true){
    fill(0);
    rect(100, 100, 300, 200);
    
    fill(255);
    textAlign(CENTER);
    textSize(34);
    textStyle(BOLD);
    text("GAME OVER", 250, 150);
    
    textSize(30);
    textStyle(NORMAL);
    text("Nível: " + meusPontos, 250, 200);
    
    textSize(16);
    text("Pressione", 250, 240);
    text("BARRA DE ESPAÇO", 250, 260);
    text("para reiniciar", 250, 280);
  }
}

function ReiniciarJogo() {
  if (keyCode === 32) {
    xAtor = 250;
    yAtor = 367;
    meusPontos = 0;
    minhasVidas = 5;
    fimDeJogo = false;
    movimentoLivre = true;
    somTrilha.loop(0, 1, 0.08);
  }
} 