function setup() {
  createCanvas(400, 400);
  background(200);
  fill(0);

  let p1 = { x: 50, y: 20 };
  let p2 = { x: 390, y: 370 };
  let curviness = 0.1; // 0 - 0.7
  recursiveLine(p1, p2, curviness); 
  
  fill('red'); // endpoints
  circle(p1.x, p1.y, 5);
  circle(p2.x, p2.y, 5);
}

// draws a natural line between two pts
// using recursion and randomness
function recursiveLine(p1, p2, wiggle) {

  // are our 2 points far away from each other?
  if (dist(p1.x, p1.y, p2.x, p2.y) > 3) {
    
    // if so create a midpoint that divides the line in two
    let mp = {
      x: lerp(p1.x, p2.x, random(0.5 - wiggle, 0.5 + wiggle)),
      y: lerp(p1.y, p2.y, random(0.5 - wiggle, 0.5 + wiggle)),
    };

    // call the function with the two shorter lines
    recursiveLine(p1, mp, wiggle);
    recursiveLine(mp, p2, wiggle);
    
  } else {
    
    // we're close, just draw a circle
    circle(p1.x, p1.y, 3);
  }
}
