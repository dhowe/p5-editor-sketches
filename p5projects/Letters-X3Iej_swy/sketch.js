let font;

function preload() {
  font = loadFont('SourceCodePro-Regular.ttf');
}

function setup() {
  createCanvas(710, 400);

  textFont(font);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  let gap = 52, counter = 35;
  for (let y = 40; y < height; y += gap) {
    for (let x = 40; x < width; x += gap) {
      let letter = char(counter++);
      fill(255);
      if (/[AEIOU]/.test(letter)) {
        fill(255, 204, 0);
      } 
      text(letter, x, y);
    }
  }
}