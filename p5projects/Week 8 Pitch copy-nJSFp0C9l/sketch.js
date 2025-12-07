
let sound;

function preload() {
  sound = loadSound("femalevoices_aa2_C5.wav");
}

function setup() {
  createCanvas(400, 400);
  
  // pitchShifter = new p5.PitchShifter();
  
  // sound.disconnect();
  // sound.connect(pitchShifter);

  sound.loop();
  console.log(typeof sound.rate);
}

function draw() {
  background(220);

   if (sound.isPlaying()) {
     
      // SET pitch with mouse
      // let pitch = map(mouseX, 0, width, -5, 5);
      // pitchShifter.shift(pitch);

      let soundRate = map(mouseY, 0, height, 0, 3.4);
      sound.soundfile.playbackRate = soundRate;

      textSize(20);
      textAlign(CENTER);
      // text(`Pitch: ${pitch}`, width/2, height/2);
   }
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

// let noise, osc, env, reverb;
// let randomTime = 0;

// function setup() {
//   describe("a sketch that plays a quick burst of noise through a reverb effect when clicked. each time the decay time of the reverb is changed.");
//   let cnv = createCanvas(100, 100);
//   cnv.mousePressed(playSound);
  
//   noise = new p5.Noise();
//   env = new p5.Envelope(0, 0.1);
//   reverb = new p5.Reverb();
//   noise.disconnect();
//   noise.connect(env);
//   env.disconnect();
//   env.connect(reverb);
//   noise.start();
  
//   textAlign(CENTER);
// }

// function playSound() {
//   randomTime = random(0.1, 3);
//   reverb.set(randomTime);
//   env.play();
// }

// function draw() {
//   background(220);
//   text("click to play", width / 2, 20);
//   text("decay " + round(randomTime, 2), width / 2, 40);
// }
