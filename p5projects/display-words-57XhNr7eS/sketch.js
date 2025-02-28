
let lines, words;

function preload() {
  lines = loadStrings('https://rednoise.org/sketches/NewBlood/poem.txt');
}

function setup() {
  createCanvas(500, 360);
  background(0);

  textAlign(LEFT, CENTER);
  textSize(10);
  textFont('Courier New');
  
  // Convert an array of sentences to an array of words
  let txt = lines.join(' ');
  words = txt.split(' ');
}


function draw() {
  background(200, 20);

  for (let i = 0; i < words.length; i++) {
    let x = random(width);
    let y = random(height);
    fill(0, 0, 0);
    text(words[i], x, y);
  }
}

