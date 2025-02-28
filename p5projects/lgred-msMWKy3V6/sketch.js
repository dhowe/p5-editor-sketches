let lines,
  model = {};
let N = 10,
  result = "";
function preload() {
  lines = loadStrings("kafka.txt");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Georgia", windowWidth / 20);
  textAlign(CENTER, CENTER);
  frameRate(7);
  fill(255);
  makeModel(lines);
}

function draw() {
  background(0);
  text(result, width / 2, height / 2);
  result = selectNext(result);
}

function selectNext(sequence) {
  if (sequence.length === 0) {
    let options = Object.keys(model);
    let uppercaseOptions = options.filter((key) => /[A-Z]/.test(key.charAt(0)));
    sequence = random(uppercaseOptions);
  }
  let last = sequence.substring(sequence.length - N);
  let next = random(model[last]);
  return sequence + next;
}

function makeModel(lines) {
  let noBlanks = lines.filter((l) => l.length > 0);
  let combined = noBlanks.join(" ");
  for (let j = 0; j < combined.length; j++) {
    let endIndex = (j + N) % combined.length;
    let sequence = combined.substring(j, endIndex);
    let next = combined[endIndex];
    if (!model[sequence]) {
      model[sequence] = [];
    }
    model[sequence].push(next);
  }
}
