// A simple synth with a generative melody
// the notes are generated through chaining of a few methods
//
// This sketch demonstrates the workings of:
// Gen.spreadInclusive(), Mod.duplicate(), Util.add()

const Gen = TotalSerialism.Generative;
const Mod = TotalSerialism.Transform;
const Util = TotalSerialism.Utility;

let osc, envelope, fft, reverb;

let notes = [];
let note = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.SinOsc();
  reverb = new p5.Reverb();
  
  // Instantiate the envelope
  envelope = new p5.Envelope();
  
  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0.001, 0.05, 0.5, 0);

  // set attackLevel, releaseLevel
  envelope.setRange(1, 0);

  // add the reverb to the synth
  reverb.process(osc, 25, 50);
  
  osc.start();

  // for visuals
  fft = new p5.FFT();
  rectMode(CENTER);
  noStroke();
  
  // ALGORITHMIC COMPOSITION
  // create a phrase by combining various algorithms
  // from the .Transform module 
  
  // 8 notes between 36 and 60
  notes = Gen.spreadInclusive(8, 36, 60);
  
  // duplicate melody 4 times
  notes = Mod.duplicate(Mod.palindrome(notes), 4); 
  
  // add semitones to every next node from array
  notes = Util.add(notes, [0, 7, 12, 19, 24]);
  console.log(notes); 
}

function drawx() {
  background(0);

  // play a note every 8 frames (about every 133 ms)
  if (frameCount % 8 === 0 || frameCount === 1) {
    let midiValue = notes[note];
    let freqValue = midiToFreq(midiValue);
    osc.freq(freqValue);

    envelope.play(osc, 0, 0.1);
    note = (note + 1) % notes.length;
  }

  // FFT analys for visuals
  translate(0, height/2);
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length / 20; i++) {
    fill(spectrum[i]);
    let x = map(i, 0, spectrum.length / 20, 0, width);
    let h = pow(spectrum[i]/255, 10) * height * 0.9;  
    rect(x, 0, spectrum.length / 100, h);
  }
}
