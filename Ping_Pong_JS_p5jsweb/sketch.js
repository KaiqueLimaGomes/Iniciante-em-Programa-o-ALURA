// Variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

// Variaveis da velocidade da bolinha
let velxBolinha = 5;
let velyBolinha = 5;

// Variaveis da Raquete
let xRaquete = 3; 
let yRaquete = 150;
let raqueteComp = 10;
let raqueteAltura = 100;

//variáveis do oponente
let xRaqueteOponente = 587;
let yRaqueteOponente = 150;
let velocidadeYOponente;
//Controle da Raquete oponente
let chanceDeErrar = 0;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("sons/trilha.mp3");
    ponto = loadSound("sons/ponto.mp3");
    raquetada = loadSound("sons/raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  
  //Bolinha
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  bolinhaNaoFicaPresa();
  
  //Raquete jogador
  mostraRaquete(xRaquete, yRaquete);
  moverRaquete1();
  verificaColisaoRaquete(xRaquete, yRaquete);
  
  //Raquete Oponente
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  //placar do jogo
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velxBolinha;
  yBolinha += velyBolinha;
}

function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velxBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velyBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComp, raqueteAltura);
}

function moverRaquete1(){
  if(keyIsDown(UP_ARROW)){
     yRaquete -= 10;
     }
  
    if(keyIsDown(DOWN_ARROW)){
     yRaquete += 10;
     }
}
function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComp, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velxBolinha *= -1;
        raquetada.play();
    }
}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComp, raqueteAltura);
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComp / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar
    calculaChanceDeErrar()
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha + raio < 0){
    console.log('bolinha ficou presa');
    xBolinha = 300;
    }
}