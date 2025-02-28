// Exercise to show letters from poem.txt with size according to frequency in corpus

let lines;
let txt = "";
let frequency = {};
let textLink = "https://rednoise.org/sketches/NewBlood/poem.txt";

function preload() {
  lines = loadStrings(textLink);
}

function setup() {
  createCanvas(400, 600);
  background(30);
  textFont('Courier New', 16);
  fill(255);
  
  txt = lines.join(' ');
  
  for (let i = 0; i < txt.length; i++) {
    let letter = txt[i];
    if (!frequency[letter]) {
      frequency[letter] = 0;
    }
    frequency[letter]++;
  }
  console.log(frequency);
}


function draw() {
  background(30, 10);
  
  for (let letter in frequency) {
    let x = random(width);
    let y = random(height);

    fill(255, 255, 255); 

    let letterSize = map(
      frequency[letter], 
      1, 
      max(Object.values(frequency)), 
      10, 
      70
    );

    textSize(letterSize);
    text(letter, x, y);
  }
}

