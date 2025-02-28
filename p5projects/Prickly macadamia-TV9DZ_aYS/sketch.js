function setup() {
  createCanvas(200, 200);
  background(0);
  stroke(255);
  let len = 100, x = width / 2, y = height / 2, num = 100;
  for (let i = 0; i < num ; i++) {
    let ang = i * TWO_PI/num ;
    let x2 = x + cos(ang) * len;
    let y2 = y + sin(ang) * len;
    line(x, y, x2, y2);
  }
}

