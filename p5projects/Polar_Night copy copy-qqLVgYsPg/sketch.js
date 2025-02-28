var flowfield;
var flowfield2;
var flowfield3;
var flowfield4;

var greens = []; //Aurora 1
var pink = []; //Aurora 2
var blues = []; //Aurora 3
var reds = []; //Aurora 4

let img; //mountain scenery
var stars = [700];
var debug = true; //in case something doesn't work

var amp;
var scl;

var greenaurora = false;
var pinkaurora = false;
var blueaurora = false;
var redaurora = false;
var text = true;
var song;

function preload() {
  img = loadImage("mountain4.png"); //loads backgound picture of mountains
  song = loadSound('Adagioindminor.mp3');
}

function setup() {
  //fullscreen(P2D);  //not sure whether that works with p5?
  createCanvas(800,600);1

  for (let i = 0; i < 700; i++) { //creates background stars
    stars[i] = new Stars();
  }

  if (img) img.resize(width, 0); //resizes image to fit any screen

  //Adagio in D Minor plays in the background
  if (song) {
    song.loop(); //repeats song infinitely
    amplitude = new p5.Amplitude(); //anaylse song amplitude
    amp = amplitude.getLevel();
  }

  //initialise flowfields for the particles
  flowfield = new FlowField(19);
  flowfield2 = new FlowField(15);
  flowfield3 = new FlowField(16);
  flowfield4 = new FlowField(19);
  flowfield.update();
  flowfield2.update();
  flowfield3.update();
  flowfield4.update();


  //create aurorae

  for (let i = 0; i < 1000; i++) {
    let start = createVector(width, random(200, 300));
    append(greens, new Aurora(1, start, 400, random(2, 10), 0, color(0, 234, 141, 70), random(100, 600)));
  }

  for (let i = 0; i < 1000; i++) {
    let start = createVector(width, random(0, 200));
    append(pink, new Aurora(2, start, 550, random(2, 6), 10, color(141, 0, 196, 60), random(300, 600)));
  }

  for (let i = 0; i < 1000; i++) {
    let start = createVector(width, random(0, 400));
    append(blues, new Aurora(3, start, 600, random(6, 8), 10, color(64, 224, 208, 70), random(300, 600)));
  }

  for (let i = 0; i < 1000; i++) {
    let start = createVector(width, random(0, 300));
    append(reds, new Aurora(4, start, 650, random(6, 8), 10, color(210, 32, 52, 90), random(400, 700)));
  }
}

function draw() {
  //first: display text, if key is pressed display different aurorae depending on keys
  //scl = map(level, 0, 0.1, 0, 1000);
  if (keyIsPressed) {
    if (key == '1') {
      if (greenaurora) {
        greenaurora = false;
      } else {
        greenaurora = true;
      }
      text = false;
    } else if (key == '2') {
      if (pinkaurora) {
        pinkaurora = false;
      } else {
        pinkaurora = true;
      }
      text = false;
    } else if (key == '3') {
      if (blueaurora) {
        blueaurora = false;
      } else {
        blueaurora = true;
      }
      text = false;
    } else if (key == '4') {
      if (redaurora) {
        redaurora = false;
      } else {
        redaurora = true;
      }
      text = false;
    } else if (key == 'p') {
      saveFrame();
      text = false;
    }
  }


  background(70 - (millis() / 400), 5 - millis() / 5, 200 - (millis() / 500) * 3, 90); //gradient nightsky blue

  //twinkling stars
  for (let i = 0; i < 700; i++) {
    stars[i].display(255, random(40, 80));
  }
  image(img, 0, height / 2); //display background image

  //update & display flowfields in case of debug scenario
  flowfield.update();
  flowfield2.update();
  flowfield3.update();
  flowfield4.update();

  if (debug) flowfield.display();
  if (debug) flowfield2.display();
  if (debug) flowfield3.display();
  if (debug) flowfield4.display();

  //display different aurorae, each particle for the time of its lifespan
  if (greenaurora) {
    var greenLength = greens.length;
    for (let i = 0; i < greenLength; i++) {
      greens[i].follow(flowfield);
      greens[i].run();
    }

    if (scl > 300) {
      for (let j = 0; j < scl; j += 30) {
        let start = createVector(width, random(200, 300));
        //constructor(flowfield, pos, h, maxSpeed, off, co, lifestart, lifeend) {
        greens.add(new Aurora(flowfield1, start, 400, random(2, 10), 0, color(0, 234, 141, 70), random(100, 600)));
      }
    }

    for (let i = greenLength - 1; i > 0; i--) {
      if (greens[i].isDead()) {
        delete greens[i];
      }
    }
  }

  if (pinkaurora) {
    var pinkLength = pink.length;
    for (let i = 0; i < pinkLength; i++) {
      pink[i].follow(flowfield2);
      pink[i].run();
    }
    if (scl > 600) {
      for (var j = 0; j < scl; j += 30) {
        let start = createVector(width, random(200, 300));
        pink.add(new Aurora(flowfield2, start, 550, random(2, 6), 10, color(141, 0, 196, 60), random(300, 600)));
      }
    }
    for (var i = pinkLength - 1; i > 0; i--) {
      if (pink[i].isDead()) {
        delete pink[i];
      }
    }
  }

  if (blueaurora) {
    var blueLength = blues.length;
    for (let i = 0; i < blueLength; i++) {
      blues[i].follow(flowfield3);
      blues[i].run();
    }
    if (scl > 850) {
      for (let j = 0; j < scl; j += 30) {
        let start = createVector(width, random(200, 300));
        blues.add(new Aurora(flowfield3, start, 600, random(6, 8), 10, color(64, 224, 208, 70), random(300, 600)));
      }
    }
    for (let i = blueLength - 1; i > 0; i--) {
      if (blues[i].isDead()) {
        delete blues[i];
      }
    }
  }
  if (redaurora) {
    var redLength = reds.length;
    for (let i = 0; i < redLength; i++) {
      reds[i].follow(flowfield4);
      reds[i].run();
    }
    if (scl > 200) {
      for (let j = 0; j < scl; j += 30) {
        let start = createVector(width, random(200, 300));
        reds.add(new Aurora(flowfield4, start, 650, random(6, 8), 10, color(210, 32, 52, 90), random(400, 700)));
      }
    }
    for (let i = redLength - 1; i > 0; i--) {
      if (reds[i].isDead()) {
        delete reds[i];
      }
    }
  }

  //display initial text
  else if (text) {
    textSize(40);
    fill(255);
    text("P  O  L  A  R      N  I  G  H  T", width / 3.5, height / 3.5);
    textSize(18);
    text("press 1, 2, 3 or 4 to create aurorae", width / 2.7, height / 2.7);
    text("press P to take a screenshot", width / 2.5, height / 2.5);
    text("enjoy the night!", width / 2.3, height / 2.3);
  }
}


//particle class for the polar lights

class Aurora {

  constructor(flowfieldnr, pos, h, maxSpeed, off, co, lifespan) {
    this.flowfield = flowfieldnr;
    this.pos = pos;
    this.h = h;
    this.maxSpeed = maxSpeed;
    this.off = off;
    this.co = co;
    this.vel = createVector(2, 0);
    this.acc = createVector(0, 0);
    this.lifespan = lifespan;
  }

  run() {
    update();
    edges();
    show();
  }

  update() {
    this.pos.add(this.vel);
    this.vel.limit(this.maxSpeed);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.lifespan -= 2.0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    stroke(this.co, 12);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.pos.x - 5 - (noise(this.off)) * 20, this.pos.y + (noise(0.5 * this.off) * 200));
    this.off += 0.1;
  }

  //in case aurora comes close to screen edges
  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.y > height - this.h) { //aurora should only appear on the top half of the screen
      this.pos.x = 0;
      this.pos.y = random(0, height / 3);
    }
    if (this.pos.y < 0) {
      this.pos.y = height / 2; //maybe change height value, as this 2was different in old code
    }
  }

  // make particles follow the flowfield
  follow(flowfield) {
    var x = floor(this.pos.x / flowfield.scl);
    var y = floor(this.pos.y / flowfield.scl);
    var index = x + y * flowfield.cols;

    var force = flowfield.vectors[index];
    applyForce(force);
  }

  //fade polar lights
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }

}

//background stars
class Stars {
  constructor() {
    let x = random(width);
    let y = random(height / 1.2);
    let s = random(0.09, 2);
    let d = random(0, 100);
  }

  display(c, d) {
    noStroke();
    ellipse(this.x, this.y, this.s, this.s);
    fill(c, d);
  }
}

//flowfield consisting of rotating vectors dictating the directions of the moving particles/aurorae

class FlowField {
  constructor(scl) {
    this.scl = scl;
    var cols = floor(width / this.scl) + 1;
    var rows = floor(height / this.scl) + 1;
    var vectors = createVector[this.cols * this.rows];
    var inc = 0.06;
    var zoff = 0;
  }


  //update flowfield with perlin noise
  update() {
    var xoff = 0;
    for (let y = 0; y < this.rows; y++) {
      var yoff = 0;
      for (let x = 0; x < this.cols; x++) {
        var angle = noise(xoff, yoff, this.zoff) * TWO_PI * 2;

        let v = PVector.fromAngle(angle); //?
        v.setMag(2);
        let index = x + y * this.cols;
        vectors[index] = v;

        xoff += inc;
      }
      yoff += 3 * inc;

    }
    this.zoff += 0.004;
  }

  //display vectors, but only neccesary in case of debug
  display() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let index = x + y * this.cols;
        let v = this.vectors[index];

        stroke(255, 255, 255, 90);
        strokeWeight(0.2);
        pushMatrix();
        translate(x * this.scl, y * this.scl);
        rotate(v.heading());
        line(0, 0, this.scl, 0);
        popMatrix();
      }
    }
  }
}