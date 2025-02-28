function setup() {

  createCanvas(600, 800);
  rectMode(CENTER);
}

function draw() {

  if (frameCount % 60 < 1) {
    background(200, 64);
    blendMode(MULTIPLY);
  } else {
    background(255, 64);
  }
    background(255, 64);
//
  let k = 0;
  let w = (width + 100) / 12;
  let h = (height + 150) / 12;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = -50 + (j + 1.5) * w + random(-1, 1) +
        sin(k + frameCount / 100) * 120;
      let y = -75 + (i + 1.5) * h + random(-1, 1) +
        sin(k + frameCount / 99) * 120;
      let rw = w * (1 + noise(k + frameCount / 200));
      let rh = h * (1 + noise(k + frameCount / 110));
      strokeWeight(noise(frameCount / 120) / 2 + .6);
      stroke( //sin(frameCount / 100) * 127 + 127, 
        cos(frameCount / 99) * 127 + 127, //0, //i + j * 30, 
        0,
        cos(frameCount / 90) * 127 + 127,
        255); //30+sin(frameCount / 98) * 30);
      fill(155+noise(frameCount / 90) * 100,
        //noise(frameCount / 100) * 255 - 120,
         noise(frameCount / 90) * 20);
      rect(x, y, rw, rh);
      stroke( //sin(frameCount / 100) * 127 + 127, 
        cos(frameCount / 99) * 127 + 127, //0, //i + j * 30, 
        cos(frameCount / 90) * 127 + 127,
        0,
        255); //30+sin(frameCount / 98) * 30);
      noFill();
      rect(x, y, rw, rh);
      k++;
    }
  }
  //filter(DILATE);
  filter(DILATE);
}