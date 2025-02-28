let noteIdx = 0, ms = 0, note = 65, noteDelay = 100; 
let notes, osc, reverb, envelope, fft, noteW;
let changeMelodyOverTime = true;

function setup() {
  createCanvas(600, 400);
  initSound();
  mapLSysToNotes("F-G+F+G-F-GG+F-G+F+G-F+GG-F-G+F+G-F-GGGG");
}

function draw() {
  background(0);

  // play a note every noteDelay ms
  if (millis() - ms > noteDelay) {
    playNote();
  }
  drawFFT();
  drawNotes();
}

function mapLSysToNotes(str) {
  notes = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "F") {
      note = note - random([-2, 0, 2]);
    } else if (str[i] === "G") {
      notes.push(0); // rest
      continue;
    } else if (str[i] === "-") {
      note += 2;
    } else if (str[i] === "+") {
      note -= 2;
    }
    notes.push(note);
  }
  noteW = width / (notes.length + 1); // layout
}

function drawNotes() {
  noStroke();
  textFont("Courier", 9);
  notes.forEach((n, i) => {
    text(n ? n : "—", i * noteW + (n ? 5 : 8), 145);
  });
  if (notes[noteIdx]) {
    // selected note
    stroke(200, 0, 0);
    noFill();
    rect(noteIdx * noteW + 3, 135, textWidth("aa") + 4, 14);
    fill(255);
    noStroke();
    text(notes[noteIdx], noteIdx * noteW + 5, 145);
  }
}

function playNote() {
  let midiValue = notes[noteIdx];
  if (midiValue) {
    let freqValue = midiToFreq(midiValue);
    osc.freq(freqValue);
    envelope.play(osc, 0, 0.1);
  }
  noteIdx = ++noteIdx % notes.length;
  if (noteIdx === 0) adjustMelody();
  ms = millis();
}

function adjustMelody() {
  if (!changeMelodyOverTime) return;
  let shift = random([-2, 7, 0, 0, 0, 5 ]);
  let shiftRest = false;
  notes.forEach((n, i) => {
    if (!notes[i]) {
      if (!shiftRest && random() < 0.2) {
        notes[i] = random([60, 65, 67, 72]);
        notes[floor(random(notes.length))] = 0;
        shiftRest = true; // move the rest
      }  
    } else {
      notes[i] += shift;
    }
    if (notes[i] > 90) notes[i] -= 36;
    if (notes[i] && notes[i] < 48) notes[i] += 36;
  });
}

function initSound() {
  osc = new p5.SinOsc();
  reverb = new p5.Reverb();
  envelope = new p5.Envelope();

  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0.03, 0.05, 0.5, 0);

  // set attackLevel, releaseLevel
  envelope.setRange(.1, 0);

  reverb.process(osc, 10, 150);
  osc.start();
  
  fft = new p5.FFT();
}

function drawFFT() {   // visual bands

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
