let x = 200, y = 200, rad = 150;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(200);
  noStroke();
  circle(x, y, rad * 2);
  let circleSteps = 36;
  for (let i=0; i < circleSteps; i++){
    let angle = map(i, 0, circleSteps, 0, 360); 
    let px = int(x + rad * cos(angle)); 
    let py = int(y + rad * sin(angle)); 
    fill('red');
    circle(px, py, rad/20); 
  }
}
