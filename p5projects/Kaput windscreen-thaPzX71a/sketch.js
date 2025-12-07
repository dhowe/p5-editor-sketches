function setup() {
  createCanvas(200, 200);
  for (let i = 0; i < 4; i++) {

    let sz = map( i, 0, 3, 200, 25);

    fill(i * 50);
    circle(100, 100, sz);
  }
}