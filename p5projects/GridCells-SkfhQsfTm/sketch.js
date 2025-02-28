let x = 0, y = 0;

function setup() {
  noFill();
  createCanvas(400, 400);
  textSize(20);
}

function draw() {
  background(255);
    
  let rectSz = 50;
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      fill(255);
      let x = floor(mouseX/rectSz);
      let y = floor(mouseY/rectSz);
      rect(j*rectSz,i*rectSz,rectSz,rectSz);
      fill(0);
      text(x+','+y,10,height-20);
    }
  }
}
 