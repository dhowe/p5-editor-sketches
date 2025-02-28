let food;
let foods = [];
let worm;
let bg = 150;

function setup() {
  createCanvas(500, 400);

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 30);
    foods[i] = new Food(x, y, r);
  }

  worm = new Food();
}

function draw() {
  background(bg);

  worm.x = mouseX;
  worm.y = mouseY;
  worm.show();

  bg = 0;
  for (let i = 0; i < foods.length; i++) {
    foods[i].show();

    if (worm.intersects(foods[i],i)) {
      bg = 150;
    }
  }
}

class Food {
  constructor(x, y, r = 10) {
    this.x = random(width);
    this.y = random(height);
    this.r = r;
  }

  intersects(other,i) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r / 2 + other.r / 2) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    circle(this.x, this.y, this.r);
  }
}