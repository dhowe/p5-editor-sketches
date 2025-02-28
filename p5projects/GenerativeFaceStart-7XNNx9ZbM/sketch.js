let skins = [];
let numSkins = 40;

let eyes = [];
numEyes = 15;

//etc ...

function preload() {
  for (let i = 0; i < numSkins; i++) {
    skins.push(loadImage("skins/" + i + ".png"));
  }
  for (let i = 0; i < numEyes; i++) {
    skins.push(loadImage("eyes/" + i + ".png"));
  }
  //etc ...
}

function setup() {
  createCanvas(1024, 768);
}

function draw() {
  background(220);

  drawFace(10, 10, 750, 550);
}

function drawFace(x, y, w, h) {
  
  drawBackgroundTexture();
  
  drawEye(x + w * 0.1, y + 200 );
  
  // probablistic randomness
  if (random() > .3) {
    drawEye(x + w * 0.9, y + 200);
  }
  if (random() > .9) {
    drawEye(x + w * 0.9, y + 200);
  }
  
  //etc ...
  
  drawNose();
}

function drawBackgroundTexture() {
  // ...
}


function drawNose(x, y, w, h) {
  drawNostril();
  drawNostril();
  drawShape();
}

function drawEye(x, y, w, h) {
  drawShape();
  drawEyeball();
  drawEyelashes();
}

