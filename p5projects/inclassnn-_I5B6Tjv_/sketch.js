let url = "https://raw.githubusercontent.com/dhowe/sas/main/nndata.json";
let estates, nnet, errors = 0;

function setup() {
  createCanvas(400, 600);
  textSize(24);
  nnet = new NeuralNet();
  loadJSON(url, (json) => {
    estates = json.data;
    estates.forEach((e) => {
      e.lat = map(e.lat, -90, 90, -1, 1);
      e.long = map(e.long, -180, 180, -1, 1);
      e.cases = e.cases > 0 ? 1 : -1;
    });
  });
}

function draw() {
  background(255);
  if (!estates) return;
  errors = 0;
  estates.forEach(drawOne);
  estates.forEach((e) => nnet.train(e, e.cases));
  drawGuess();
  fill(0);
  text(errors, width - 40, height - 20);
}

function drawOne(e) {
  
    let x = screenX(e.lat);
    let y = screenY(e.long);
    let ly = screenY(plot(e.lat));
    if (e.cases > 0) {
      fill(0, 200, 200);
      if (y > ly) fill(200, 0, 0);
    } else {
      fill(200, 200, 0);
      if (y < ly) fill(200, 0, 0);
    }
    ellipse(x, y, 10);
}

function screenX(x) {
  return map(x, -1, 1, 0, width);
}

function screenY(y) {
  return map(y, -1, 1, height, 0);
}

function plot(x) {
  let [w0, w1, w2] = nnet.weights;
  return -x * (w0 / w1) - w2 / w1;
}

function drawGuess() {
  let y1 = plot(-1);
  let y2 = plot(1);
  let sy1 = map(y1, -1, 1, height, 0);
  let sy2 = map(y2, -1, 1, height, 0);
  line(0, sy1, width, sy2);
}
