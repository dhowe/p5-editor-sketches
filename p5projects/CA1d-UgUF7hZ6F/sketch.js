let ca, actualH = 600, cellSz = 2;

function setup() {
  createCanvas(600, 650);
  frameRate(30);
  textSize(24);
  noStroke();
  textFont('courier');
  ca = new CellularAutomaton(30);
}

function draw() {

  background(51);
  ca.display();
  ca.generate();
  
  fill(255);
  text('RULE #' + ca.num + '  ' + ca.rule.join(''), 20, height - 10);
  
  pos = constrain(floor(lerp(0, 255, mouseX/width)),0,255); 
  fill(200,0,0);
  text('#'+ pos + '  '+decToBin(pos), width-250, height - 10);
}

function mouseClicked() {
  loop();
  ca.restart(pos);
}

function keyPressed() {
  ca.restart(++ca.num%255);
}

class CellularAutomaton {

  constructor(r) {
    this.gen = 0;
    this.w = cellSz;
    this.cols = floor(width / this.w);
    this.rows = floor(actualH / this.w);
    this.matrix = new Array(this.cols);
    for (let i = 0; i < this.cols; i++) {
      this.matrix[i] = new Array(this.rows);
    }
    this.restart(r);
  }

  restart(r) {
    if (r < 0 || r > 255) Error('Bad rule: '+r);
    this.num = r;
    this.rule = decToBinArr(r);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.matrix[i][j] = 0;
      }
    }
    this.matrix[this.cols / 2][0] = 1;
    this.gen = 0;
  }

  generate() {
    for (let i = 0; i < this.cols; i++) {
      let left = this.matrix[(i + this.cols - 1) % this.cols][this.gen % this.rows];
      let self = this.matrix[i][this.gen % this.rows]; // Current state
      let right = this.matrix[(i + 1) % this.cols][this.gen % this.rows];
      this.matrix[i][(this.gen + 1) % this.rows] = this.doRule(left, self, right);
    }
    this.gen++;
  }

  display() {
    fill(255);
    let offset = this.gen % this.rows;
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let y = j - offset;
        if (y <= 0) y = this.rows + y;
        if (this.matrix[i][j] == 1) {
          rect(i * this.w, (y - 1) * this.w, this.w, this.w);
        }
      }
    }
  }

  doRule(left, self, right) {
    let s = "" + left + self + right; // eg "010"
    let index = parseInt(s, 2); 
    return this.rule[7-index]; // count from right
  }
  
  finished() {
    return this.gen > floor(actualH / this.w);
  }
}
  
function decToBin(num) { // for num < 256
  let n = num.toString(2);
  while (n.length < 8)n = '0' + n;
  return n;
}

function decToBinArr(num) { // for num < 256
  return decToBin(num).split('');
}

function binToDec(bnum) {
  return parseInt(bnum, 2);
}