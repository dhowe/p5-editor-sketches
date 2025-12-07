let peaks, song, size = 0, scale = 3;

function preload() {
  song = loadSound("beat.mp3");
}

function setup() {
  createCanvas(400, 400);
  peaks = song.getPeaks();
}

function draw() {
  background(255, 50);

  if (song.isPlaying()) {
    
    // where are we in the sample?
    let current = song.currentTime() / song.duration();
    
    // get the sample value for that position
    let val = peaks[floor(current * peaks.length)];
    
    // map it to the width of the circle
    let newSize = map(abs(val), 0, 1, 0, width) * scale;
    
    // smooth the motion with lerp
    size = lerp(size, newSize, 0.15);
    
    fill(0);
    circle(width / 2, height / 2, size);
  }
}

function mouseClicked() {
  //print('ok', song.isPlaying());
  if (!song.isPlaying()) {
    song.loop();
  } else {
    song.stop();
  }
}
