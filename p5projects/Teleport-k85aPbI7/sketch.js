let x = 250, y = 250, rad = 15;
let lineA = 100, lineB = 500, hidden = false;

// use arrows to move 
// click to show/hide walls
function setup() {
  createCanvas(600, 600);
}

function mouseClicked() {
  hidden = !hidden;
}

function draw() {

  background(220);

  circle(x, y, rad * 2); // actual
  circle(x, y - 400, rad * 2); 
  circle(x, y + 400, rad * 2);
  circle(x - 400, y, rad * 2);
  circle(x + 400, y + 400, rad * 2);

  line(0, lineA, width, lineA);
  line(0, lineB, width, lineB);
  line(lineA, 0, lineA, height);
  line(lineB, 0, lineB, height);

  if (keyIsDown(LEFT_ARROW)) x-=2;
  if (keyIsDown(RIGHT_ARROW)) x+=2;
  if (keyIsDown(UP_ARROW)) y-=2;
  if (keyIsDown(DOWN_ARROW)) y+=2;
  
  if (y > lineB) y = lineA;
  if (y < lineA) y = lineB;
  if (x > lineB) x = lineA;
  if (x < lineA) x = lineB;
  
  if (hidden) {
    rect(0,0,100,600);
    rect(0,0,600,100);
    rect(500,0,100,600);
    rect(0,500,600,100);
  }
}
