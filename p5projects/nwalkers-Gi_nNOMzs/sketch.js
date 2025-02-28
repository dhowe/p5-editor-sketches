
class NoiseWalker {
  constructor(sz) {
    this.x = random(0,width);
    this.y = random(0,height);
    this.nx = random(1000);
    this.ny = random(1000);
    this.nxi = random(.001,.1);
    this.nyi = random(.001,.1);
    this.sz = sz;
  }
  update() {
    this.x = noise(this.nx+=this.nxi) * width;
    this.y = noise(this.ny+=this.nyi) * height;
    return this;
  }
  render() {
    ellipse(this.x, this.y, this.sz);
  }
}

let walkers = [];
function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 1000; i++) {
	walkers.push(new NoiseWalker(random(20,100)));		
  }
  
}

function draw() {
  background(255,32);
  noFill();
  walkers.forEach(w => w.update().render());
}