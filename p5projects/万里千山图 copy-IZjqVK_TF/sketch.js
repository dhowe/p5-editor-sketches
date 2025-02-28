//syntax: x = x axis of screen, mountainY = y axis of mountain

let bamboo;
let mountain;
let bGround;

// Load the image and create a p5.Image object.
function preload() {
  bamboo = loadImage('bamboo.png');
  mountain = loadImage('mountain.png');
  bGround = loadImage('bGround.png');
}

function setup() {
  createCanvas(400, 500);
}

function draw() {
  //background(186, 159, 100);
  background(bGround);
  //set background gradient
  //the for loop is a vertical gradient for the background
  // for (let y = 0; y < height / 2; y++) {
  //   let inter = map(y, 0, height / 2, 0, 1);
  //   let c = lerpColor(color(118, 112, 86), color(186, 159, 100), inter);
  //   stroke(c);
  //   line(0, y, width, y);
  // }

  let noiseLevel = 400;
  let noiseScale = 0.02;

  //mountain1+2, aka the background mountains
  //this for loop is horizontal, to print the shape of the mountain

  for (let x = 0; x < width; x += 1.3) {
    let nx = noiseScale * x;
    let nt = (noiseScale * frameCount) / 1.4;
    let mountainY1 = noiseLevel * noise(nx, nt)-20;
    let outlineY1 = noiseLevel * noise(nx, nt + 0.04)-20;
    let mountainY2 = noiseLevel * noise(nx, nt + 0.3) + 60;
    let outlineY2 = noiseLevel * noise(nx, nt + 0.33) + 60;

    //draw mountain 1
    stroke(171, 150, 94);
    line(x, height, x, mountainY1);

    //outline mountain1
    stroke(50, 61, 23);
    strokeWeight(1);
    point(x, outlineY1);

    //draw mountain 2
    stroke(130, 134, 85);
    line(x, height, x, mountainY2);

    //outline mountain2
    stroke(47, 38, 31);
    strokeWeight(1.7);
    point(x, outlineY2);

    strokeWeight(1);

    //vertical gradient mountain1
    //this for loop is a vertical gradient, from the tip of the mountain to the bottom of the screen
    //this is a nested loop
    for (let y = mountainY1; y < mountainY1 + 70; y += 6) {
      let alpha = map(y, mountainY1, mountainY1 + 70, 255, 0);
      stroke(129, 132, 80, alpha);
      line(x, y, x, y + 5);
    }

    //vertical gradient mountain2
    //nested loop
    for (let y = mountainY2; y < mountainY2 + 70; y += 6) {
      let alpha = map(y, mountainY2, mountainY2 + 70, 255, 0);
      stroke(43, 91, 178, alpha);
      line(x, y, x, y + 5);
      stroke(60, 129, 242, alpha - 35);
      line(x, y, x, y + 5);
    }
  }

  //drawing mountain3 seperately to avoid over lapping, the foreground mountain
  for (let x = 0; x < width; x += 0.5) {
    let nx = noiseScale * x;
    let nt = (noiseScale * frameCount) / 1.4;
    let mountainY3 = noiseLevel * noise(nx, nt + 0.7) + 140;
    let outlineY3 = noiseLevel * noise(nx, nt + 0.74) + 140;

    //draw mountain 3
    stroke(164, 137, 89);
    line(x, height, x, mountainY3);

    
    //vertical gradient mountain3
    //nested loop
    for (let y = mountainY3; y < mountainY3 + 100; y += 6) {
      let alpha = map(y, mountainY3, mountainY3 + 100, 255, 0);
      stroke(130, 148, 113, alpha);
      line(x, y, x, y + 5);
    }

    //outline mountain 3
    stroke(37, 50, 72);
    strokeWeight(1.5);
    point(x, outlineY3);
  }
    tint(48, 50, 32, 130);
    image(bamboo, -130, 0);
    tint(48, 50, 32, 255);
    image(mountain, 0, 0);
}
