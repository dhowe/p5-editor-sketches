// Load strings and display letters

let loadLines;
let letterArray = [];

function preload() {
  loadLines = loadStrings('sentences.txt');
}

function setup() {
  createCanvas(300, 300);
  
  for (let i = 0; i < loadLines.length; i++) {
    for (let j = 0; j < loadLines[i].length; j++) {
      x = loadLines[i][j]
      letterArray.push(x);
    }
  }
  
  background(0, 200, 0);
  
  for (let i = 0; i < letterArray.length; i++) {
    textSize(random(30, 80));
    text(letterArray[i], random(0, width), random(0, height));
  }
}


