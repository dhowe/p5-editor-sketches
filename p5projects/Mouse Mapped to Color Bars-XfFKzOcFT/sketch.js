function setup() {
  createCanvas(512, 400);
  noStroke();
}

function draw() {

  let numBars = map(mouseX, 0, width, 0, width/4);
  let barWidth = width / numBars;

  for (let i = 0; i < numBars; i++) {
    
    let c = map(i, 0, numBars - 1, 0, 255);
    
    fill(c);
    rect(i * barWidth, 0, barWidth, height);
  }
}
