let walkers = [];
let foods = [];

function setup() {
  
  createCanvas(400, 400);
  rectMode(CENTER);
  
  // create 10 walkers
  for (let i = 0; i < 10; i++) {

    let w = new Walker(random(width), random(height), random(255));
    walkers.push(w);
  }
  
  // create 10 foods
  for (let i = 0; i < 10; i++) {
    let f = new Food(random(width), random(height), 10);
    foods.push(f);
  }
  
}

function draw() {
  background(255);

  // draw food
  for (let i = 0; i < foods.length; i++) {
    foods[i].render();
  }
  
  // move and draw walkers
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].render();
  }
  
  // check walkers vs foods
  for (let j = 0; j < foods.length; j++) {
    for (let i = 0; i < walkers.length; i++) {
      let f = foods[j];
      let w = walkers[i];
      
      // check distance from each food to each walker
      let d = dist(f.x, f.y, w.x, w.y);
      if (d < f.sz / 2) {
        w.spdx *= -1;
        w.spdy *= -1;
        f.x = random(width);
        f.y = random(height);
        console.log('eat!');
      }
    }
  }
  
  // check walkers vs other walkers
  for (let j = 0; j < walkers.length; j++) {
    for (let i = j+1; i < walkers.length; i++) {
      let f = walkers[j];
      let w = walkers[i];
      
      // check distance from each food to each walker
      let d = dist(f.x, f.y, w.x, w.y);
      if (d < f.sz / 2) {
        w.spdx *= -1;
        w.spdy *= -1;
        f.x = random(width);
        f.y = random(height);
        console.log('eat!');
      }
    }
  }
}

//////////////////////////////////////////

class Food {
  constructor(xpos, ypos, sz) {
    this.x = xpos;
    this.y = ypos;
    this.sz = sz;
  }
  render() {
    fill(200, 0, 0);
    circle(this.x, this.y, this.sz);
  }
}


class Walker {
  constructor(xpos, ypos, col=0) {
    this.x = xpos;
    this.y = ypos;
    this.col = col;
    this.spdx = random(-3, 3);
    this.spdy = random(-3, 3);
  }

  update() {
    this.x += this.spdx + random(-1.5, 1.5);
    this.y += this.spdy + random(-1.5, 1.5);

    // wraparound if we're off edge
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
  }

  render() {
    noStroke();
    fill(this.col);
    circle(this.x, this.y, 10);
  }
}
