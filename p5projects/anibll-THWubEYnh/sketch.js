function setup() {
  createCanvas(400, 400);
  frameRate(10);
//  createLoop({duration:2, gif:true});
}
function draw() {
  background(230);
  noFill();
  let y = 0;
  while (y < 20) {
    let x = 0;
    while (x < y + 1) {
      circle(width-x * 20 - 10, y * 20 + 10, 20);
      x++;
    }
    y++;
  }
  
  let ball = (frameCount-1) % 20;
  let yy = ball * 20 - 10;
  let xx = width-(ball * 20 - 10);
  fill(200,0,0);
  circle(xx, yy, 20);
}
