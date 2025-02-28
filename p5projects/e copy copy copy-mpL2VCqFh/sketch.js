let worker,
  lines = ["worker", "test"];

function setup() {
  createCanvas(600, 200);
  rg = RiTa.grammar(poem);
  worker = new Worker("worker.js");
  worker.onmessage = workerDone;
  generate();
  console.error("Worker #1 is initialized and running");
}

function draw() {
  background(245);
  textSize(24);
  textAlign(CENTER);
  text(lines[0], width / 2, 80);
  text(lines[1], width / 2, 120);
}

function workerDone(e) {
  console.error("Worker is done, result: ", e.data.lines);
  lines = e.data.lines
  setTimeout(generate, 1000);
}

function generate() {
  console.error("Worker posting: ");
  worker.postMessage(true);
}
