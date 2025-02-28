let xPos = [];
let yPos = [];
let sizes = [];
let sizing = false;
let myFont, myImg;

function preload() {
  myFont = loadFont('acmesa.ttf');
  myImg = loadImage('hk.png');
}

function setup() {
  createCanvas(600, 200);
  textAlign(CENTER, CENTER);
  image(myImg, 0, 0, 300, 100);
  textFont(myFont); // use that font
  fill('white');
  text(myImg.width+'x'+myImg.height, 80, 70);
}



function drawx() {
  background(245);
  textSize(32);
  if (sizing) { // mouse is down, O is growing
    // increase last element in sizes array
    sizes[sizes.length - 1] += 1;
  }

  for (let i = 0; i < xPos.length; i++) {
    textSize(sizes[i]);
    text("O", xPos[i], yPos[i]);
    // random-walk
    xPos[i] += random(-1, 1);
    yPos[i] += random(-1, 1);
  }
}

function mousePressed() {
  xPos.push(mouseX);
  yPos.push(mouseY);
  sizes.push(1);
  sizing = true;
}

function mouseReleased() {
  sizing = false;
}
