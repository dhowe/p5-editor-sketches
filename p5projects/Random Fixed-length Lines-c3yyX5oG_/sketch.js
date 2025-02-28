// 100 random lines of length=200, all onscreen
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(200);
  noFill();
  
  for(let i = 0; i < 20; i++) {
    
    // pick a random first point
    let p1 = {x: random(width), y: random(height)};
    
    // and a random angle from 0-360
    let ang = random(360);
  
    // check angles around circle
    for (let i = 0; i < 360; i+= 10) {
      
      let p2  = pointAtAngleDist(p1, ang + i, 200);
      
      // if the point is inside the canvas, draw it
      if(p2.x >= 0 && p2.x <= width && p2.y >= 0 && p2.y <= height) {
        
        line(p1.x, p1.y, p2.x, p2.y);
        
        break; // exit the loop
      }
      
      // otherwise loop again and try the next angle
    } 
  }
}

// returns the point following the 'angle' specified
// at a distance of 'distance'
function pointAtAngleDist(p, angle, distance) {
  return {
    x: p.x + cos(angle) * distance,
    y: p.y + sin(angle) * distance,
  };
}
