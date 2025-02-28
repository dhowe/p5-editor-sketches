// Sierpinski Triangle

function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0);
  
  // Initial equilateral triangle vertices
  let bottomLeft = [0, height];
  let bottomRight = [width, height];
  let top = [width/2, height - (height * Math.sqrt(3)) / 2]; // Calculate height for equilateral triangle
  
  // Draw the initial triangle
  drawTriangle(bottomLeft, bottomRight, top);
  
  // Start the recursive process
  sierpinski(bottomLeft, bottomRight, top);
}

function sierpinski(p1, p2, p3, depth = 0) {
  
  // Calculate midpoints of each side
  let m1 = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
  let m2 = [(p2[0] + p3[0]) / 2, (p2[1] + p3[1]) / 2];
  let m3 = [(p3[0] + p1[0]) / 2, (p3[1] + p1[1]) / 2];

  // Stop when the triangle is too small (side length < 4)
  if (dist(p1[0], p1[1], p2[0], p2[1]) < 4) {
    
    // Draw the central triangle
    drawTriangle(m1, m2, m3); 
    return;
  }
  
  // Recursively process the three outer triangles
  sierpinski(p1, m1, m3);
  sierpinski(m1, p2, m2);
  sierpinski(m3, m2, p3);
}

function drawTriangle(p1, p2, p3) {
  triangle(p1[0], p1[1], p2[0], p2[1] ,p3[0], p3[1]);
}