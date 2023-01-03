//Variáveis dos carros

let xCarros = [600, 600, 600, -100, -100, -100];
let yCarros = [40, 100, 150, 210, 265, 320]; 
let velCarros = [2, 2.5, 3.2, 3.2, 2.5, 2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro(){
  for (let i = 0; i < 3; i++){
    xCarros[i] -= velCarros[i] + meusPontos / 7;
  }
    
  for (let i = 3; i < imagemCarros.length; i++){
      xCarros[i] += velCarros[i] + meusPontos / 7;
  }
}

function ressurgirCarro(){
  for (let i = 0; i < 3; i++){
      if (xCarros[i] < -50){
        xCarros[i] = 550;
      }
  }
  for (let i = 3; i < imagemCarros.length; i++){
    if (xCarros[i] > 650){
      xCarros[i] = -50;
    }
  }
}
