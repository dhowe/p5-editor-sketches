function setup() {

  createCanvas(600, 800);
  rectMode(CENTER);
  blendMode(MULTIPLY);
}

function draw() {
  background(255, 64);
  
  let w = (width - 100) / 12;
  let h = (height - 100) / 12;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = 50+(j + 1.5) * w + random(-5, 5)
      let y = 50+(i + 1.5) * h + random(-5, 5);
      strokeWeight(noise(frameCount/120) * 2 + .5);
      stroke(
        cos(frameCount / 99) * 127 + 127,//0, //i + j * 30, 
        cos(frameCount / 99) * 127 + 127,0,
        100 + sin(frameCount / 98) * 30);
      fill(
        noise(i+j+frameCount/100) * 255-100,
        noise(i+j+frameCount/90) * 20);
      rect(x + sin(i + j + frameCount / 100) * 10,
        y + sin(i + j*10 + frameCount / 99) * 10,
        w, h);
    }
  }
  filter(DILATE);
}