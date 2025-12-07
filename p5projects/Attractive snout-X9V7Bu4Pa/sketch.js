let sp;
function setup() {
  createCanvas(400, 400);
  background(220);
  sp = new SandPainter(color(255,0,0));
 
}
function draw() {
  circle(50,50,5);
  circle(350,350,5)
  sp.render(50,50,350,350);
}


const MaxG = 1.0;
class SandPainter {
  constructor(col) {
    this.c = col;
    this.g = random(0.01, 0.1);
  }
  render(x, y, ox, oy) {
    // modulate gain
    this.g = constrain(this.g + random(-0.05, 0.05), 0, MaxG);

    // calculate grains by distance
    let grains = int(sqrt((ox-x)*(ox-x)+(oy-y)*(oy-y)));
    //let grains = 64;

    // lay down grains of sand (transparent pixels)
    let w = this.g / (grains - 1);
    for (let i = 0; i < grains; i++) {
      let a = 0.1 - i / (grains * 10.0);
      stroke(red(this.c), green(this.c), blue(this.c), a * 256);
      point(ox + (x - ox) * sin(sin(i * w)), oy + (y - oy) * sin(sin(i * w)));
    }
  }
}
