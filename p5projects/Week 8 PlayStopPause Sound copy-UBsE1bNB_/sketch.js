let sound;

function preload() {
  sound = loadSound("drum_beat.wav");
}

function setup() {
  createCanvas(400, 400);
  background(220);
  sound.loop();
}


function mousePressed() {
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}

function keyPressed() {
  if (key == " ") {
    if (sound.isPlaying()) {
      sound.pause();
    } else {
      sound.play();
    }
  }
}