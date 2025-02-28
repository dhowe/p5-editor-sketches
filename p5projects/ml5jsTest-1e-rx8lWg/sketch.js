let classifier;
let img;

function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage("watch.jpg");
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, processResults);
  image(img, 0, 0, 200, 400);
}

function processResults(error, results) {
  if (error) return console.error(error);

  // The results are in an array ordered by confidence.
  console.log(results);
  createDiv(`Label: ${results[0].label}`);
  createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
}
