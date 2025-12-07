let discs = [];

function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(220);
  drawDiscs();
}

function drawDiscs() {
   for (let i = 0; i < discs.length; i++){
    let disc = discs[i];
    drawDisc(disc);
    disc.y++;
  }
}

function mouseClicked() {
  let obj = {x: mouseX, y: mouseY};
  discs.push(obj)
}

function drawDisc(disc) {
   for(let j = 0; j < 9; j ++){
      circle(disc.x, disc.y, (j + 1) * 5);
    }
}