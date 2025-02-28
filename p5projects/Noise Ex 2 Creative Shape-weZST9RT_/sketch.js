// a bezier curve in which the position 
// of all 4 points are chosen via noise()

let t = 0;

function setup() {
  createCanvas(400, 400);
  stroke(0);
  noFill();
}

function draw() {
  background(255,12);
  
  let x1 = width * noise(t + 15);
  let x2 = width * noise(t + 25);
  let x3 = width * noise(t + 35);
  let x4 = width * noise(t + 45);
  
  let y1 = height * noise(t + 55);
  let y2 = height * noise(t + 65);
  let y3 = height * noise(t + 75);
  let y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;
}