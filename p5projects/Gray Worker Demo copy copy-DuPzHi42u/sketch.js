let worker;
let lines = ["worker", "test"];

function setup() {
  createCanvas(600, 200);
  textSize(18);
  textAlign(CENTER);

  // create web-worker 
  worker = new Worker("worker.js");

  // tell it to call generateComplete when done
  worker.onmessage = generateComplete;

  generate();
}

function draw() {
  background(245);

  text(lines[0], width / 2, 80);
  text(lines[1], width / 2, 120);
}

function generate() {

  // ask the worker to generate from poem
  worker.postMessage({ poem });
}

function generateComplete(e) {
  // use the new data
  lines = e.data.lines

  // wait two seconds and generate again
  setTimeout(generate, 2000);
}