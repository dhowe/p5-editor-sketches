let img;
let w=400;
let h=400;
let x1 = w/2;
let y1 = h/w;

let x2 = w/2;
let y2 = h/2;

  
let xoff = 0.0;
let yoff = 100000.0;

let noiseIncrement = 0.01;
let r =0;
let g =0;
let b =0;

let capturer;
let btn;
let counter = 1;

var loopMax=1;
var count=1;
function setup() {
  frameRate(30);
  createCanvas(w, h);

  background(252,252,252,128);
  x1 = map(noise(xoff),0,1,0,w);
  y1 = map(noise(yoff),0,1,0,h);
  
  var imageUrls = [
    "https://i.imgur.com/7Gd38uf.jpg",
    "https://i.imgur.com/7VUnown.jpg",
    "https://i.imgur.com/5rDxIUT.jpg",
    "https://i.imgur.com/6rUvhvu.jpg",
    "https://i.imgur.com/LkdTNGx.jpg",
    "https://i.imgur.com/VGUFDPM.jpg",
    "https://i.imgur.com/7R6pdNx.jpg",
    "https://i.imgur.com/6J31UdB.jpg",
    "https://i.imgur.com/dOQHVXD.jpg"
  ];
  var randomImage = random(imageUrls);
  img = loadImage(randomImage);


  // background(0);
}

function keyPressed() {
  loop();
}

function draw() {
  
  for (i=1; i <= loopMax; i++) {
    xoff += noiseIncrement;
    yoff += noiseIncrement;
    x2 = map(noise(xoff),0,1,0,w);
    y2 = map(noise(yoff),0,1,0,h);
	rgb = img.get(x2,y2);
    r=red(rgb);
    g=green(rgb);
    b=blue(rgb);
    stroke(r,g,b);
    strokeWeight(0.5);
    line(x1,y1,x2,y2);
    x1=x2;
    y1=y2;
  }
  count += 1;
  if (count > 60) {
    loopMax ++;
  }
  if (count > 240 && count < 500) {
    loopMax = 2;
  }
  loopMax = max(loopMax, 4);
  // fill(255);
  // rect(width-20,0,100,30);
  // text(loopMax,width-20,20);
  // noLoop();
}