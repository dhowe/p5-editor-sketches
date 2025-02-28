//declare global variables for x and y positions for 2 different types of walker

// let x;
// let y;

// let x2;
// let y2;

// let gait1 = 2;

// let stroke2Size = 10;
// let gait2 = stroke2Size * 2;

/// make this vv into an array later - this is just here so draw() can access walker1, which is defined in setup() - see https://editor.p5js.org/ashmgual/sketches/TiJNAHrj5
let walker1;
//////
class Walker {
  constructor(
    initialX,
    initialY,
    xspd,yspd, // not sure what these are doing for you
    gait,
    // strokeSize,
    strokeColor,
    theStrokeWeight
  ) {
    /// assign the input parameters to class-wide variables for use in other METHODs
    this.x = initialX;
    this.y = initialY;
    this.xspd = xspd;
    this.yspd = yspd;
    this.gait = gait;
    // this.strokeSize = strokeSize;
    this.strokeColour = strokeColor;
    this.theStrokeWeight = theStrokeWeight;
  }

  /// convert the draw functionality
  update_minidraw() {
    stroke(this.strokeColour);
    strokeWeight(this.theStrokeWeight);
    point(this.x, this.y);
  }

  randomMovement() {
    let r = floor(random(0, 4));
    ///test diff speeds for diff walkers to make sure this works with spd and not this.spd vv ////
    if (r === 0) {
      this.x = this.x + this.gait * this.xspd;
    } else if (r === 1) {
      this.x = this.x - this.gait * this.xspd;
    } else if (r === 2) {
      this.y = this.y - this.gait * this.yspd;
    } else {
      this.y = this.y + this.gait * this.yspd;
    }
  }

  avoidEdges() {
    if (this.x > width || this.x < 0) {
      this.xspd *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.yspd *= -1;
    }
  }
}
//////
function setup() {
  createCanvas(800, 800);
  background(20);

  walker1 = new Walker(
    //initialX
    random(0, width),
    // initialY
    random(0, height),
    // speed
    1,1,
    //gait
    5,
    // // stroke size
    // 2,

    // stroke colour
    "white",
    //stroke weight /// took out strokeSize as same??
    2
  );
  console.log(walker1);

  // x = random(length);
  // y = random(height);

  // x2 = random(length);
  // y2 = random(height);
}

function draw() {
  //frameRate(2000);

  // stroke("white");
  // strokeWeight(2);
  // point(x, y);

  // let r = floor(random(0, 4));

  // if (r === 0) {
  //   x = x + gait1;
  // } else if (r === 1) {
  //   x = x - gait1;
  // } else if (r === 2) {
  //   y = y - gait1;
  // } else {
  //   y = y + gait1;
  // }
  ///
  // if (x > width) {
  //   x = width;
  // }
  // if (y > height) {
  //   y = height;
  // }
  // if (x < 0) {
  //   x = 0;
  // }
  // if (y < 0) {
  //   y = 0;
  // }
  ////
  ////////draw walker 1
  walker1.update_minidraw();
  walker1.randomMovement();
  walker1.avoidEdges();

  ////
  ////////// >>>>> do walker 2 as below then delete below/////////////
  //   stroke(51 + random(-15, +15), 0, 255);
  //   strokeWeight(stroke2Size);
  //   point(x2, y2);

  //   let r2 = floor(random(0, 4));

  //   if (r2 === 0) {
  //     x2 = x2 + gait2;
  //   } else if (r2 === 1) {
  //     x2 = x2 - gait2;
  //   } else if (r2 === 2) {
  //     y2 = y2 - gait2;
  //   } else {
  //     y2 = y2 + gait2;
  //   }

  //   if (x2 > width) {
  //     x2 = width;
  //   }
  //   if (y2 > height) {
  //     y2 = height;
  //   }
  //   if (x2 < 0) {
  //     x2 = 0;
  //   }
  //   if (y2 < 0) {
  //     y2 = 0;
  //   }
}
