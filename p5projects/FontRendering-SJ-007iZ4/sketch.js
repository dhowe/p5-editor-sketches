let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/÷=%\"'#&_(),.;:?!\\|{}<>[]^~ "
let font;

function preload() {
  font = loadFont('Roboto-Regular.ttf');
}

function setup() {
  createCanvas(300, 300);
  textFont(font);
  fill(255);
}

function draw() {
  background(0);
  for (valetr i = 0; i < 40; i++) {
    for (let j = 0; j < 40; j++) {
      text(characters[int(random(0, characters.length))], j * 10, i * 20);
    }
  }
}