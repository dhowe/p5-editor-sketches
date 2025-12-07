// random notes on a timer
let myosc, lastNoteMs = 0;

function setup() {
  createCanvas(512, 400);
  background(0);
  noStroke();
  myosc = new p5.Oscillator("sine");
}

function draw() {
  if (millis() - lastNoteMs > 250) {
    background(0,10)
    nextNote();
  }
}

function nextNote() {
  let rest = random() > 0.1;
  
  if (!rest) {
    
    // play a random chromatic note
    let note = floor(random(44, 70));
    
    myosc.freq(midiToFreq(note));
    myosc.amp(0.5, 0.1);


    let x = map(note, 44, 70, 0, 255);
    stroke(x);
    strokeWeight(random(10,30));

    line(x*2, 0, x*2, height);

    lastNoteMs = millis();
  }
}

function mousePressed() {
  // to avoid warnings from Context suspension
  myosc.start();
}
