let font, grammar, json;
let lines = ["click to", "generate", "a haiku"];

function setup() {

  createCanvas(650, 200);
  textAlign(CENTER);
  loadFont('Resagokr.otf', f => textFont(f, 30));
  grammar = RiTa.grammar(haiku);
}

function draw() {

  background(230, 240, 255);
  text(lines[0], width / 2, 75);
  text(lines[1], width / 2, 110);
  text(lines[2], width / 2, 145);
}

function mouseReleased() {

  let result = grammar.expand();
  let haiku = result.split("%");
  for (let i = 0; i < lines.length; i++) {
    lines[i] = haiku[i];
  }
}

    

