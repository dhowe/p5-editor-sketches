
// json colors from https://json-color-palette-generator.vercel.app/
let greens = {
  "New_Color50": "#7bffb4",
  "New_Color100": "#32f988",
  "New_Color200": "#07d560",
  "New_Color300": "#109d4d",
  "New_Color400": "#136a39"
}

let colors;

function setup() {
  
  createCanvas(400, 400);
  
  // map rawColors to an array of color objects
  colors = Object.values(greens).map(c => color(c));
  
  frameRate(1);
}

function draw() {
  
  let bg = random(colors);
  
  background(bg);
}

