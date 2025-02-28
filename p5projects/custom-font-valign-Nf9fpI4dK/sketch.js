

function setup() {
  createCanvas(400, 400);
  loadFont("Georgia.ttf", f => {
    textFont(f, 48);
    textAlign(CENTER, CENTER);
    line(200, 0, 200, height);
    line(0, 200, width, 200);
    text("Align", 200, 200);
  });
}












