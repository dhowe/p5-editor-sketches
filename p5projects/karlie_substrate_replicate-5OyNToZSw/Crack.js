class Crack {
  constructor() {
    this.x;
    this.y;
    this.t; // direction of travel in degrees
    this.stopMove = false;
    this.findStart();
    // this.sp = new ColorLines();
  }

  getStopMove() {
    return this.stopMove;
  }
  findStart() {
    // pick random point
    var px = 0;
    var py = 0;
    var found = false;
    var timeout = 0;

    // while ( timeout++ < 50000) {
    while ((!found) || (timeout++ > 1000)) {
      px = int(random(w));
      py = int(random(h));
      if (cgrid[py * w + px] < 10000) { //finding the defined coordinates
        found = true;
        break;
      }
    }

    if (found) {
      // start crack
      var a = cgrid[py * w + px]; // get current angle
      if (random(2) < 1) {
        a -= 90+ int(random(-2, 2.1));
        //add 90/-90 degrees (with some random noise) to the current angle, draw perpendicular lines
      } else {
        a += 90+ int(random(-2, 2.1));
      }
      this.startCrack(px, py, a);
      assignedGrids++;
    } else {
      console.log("timeout: " + timeout);
    }}

  startCrack(x, y, a) {
    this.x = x;
    this.y = y;
    this.t = a; //%360;
    this.x += 0.61 * cos(this.t * PI / 180);
    this.y += 0.61 * sin(this.t * PI / 180);
  }

  move() {
    // continue cracking
    if (!this.stopMove) {
      this.x += 0.42 * cos(this.t * PI / 180);
      this.y += 0.42 * sin(this.t * PI / 180);
     }

    // bound check
    let z = 0.33;
    let cx = int(this.x + random(-z, z)); // add fuzz
    let cy = int(this.y + random(-z, z));

    // draw crack
    stroke(0);
    strokeWeight(1.2);
    point(this.x + random(-z, z), this.y + random(-z, z));

    if ((cx >= 0) && (cx < w) && (cy >= 0) && (cy < h)) {
      // safe to check
      if ((cgrid[cy * w + cx] > 10000) || (abs(cgrid[cy * w + cx] - this.t) < 5)) {
        // continue cracking
        cgrid[cy * w + cx] = int(this.t); // assign the "current angle" to this coordinate
      } else if (!isFinished && abs(cgrid[cy * w + cx] - this.t) > 2) {
        // crack encountered (not self), stop cracking
        this.findStart();
        makeCrack();
      } else {
        this.stopMove = true;
      }
    } else if (!isFinished) {
      this.findStart();
      makeCrack();
    } else {
      this.stopMove = true;
    }
  }

  fillingColour() {
    let currentX = this.x;
    let currentY = this.y;
    let space = true;

    // find extents of open space
    while (space) {
      // move perpendicular to crack
      currentX += 0.81 * sin(this.t * PI / 180);
      currentY -= 0.81 * cos(this.t * PI / 180);
      let cx = int(currentX);
      let cy = int(currentY);
      if ((cx >= 0) && (cx < w) && (cy >= 0) && (cy < h)) {
        // safe to check
        if (cgrid[cy * w + cx] > 10000) {
          // space is open
        } else {
          space = false;
        }
      } else {
        space = false;
      }
    }
  }
}