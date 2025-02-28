let current = [];
let saved = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    current.push({ x: mouseX, y: mouseY });
  }
  drawOne(current, 0);
  text("saved:" + saved.length, 20, 20);

  for (let i = 0; i < saved.length; i++) {
    let scr = saved[i];
    drawOne(scr, width/2);
  }
  line(0, height / 2, width, height / 2);
}

function doubleClicked() {
  let copyOfCurrent = current.slice();
  saved.push(copyOfCurrent);
  current = []; // empty current
  console.log(saved);
}

function drawOne(scratch, yOffset) {
  for (let i = 0; i < scratch.length - 1; i++) {
    line(scratch[i].x, scratch[i].y+yOffset, 
      scratch[i + 1].x, scratch[i + 1].y+yOffset);
  }
}


