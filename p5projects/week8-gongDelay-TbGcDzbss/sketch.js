let mysound, mydelay;

function preload() {
  mysound = loadSound("https://tonejs.github.io/audio/berklee/gong_1.mp3");
}

function setup() {
  createCanvas(360, 200);

  background(230);
  text("Tap to play the sound with Delay", 10, 20);

  let mydelay = new p5.Delay(0.25, 0.7);
  mysound.connect(mydelay);
}

function mousePressed() {
  mysound.play();
  mysound.rate(random(0.2, 2));
}
