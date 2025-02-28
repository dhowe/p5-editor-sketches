let lines;
let frequency = {};

function preload() {
  lines = loadStrings('poem.txt');
}

function setup() {
  createCanvas(400, 400);
  let txt = lines.join(" ");
  for (let i = 0; i < txt.length; i++) {
    let letter = txt[i];
    if (!frequency[letter]) {
      frequency[letter] = 0;
    }
    frequency[letter] += 1;
  }
  let keys = Object.keys(frequency);
  keys.sort();
  console.log(keys);
  
}

// function draw() {
//   background(220);
// }