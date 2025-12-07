let rawColors = [
  [120, 200, 255],
  [0, 200, 30],
  [0, 200, 30],
  [40, 250, 120],
  [0, 240, 10],
];

let colors;

function setup() {
  
  createCanvas(400, 400);
  
  // map rawColors to an array of color objects
  colors = rawColors.map(c => color(...c));
  
  frameRate(1);
}

function draw() {
  
  let bg = random(colors); // pick a random
  
  background(bg);
}

