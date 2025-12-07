// array of palettes
let palettes = [
  {
    New_Color50: "#7bffb4",
    New_Color100: "#32f988",
    New_Color200: "#07d560",
    New_Color300: "#109d4d",
    New_Color400: "#136a39",
  },
  {
    New_Color50: "#847bff",
    New_Color100: "#3f32f9",
    New_Color200: "#1407d5",
    New_Color300: "#19109d",
    New_Color400: "#19136a",
  },
];

let palette, colors;

function setup() {
  createCanvas(400, 400);

  // pick a random pallete
  palette = random(palettes);
  
  // get all the colors for that palette
  colors = Object.values(palette).map((c) => color(c));
  
  frameRate(1);
}

function draw() {
  
  let bg = random(colors); // pick a random
  background(bg);
}
