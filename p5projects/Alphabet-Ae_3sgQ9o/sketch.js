// properties(variables) / functions

class Word {
  constructor(theText, xPos, yPos) {
    this.text = theText;
    this.x = xPos;
    this.y = yPos;
  }
  render() {
    text(this.text, this.x, this.y);
  }
}

let w1 = new Word("dog", 100, 100);
console.log(w1);













function setupX() {
  createCanvas(450, 400);
  textFont('Georgia');
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(160);

}
