let sz = 50; // size of circle

function setup() {
  createCanvas(500, 500);
  noFill();
}

function draw() {
  background(240);
  for (let j = 0; j < 10; j++) {  // grid of small circles
    for (let i = 0; i < 10; i++) {
      
      let cx = i * sz; // x-pos for current small circle
      let cy = j * sz; // y-pos for current small circle
      
      // is the distance to origin < radius of big circle
      let isActive = dist(0,0, cx,cy) < frameCount/2;
      
      // if so, make the circle bigger
      circle(i * sz, j * sz, isActive ? 10 : 5);
    }
  }
  
  circle(0, 0, frameCount); // draw big circle
}
