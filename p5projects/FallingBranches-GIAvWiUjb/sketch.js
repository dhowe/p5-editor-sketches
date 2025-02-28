
let startNum = 5, dbug = 0, bounds;

function setup() {
  createCanvasFx(800, 800, 'HyphaeTest');
  background(245);
  angleMode(DEGREES);
  bounds = { x: width / 2, y: height / 2, radius: min(width, height) / 2 }
  bounds.width = width * .9;
  bounds.height = height * .9;
  bounds.type = 'rect';

  let offset = random(360);
  for (let i = 0; i < startNum; i++) {
    let x = (i+1) * width/(startNum+1), y = 40;
    print(x,y)
    fill(220, 110, 45) && noStroke();
    circle(x, y, Branch.MaxRadius * 2);
    new Branch({ x, y }, Branch.MaxRadius, 90);
  }
  Branch.Instances[floor(random(startNum))].spawn();
}

function draw() {
  let bs = Branch.Instances.filter(b => !b.dead);
  bs.forEach(b => b.step());
  if (!bs.length) {
    noLoop();
    filter(DILATE);
    previewFx();
  }
}

////////////////////////////////////////////////////////////////

class Branch {
  static StrokeScale = 0.75;
  static RadiusScale = 0.8;
  static MaxNoBranch = 5;
  static MaxRadius = 4;
  static MinRadius = 1;
  static Instances = [];

  constructor(pos, radius, angle, from) {
    this.dead = false;
    this.angle = angle;
    this.stepsSinceBranch = 0;
    this.state = pos instanceof Disc ? pos : new Disc(pos.x, pos.y, radius);
    this.state.render(from ?? this.state);
    Branch.Instances.push(this);
  }

  step() {
    if (this.dead) return;

    let { x, y, radius } = this.state;
    this.state = this.verifyNext(radius, this.angle);
    if (!this.state) return this.dead = true;

    if (this.stepsSinceBranch++ && radius > Branch.MinRadius) {
      let p = map(radius, Branch.MaxRadius, Branch.MinRadius, .3, .9);
      if (random() < p) this.spawn(frameCount % 2 ? 1 : -1);
      if (random() < p) this.spawn(frameCount % 2 ? -1 : 1);
    }

    if (this.stepsSinceBranch > Branch.MaxNoBranch && !this.spawn()) {
      if (dbug) console.log('[end] max-steps');
      this.dead = true;
    }
    this.angle += random(-15, 15);
    this.state.render({ x, y });
  }

  verifyNext(radius, angle) {

    let testX = this.state.x + (radius * 2.5) * cos(angle);
    let testY = this.state.y + (radius * 2.5) * sin(angle);
    if (bounds.type === 'rect') { // rect-bounds
      if (testX < bounds.x - bounds.width / 2 || testX > bounds.x + bounds.width / 2
        || testY < bounds.y - bounds.height / 2 || testY > bounds.y + bounds.height / 2) {
        return dbug && console.log('[end] rect-bounds');
      }
    }
    else { // circle-bounds
      let maxDist = dist(testX, testY, bounds.x, bounds.y);
      if (maxDist > bounds.radius) return dbug && console.log('[end] bounds');
    }
    for (let i = 0; i < Disc.Instances.length; i++) {
      if (Disc.Instances[i].overlaps(testX, testY, radius)) {
        return dbug && console.log('[end] collides');
      }
    }
    let nrad = max(radius * 0.999, Branch.MinRadius);
    let nx = this.state.x + (nrad * 2) * cos(angle);
    let ny = this.state.y + (nrad * 2) * sin(angle);
    return new Disc(nx, ny, nrad);
  }

  spawn(dir) { // create a new branch
    dir = dir ?? (random() < 0.5 ? -1 : 1);
    let radius = this.state.radius * Branch.RadiusScale;
    let angle = this.angle + (dir * random(55, 65));
    let next = this.verifyNext(radius, angle);
    if (next) {
      this.stepsSinceBranch = 0;
      return new Branch(next, radius, angle, this.state);
    }
  }
}

class Disc {
  static Instances = [];
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.id = Disc.Instances.push(this);
  }
  overlaps(x, y, rad) {
    let dx = this.x - x, dy = this.y - y;
    return Math.sqrt(dx * dx + dy * dy) < this.radius + rad;
  }
  render(from) {
    stroke(0);
    strokeWeight((this.radius * 2) * Branch.StrokeScale);
    line(from.x, from.y, this.x, this.y);
    if (dbug) fill(0) && noStroke() && circle(this.x, this.y, rad);
  }
}