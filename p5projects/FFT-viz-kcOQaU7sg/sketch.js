let noteIdx = 0;
let notes, osc, reverb, envelope, fft;

function setup() {
  createCanvas(400, 400);
  setupSound();
  generateNotes();
}

function generateNotes() {
  notes = [34, 78, 56, 32, 78, 56, 32];
}

function setupSound() {
  osc = new p5.SinOsc();
  reverb = new p5.Reverb();

  // Instantiate the envelope
  envelope = new p5.Envelope();

  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0.001, 0.05, 0.5, 0);

  // set attackLevel, releaseLevel
  envelope.setRange(1, 0);

  // add the reverb to the synth
  reverb.process(osc, 1, 2);//, 5, 20);

  osc.start();

  // for visuals
  fft = new p5.FFT();
}

function draw() {
  background(0);

  // play a note every 8 frames (about every 133 ms)
  if (frameCount % 12 === 1) {
    let midiValue = notes[noteIdx];
    let freqValue = midiToFreq(midiValue);
    osc.freq(freqValue);

    envelope.play(osc, 0, 0.1);
    noteIdx = ++noteIdx % notes.length;
  }

  // FFT analys for visuals
  translate(0, height / 2);
  let spectrum = fft.analyze();
  let num = floor(spectrum.length / 20);
  for (let i = 0; i < num; i++) {
    fill(spectrum[i] + 60);
    let x = map(i, 0, num - 1, 0, width);
    let h = (pow(spectrum[i] / 255, 10) * height) / 4;
    rect(x, -h, spectrum.length / 200, h * 2);
  }
}
