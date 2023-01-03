let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imageDoCarro2;
let imageDoCarro3;
let imagemDoCarro4;
let imageDoCarro5;
let imageDoCarro6;

let somTrafego;
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemDoAtor = loadImage("img/ator.png");
  imagemDoCarro1 = loadImage("img/carro-1.png");
  imagemDoCarro2 = loadImage("img/carro-2.png");
  imagemDoCarro3= loadImage("img/carro-3.png");
  imagemDoCarro4= loadImage("img/carro-4.png");
  imagemDoCarro5= loadImage("img/carro-5.png");
  imagemDoCarro6= loadImage("img/carro-6.png");
  imagemVida= loadImage("img/vida.png");
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro4, imagemDoCarro5, imagemDoCarro6];
  
    somTrafego = loadSound("sons/trafego.mp3")
  somTrilha = loadSound("sons/natal_fundo.mp3");
  somColisao = loadSound("sons/colidiu.wav");
  somPonto = loadSound("sons/ponto.mp3");
}
