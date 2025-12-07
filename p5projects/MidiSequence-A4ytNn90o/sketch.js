let mOsc;
let mLfo;

let notes = {
  a: 57,
  b: 59,
  c: 60,
  d: 62,
  e: 64,
  f: 65,
  g: 67,
};

let NOTE_RAMP = 0.05;
let NOTE_DURATION = 0.3;
let NOTE_TOTAL = 2 * NOTE_RAMP + NOTE_DURATION;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  textFont('tahoma', 200);
  textAlign(CENTER, CENTER);

  mOsc = new p5.Oscillator("sine");
  mOsc.disconnect();
  mOsc.freq(0);
  mOsc.amp(0.0);

  mLfo = new p5.Oscillator("sine");
  mLfo.disconnect();
  mLfo.freq(0);
  mLfo.amp(60);
  mLfo.start();

  mOsc.connect(p5.SoundOut);
  mOsc.freq(mLfo);
  mOsc.start();

  background(220, 20, 120);
}

function keyTyped() {
  if (key in notes) {
    mOsc.amp(0);
    let mF = notes[key];
    
    mOsc.freq(midiToFreq(mF));
    mLfo.freq(midiToFreq(mF) / 3);
    
    mOsc.amp(1, NOTE_RAMP);
    mOsc.amp(0, NOTE_RAMP, NOTE_RAMP + NOTE_DURATION);
    
    background(220, 20, 120);
    text(mF, width/2, height/2);
  }
}