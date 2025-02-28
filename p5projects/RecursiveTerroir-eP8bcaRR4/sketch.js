let ypos = []; // hold y-positions

function setup() {
  
  createCanvas(800, 400);
  background(255);
  
  // create a gradient
  let grad = this.drawingContext.createLinearGradient(0,0,0,height);
  grad.addColorStop(0, 'white');
  grad.addColorStop(1, 'black');
  this.drawingContext.strokeStyle = grad;
  strokeWeight(2);
  
  // set the end points 
  ypos[0] = int(random(height));
  ypos[width] = int(random(height));
  
  // call recursive function
  next(0, width); 
}

function next(start, end) {
  line(start, height, start, ypos[start]);
  line(end, height, end, ypos[end]);
  if (end - start > 2) {
    
    // pick a midpoint
    let nx = lerp(start, end, random(0.3, 0.7));
    let ny = lerp(ypos[start], ypos[end], random(0.3, 0.7));
    ypos[nx] = ny;
    
    // recurse on each end
    next(start, nx);
    next(nx, end);
  }
}
