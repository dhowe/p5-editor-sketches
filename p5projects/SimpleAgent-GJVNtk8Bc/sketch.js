let agent; 

function setup() {
  createCanvas(400, 600);
  agent = new Agent(200,200);
}

function draw() {
  background(220,32);
  agent.update();
  agent.render();
}

const GRAVITY = 0.067408;

class Agent {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vx = .5;
    this.vy = .5;
    this.ax = 0;
    this.ay = 0;
  }
  update() {

    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
  render() {
    circle(this.x,this.y, 10);
  }
}