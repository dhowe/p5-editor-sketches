let stars = [];
let mountains = [];
let trees = [];
let maxTreeAge = 10000;
let bg, randomTimer;

function setup() {
  createCanvas(800, 600);
  randomTimer = random(0, width);

  // create static background
  bg = createGraphics(800, 600);
  renderBackground(bg);

  // Make Stars
  for (let i = 0; i < 100; i++) {
    let s = new Star(random(0, width), 
      random(0, height / 2), i * 10);
    stars.push(s);
  }

  // Make Trees
  let myTreeWidth = random(280, 330);
  for (let i = 0; i < 60; i++) {
    let t = new Tree(
      random(0, width),
      map(i, 0, 29, 280, 330),
      random(50,100),
      random(0, 8000)
    );
    trees.push(t);
  }
}

function draw() {
  background(30, 30, 30, 40);
  image(bg, 0, 0); // render background

  //ADD Stars
  for (let star of stars) {
    star.animate();
  }

  randomTimer = random(0, 100);

  //ADD Shooting Star
  if (randomTimer < 2) {
    stroke(200, 200, 200, 70);
    strokeWeight(random(0.5, 2));
    let randomX = random(-400, width);
    line(randomX, 0, (randomX += 400), 400);
  }

  //ADD Clouds

  //ADD Trees
  for (let tree of trees) {
    tree.animate();
  }

  renderWater();
  makeBoat(width / 2, 500);
  doFps();
}

function renderWater() {
  fill(0);
  noStroke();
  rect(0, 400, width, 200);

  for (let i = 0; i < /*120*/40; i++) {
    if (i % 2 == 0) {
      fill(map(i, 0, 119, 5, 80), 255);
    } else {
      fill(0, 150);
    }
    let xoff = i + 1 * 900;
    beginShape();
    vertex(width, height);
    vertex(0, height);
    for (let k = 0; k < width; k++) {
      //fill(map(i, 0, 7, 0, 80), 30);
      let myNoiseValue = noise(xoff + frameCount / 100) * i + 10;
      let pointY = map(myNoiseValue, 0, 79, 600, 390);
      let mappedSin = sin(frameCount / 100) * 5;
      vertex(k + mappedSin, myNoiseValue + (i * 5 + 400) + sin(frameCount / 20) * 10);
      xoff -= 0.008;
    }
    endShape(CLOSE);
  }
}

function makeBoat(x, y) {
  noStroke();
  let scaler = 3;
  let myX = x - 50;
  let myY = y - 30;
  myY += sin(frameCount / 40) * 10;
  myX += map(noise(frameCount / 1000), 0, 1, -600, 600);

  push();
  rotate(sin(frameCount / 40) / 16);

  // Using Y value to give a sense of perspective.
  scaler = map(myY, 460, 480, 1.3, 3.5);

  // Make the boat Darker when it get further away...
  let myBoatFill = map(myY, 460, 480, -10, 70);


  // ADD REFLECTION as a gradient
  for (let i = 1; i < 200; i++) {
    let fadeColor = map(i, 0, 99, 100, -40);
    strokeWeight(1.5);
    let myReflectWave = (noise(10, i / 1000) * 20) - sin(frameCount + (i * 30) / 150) - 10;
    stroke(70, fadeColor - myBoatFill / 2);
    line(
      myX + myReflectWave - 14 * scaler - i / 3,
      myY - 2 * scaler + i,
      myX + myReflectWave + 14 * scaler + i / 3,
      myY + i
    );
  }

  //console.log(myY);
  // Sorry this is a mess, but graphics can be difficult...

  fill(10 + myBoatFill);
  quad(
    myX + 3 * scaler,
    myY,
    myX - 12 * scaler,
    myY - 6 * scaler,
    myX - 11 * scaler,
    myY - 1 * scaler,
    myX + 3 * scaler,
    myY
  );
  fill(20 + myBoatFill);
  quad(
    myX - 11 * scaler,
    myY - 1 * scaler,
    myX - 14 * scaler,
    myY - 2 * scaler,
    myX - 20 * scaler,
    myY - 16 * scaler,
    myX - 12 * scaler,
    myY - 6 * scaler
  );
  fill(60 + myBoatFill);
  quad(
    myX - 2 * scaler,
    myY - 9 * scaler,
    myX - 12 * scaler,
    myY - 6 * scaler,
    myX - 20 * scaler,
    myY - 16 * scaler,
    myX - 1 * scaler,
    myY - 11 * scaler
  );
  fill(50 + myBoatFill);
  quad(
    myX,
    myY - 13 * scaler,
    myX + 2 * scaler,
    myY - 10 * scaler,
    myX - 2 * scaler,
    myY - 9 * scaler,
    myX,
    myY - 13 * scaler
  );
  fill(55 + myBoatFill);
  quad(
    myX + 3 * scaler,
    myY,
    myX - 12 * scaler,
    myY - 6 * scaler,
    myX + 25 * scaler,
    myY - 17 * scaler,
    myX + 15 * scaler,
    myY
  );
  pop();
}

class Tree {
  constructor(x, y, size, age) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.weight = random(1, 5);
    this.age = age;
  }
  animate() {
    // Increment the age of each Tree.
    this.age += 10;

    let myStrokeColor = map(this.y, 260, 400, 10, 50);

    stroke(myStrokeColor);
    strokeWeight(this.age / 2000);

    // Create the draw points
    let topOfTree = this.y - this.size;
    let mySmallerSize = this.size - 10;
    let myTinyRotation = map(noise(this.age / 300), 0, 1, -15, 15);


    let myColourMap = map(this.age, 0, 10000, 60, 255);

    // Using this.age, to make the tree move through a growth cycle.
    if (this.age < 3000) {
      // Young Tree so grow from a small item
      stroke(myStrokeColor);
      line(
        this.x,
        this.y,
        this.x + myTinyRotation / 5,
        this.y - mySmallerSize * (this.age / 10000)
      );
      for (let i = 0; i < 100; i++) {
        stroke(myStrokeColor - 10);
        line(
          this.x + myTinyRotation / 5,
          this.y - mySmallerSize * (this.age / 10000),
          random(
            this.x - 2 + this.size / 10000 - this.weight,
            this.x + 2 - this.size / 10000 + this.weight
          ),
          topOfTree + mySmallerSize
        );
      }
    }

    if (this.age > 3000 && this.age < 5000) {
      // Middle Age Tree.
      // Young Tree so grow from a small item
      stroke(myStrokeColor);
      line(
        this.x,
        this.y,
        this.x + myTinyRotation,
        this.y - mySmallerSize * (this.age / 10000)
      );
      for (let i = 0; i < 100; i++) {
        stroke(myStrokeColor - 10);
        line(
          this.x + myTinyRotation,
          this.y - mySmallerSize * (this.age / 10000),
          random(
            this.x - 5 + this.size / 10000 - this.weight,
            this.x + 5 - this.size / 10000 + this.weight
          ),
          topOfTree + mySmallerSize
        );
      }
    }

    if (this.age > 5000 && this.age < 8000) {
      // Older Tree.

      // Young Tree so grow from a small item
      stroke(myStrokeColor);
      line(
        this.x,
        this.y,
        this.x + myTinyRotation,
        this.y - mySmallerSize * (this.age / 10000)
      );

      for (let i = 0; i < 100; i++) {
        stroke(myStrokeColor - 10);
        line(
          this.x + myTinyRotation,
          this.y - mySmallerSize * (this.age / 10000),
          random(
            this.x - 8 + this.size / 10000 - this.weight,
            this.x + 8 - this.size / 10000 + this.weight
          ),
          topOfTree + mySmallerSize
        );
      }
    }

    if (this.age > 8000 && this.age < 10000) {
      // Tree Decay.
      stroke(myStrokeColor);
      line(
        this.x,
        this.y,
        this.x + myTinyRotation / 5,
        this.y - mySmallerSize * (this.age / 10000)
      );
      for (let i = 0; i < 100; i++) {
        stroke(myStrokeColor - 10);
        line(
          this.x + myTinyRotation / 5,
          this.y - mySmallerSize * (this.age / 10000),
          random(
            this.x - 10 + this.size / 10000 - this.weight,
            this.x + 10 - this.size / 10000 + this.weight
          ),
          topOfTree + mySmallerSize
        );
      }

    }

    if (this.age > 10000) {
      let myTreeWidth = random(280, 330);
      this.x = random(0, width);
      // Don't reset the Y value... This keeps the trees from overlapping and this way I'm able to recycle the trees.
      this.size = 100;
      this.weight = random(1, 5);
      this.age = random(0, 2000);
    }
    noStroke();
  }
}

class Mountain {
  constructor(y, c, offset) {
    this.y = y;
    this.c = c;
    this.offset = offset;
  }
  animate(g) {
    for (let i = 0; i < width; i++) {
      let myValue = noise(this.offset + i / 200, 10);
      g.stroke(this.c);
      g.strokeWeight(1);
      g.line(i, this.y + myValue * 100, i, height);
    }
  }
}

class Star {
  constructor(x, y, offset) {
    this.x = x;
    this.y = y;
    this.offset = offset;
  }
  animate() {
    noStroke();
    fill(255);
    let myValue = noise(frameCount / 20 + this.offset);
    ellipse(this.x, this.y, myValue, myValue);
  }
}

function renderBackground(g) {
  for (let i = 0; i < 300; i++) {
    g.strokeWeight(1);
    let myColor = map(i, 0, 299, 10, 50);
    g.stroke(myColor);
    g.line(0, i, width, i);
  }
  for (let i = 0; i < 20; i++) {
    new Mountain(i * 10 + 200, map(i, 0, 20, 0, 35), i).animate(g);
  }
}

function doFps() {
  fill(255);
  noStroke();
  text("FPS: " + floor(frameRate()), 10, 20);
}
