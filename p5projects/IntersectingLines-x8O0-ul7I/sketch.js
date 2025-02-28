function setup() {
  createCanvas(400, 400);
  noFill();
  rectMode(CENTER);
}
function draw() {
  background(255,16);
  randomSeed(1000);
  
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      let x = 20 + i * 40;
      let y = 20 + j * 40;
      ellipse(x, y, 2);
      //rect(x, y, 40, 40);
      push();
      translate(x,y);
      rotate(sin(i*j+frameCount/50)*TWO_PI);
      ilines(0,0,5,50);
      pop();
    }
  }
}

// draw 'num' intersecting lines through a point
function ilines(x, y, num, maxLen) {
  for (let k = 0; k < num; k++) {
    let dx, dy, scl;
    dx = random(-1, 1);
    dy = random(-1, 1);
    scl = random(maxLen / 10, maxLen / 2);
    line(x, y, x + dx * scl, y + dy * scl);
    scl = random(maxLen / 10, maxLen / 2)
    line(x, y, x - dx * scl, y - dy * scl);
  }
}