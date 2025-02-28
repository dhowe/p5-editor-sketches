let words = [];
let gap = 52;

class Word {
  constructor(l, x, y) {
    this.data = l;
    this.x = x;
    this.y = y;
    this.sx = x;
    this.sy = y;
    this.tx = x;
    this.ty = y;
    this.moveStart = 0;
    this.moveTime = 0;
  }
  render() {
    if (this.moveStart) {
      let t = (millis() - this.moveStart) / this.moveTime;
      this.x = lerp(this.sx, this.tx, min(t, 1));
      this.y = lerp(this.sy, this.ty, min(t, 1));
    }
    fill(/[AESRSU]/.test(this.data) ? "#ed225d" : 255);
    text(this.data, this.x, this.y);
  }
  moveTo(x, y, ms) {
    // others: scaleTo, fadeIn, fadeOut, colorTo, rotateTo, textTo
    this.moveStart = millis();
    this.moveTime = ms;
    this.sx = this.x;
    this.sy = this.y;
    this.tx = x;
    this.ty = y;
  }
}

function setup() {
  createCanvas(450, 400);

  let counter = 35;
  for (let y = 40; y < height; y += gap) {
    for (let x = 40; x < width; x += gap) {
      let letter = char(counter++);
      words.push(new Word(letter, x, y));
    }
  }
}

function mouseClicked() {
  //find("A").moveTo(random(width), random(height), 1000);
  for (let i = 0; i < words.length; i++) {
    words[i].moveTo(width - words[i].x, height - words[i].y, 2000);
  }
}

function draw() {
  background(160);
  textFont("Georgia");
  textSize(32);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < words.length; i++) {
    words[i].render();
  }
}

function find(l) {
  return words.find((w) => w.data === l);
}
