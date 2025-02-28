//VISUAL
let video;
let handPose;
let hands = [];
let lThumb = 0;
let rThumb = 0;
let lIndex = 0;
let rIndex = 0;
let rDist = 0;
let lDist = 0;
let IndexDist = 0;
let thumbDist = 0;
//AUDIO
let mic, FX1, FX2;

function preload() {
  handPose = ml5.handPose({ flipped: true });
}

function mousePressed() {
  console.log(hands);
}

function gotHands(results) {
  hands = results;
}

function setup() {
  rectMode(CENTER);
  createCanvas(640, 480);
  //VISUAL
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  handPose.detectStart(video, gotHands);
  //AUDIO
  mic = new Tone.UserMedia();
  //EFFECTS
  //FX1
  FX1 = FX1_build();
  //FX2
  FX2 = FX2_build();
  //GLOBAL CHAIN
  mic.connect(FX1.chain);
  FX1.chain.connect(FX2.chain);
  FX2.chain.toDestination();

  //START
  let startButton = createButton("Start Audio");
  startButton.position(10, 10);
  startButton.mousePressed(() => {
    console.log('start')
    Tone.start();
    mic
      .open()
      .then(() => {
        console.log("Microphone is active");
      })
      .catch((e) => {
        //why the fuck e?!
        console.error("Microphone access denied", e);
      });
  });
}

function draw() {
  noStroke();
  image(video, 0, 0);
  for (let hand of hands) {
    if (hands.length > 0) {
      if (hand.handedness == "Left") {
        lThumb = hand.thumb_tip;
        lIndex = hand.index_finger_tip;
        drawSquare(lThumb.x, lThumb.y);
        drawSquare(lIndex.x, lIndex.y);
      } else {
        rThumb = hand.thumb_tip;
        rIndex = hand.index_finger_tip;
        drawSquare(rThumb.x, rThumb.y);
        drawSquare(rIndex.x, rIndex.y);
      }
    }
    // console.log('lThumb.x'+lThumb.x);
    if (lThumb && lIndex && rThumb && rIndex) {
      lDist = dist(lThumb.x, lThumb.y, lIndex.x, lIndex.y);
      rDist = dist(rThumb.x, rThumb.y, rIndex.x, rIndex.y);
      indexDist = dist(lIndex.x, lIndex.y, rIndex.x, rIndex.y);
      //console.log("Index Distance: " + indexDist);
      thumbDist = dist(lThumb.x, lThumb.y, rThumb.x, rThumb.y);
      //console.log("Thumb Distance: " + thumbDist);
    } else {
      console.log("waiting for my hands!");
    }
    if (lDist && rDist) {
      //CONSTRAIN AND MAP
      lDist = constrain(map(lDist, 0, height, 0, 1), 0, 1);
      rDist = constrain(map(rDist, 0, height, 0, 1), 0, 1);
      console.log("lDist:", lDist, "rDist:", rDist);
      FX1_Param(lDist);
      FX2_Param(rDist);
    } else {
      FX1_Param(0);
      FX2_Param(0);
    }
  }

  stroke(255, 255, 255);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(lThumb.x, lThumb.y);
  vertex(lIndex.x, lIndex.y);
  vertex(rThumb.x, rThumb.y);
  vertex(rIndex.x, rIndex.y);
  endShape(CLOSE);
}

function FX1_build() {
  let distort = new Tone.Distortion({ distortion: 0.1, wet: 0 });
  let delay = new Tone.PingPongDelay({ delayTime: 0.2, feedback: 0.2, wet: 0 });
  //p5 is confusing reverb and reverse, so I'm naming it differently
  let fishReverb = new Tone.Freeverb({ preDelay: 0.3, decay: 2.4, wet: 0 });
  let tailDistort = new Tone.Distortion({
    distortion: 0.05,
    oversample: "2x",
    wet: 0,
  });

  //CHAIN
  distort.connect(delay);
  delay.connect(fishReverb);
  fishReverb.connect(tailDistort);
  return {
    chain: tailDistort,
    params: { distort, delay, fishReverb, tailDistort },
  };
}

function FX1_Param(x) {
  FX1.params.fishReverb.wet.value = x * 0.3;
  FX1.params.delay.wet.value = x * 0.4;
  FX1.params.tailDistort.wet.value = x * 0.15;
}

function FX2_build() {
  let pitchShift1 = new Tone.PitchShift({ pitch: 12, wet: 1 });
  let panner1 = new Tone.Panner(0.5);
  let gain1 = new Tone.Gain(0.5);
  let pitchShift2 = new Tone.PitchShift({ pitch: 5, wet: 1 });
  let panner2 = new Tone.Panner(-0.5);
  let gain2 = new Tone.Gain(0.5);
  let merger = new Tone.Gain();
  //CHAIN
  panner1.connect(gain1);
  panner2.connect(gain2);
  panner1.connect(merger);
  panner2.connect(merger);
  return {
    chain: merger,
    params: { pitchShift1, pitchShift2 },
  };
}
function FX2_Param(x) {
  FX2.params.pitchShift1.wet.value = x;
  FX2.params.pitchShift2.wet.value = x;
}

function drawSquare(x, y) {
  fill(255, 255, 255);
  square(x, y, 5);
  fill(255, 255, 255, 130);
  square(x, y, 15);
  fill(255, 255, 255, 40);
  square(x, y, 40);
}
