function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
   
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 30; j++) {
      let x = i * 20, y = j * 20;
      
      push();
      translate(x + 10, y + 10); // center of cell
      let angle = noise(i * 0.1, j * 0.1, frameCount * 0.01) * TWO_PI; 
      rotate(angle);
      stroke(0);
      line(0, -8, 0, 8); // vertical line
      line(0, -8, -4, -4); // left arrowhead
      line(0, -8, 4, -4); // right arrowhead
      pop();
    }
  }
}
