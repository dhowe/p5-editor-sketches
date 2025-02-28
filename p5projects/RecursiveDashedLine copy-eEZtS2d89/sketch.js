function setup() {
  createCanvas(400, 400);
  background(220);
  fill(0);
  //two random point objects
  let a = { x: random(20, 50), y: random(20, height - 20) };
  let b = { x: random(320, 380), y: random(20, height - 20) };
  dashedRecursiveLine(a, b, 2);
}

function dashedRecursiveLine(a, b, dashLen) {
  let d = dist(a.x, a.y, b.x, b.y);
  if(d < 20) {
    // get the angle between to points 
    let angle = atan2(b.y - a.y, b.x - a.x);
    let startX = a.x + cos(angle) * dashLen / 2;
    let startY = a.y + sin(angle) * dashLen / 2;
    let endX = a.x - cos(angle) * dashLen / 2;
    let endY = a.y - sin(angle) * dashLen / 2;
    line(startX, startY, endX, endY);
  }
  //get the mid point and call the function on the divided parts
  else {
    let mid = {};
    mid.x = lerp(a.x, b.x, 0.5);
    mid.y = lerp(a.y, b.y, 0.5);
    dashedRecursiveLine(a, mid, 4);
    dashedRecursiveLine(mid, b, 4);
  }
}
