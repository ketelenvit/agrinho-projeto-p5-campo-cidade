let campocidade;

let xjogador = [450, 300, 50, 145];
let yjogador = [105, 150, 125, 150];
let jogador = ["🫘", "🫘", "🫘", "🫘"];
let quantidade = jogador.length;


function preload(){
   campocidade = loadImage ('campocidade.jpg');

}

function setup() {
  createCanvas(600, 800);
 
  
}

function draw() {
  background(220);
  image (campocidade, 0,0,600,800)
  
  textSize(40)
  fill("#FC7D7D")
  text('utilize as teclas a, s, d, f para levar os feijões a cidade', 10, 10, 600)
  
  
  desenhaJogadores();
  desenhaLinhaChegada();
  verificaVencedor();
}
function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xjogador[i], yjogador[i]);
  }
    
   

  //text(jogador[1], xjogador[1], yjogador[1]);
  // text(jogador[2], xjogador[2], yjogador[2]);
}

  function desenhaLinhaChegada() {
  fill("white");
  rect(0,410, 600, 10);
  fill("rgb(79,218,34)");
  for (let xAtual = 0; xAtual < 600; xAtual += 20) { 
     rect(xAtual, 410, 10, 10);
  }
  

}
function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (yjogador[i] > 430) {
      fill ("#F5E130");
      text(jogador[i] + "viva a conexão campo cidade!!", 50, 200, 300);
      noLoop();
    }
  }
}

let teclas = ["a", "s", "d", "f"];
function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key === teclas[i]) {
      yjogador[i] += random(20);
    }
  }
}
