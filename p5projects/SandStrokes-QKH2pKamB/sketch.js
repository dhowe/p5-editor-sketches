let thicks, thicks1, maxAmp = 50, wobble = 20;

function setup() {
  createCanvas(400, 200);
  noStroke();
  thicks = genThicknesses(width);
  thicks1 = genThicknesses1(width);
  //print(thicknesses)
}

function draw() {
  background(250);
  thicks.forEach((t,i,arr) => {
    fill(0, 255 * 1/t);
    let h = t;
    let x = map(i, 0, arr.length, 0, width);
    rect(x,height*.333-h/2,width/arr.length, h);
  });
  thicks1.forEach((t,i,arr) => {
    fill(0, 255 * 1/t);
    let h = t;
    let x = map(i, 0, arr.length, 0, width);
    rect(x,height*.666-h/2,width/arr.length, h);
  });
}

function genThicknesses(length) {
  let value = 0, output = [];
  while (output.length < length) {
    value += -(wobble/2) + random(wobble);
    value = constrain(value, -maxAmp, maxAmp);
    output.push(abs(value));
  }
  return output;
}

function genThicknesses1(length) {
  let offset = random(99999);
  return Array.from({length}, 
    (e,i) => maxAmp * noise(offset + (i / (wobble/4))));
}
