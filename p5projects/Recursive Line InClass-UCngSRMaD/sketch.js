function setup() {
  createCanvas(400, 400);
  background(220);
  fill(0);
  
  // pass the two endpoints
  recursiveLine({ x: 20, y: 200 }, {x: 380, y: 200});
}

function recursiveLine(a, b) {
  
  let d = dist(a.x, a.y, b.x, b.y);
  
  // if we're very close, just draw a circle 
  if(d < 5) {
    circle(a.x, a.y, 2);
  }
  
  // get the midpoint and make 2 recursive calls
  else {
    let mid = {};
    mid.x = lerp(a.x, b.x, 0.5);
    mid.y = lerp(a.y, b.y, 0.5);
    recursiveLine(a, mid);
    recursiveLine(mid, b);
  }
}
