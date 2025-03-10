// Graphing Sine Wave (Playing With Period)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/JLAc9hMtcxk
// https://thecodingtrain.com/learning/nature-of-code/3.6-graphing-sine.html

// Sine Wave Graph Exercise: https://editor.p5js.org/codingtrain/sketches/EIbEYLTaZ
// Playing With Period: https://editor.p5js.org/codingtrain/sketches/SbRC-G0lU
// Graphing Wave: https://editor.p5js.org/codingtrain/sketches/c_S9jiXz-
// Circular Wave Exercise: https://editor.p5js.org/codingtrain/sketches/mOm2Is7ba

let angles = [];
let angleV = [];
let r = 16;

function setup() {
  createCanvas(600, 400, WEBGL);
  let total = floor(width / (r * 2));
  for (let i = 0; i < total; i++) {
    angles[i] = 0;
    angleV[i] = 0.01 + i / 100;
  }
}

function draw() {
  background(0);
  translate(300, 200);
  fill(252, 238, 33);
  stroke(252, 238, 33);
  for (let i = 0; i < angles.length; i++) {
    let y = map(sin(angles[i]), -1, 1, -200, 200);
    strokeWeight(4);
    let x = map(i, 0, angles.length, -300, 300);
    line(x, 0, x, y);
    circle(x, y, r * 2);
    angles[i] += angleV[i];
  }
  // angle += angleV;
}
