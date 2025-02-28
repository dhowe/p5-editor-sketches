let all = [];

function setup() {
  createCanvas(400, 500);
  background(255);
  for (let i = 0; i < 100; i++) {
    all.push(
      new Walker(i * 4, height / 2)
    );
  }
}
function draw() {
  stroke(0,10);
  all.forEach(w => w.update().render());
}
