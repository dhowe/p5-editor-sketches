function setup() {
  var margin = 10;
  var gap = 46;
  var counter = 35;
  createCanvas(720, 320);
  background(0);
  textFont("Georgia");
  textSize(24);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  translate(margin * 4, margin * 4);
  for (var y = 0; y < height - gap; y += gap) {
    for (var x = 0; x < width - gap; x += gap) {
      var letter = char(counter);
      if (letter === "P" || letter === "5") {
        fill(255, 204, 0);
      } else if (letter === "J" || letter === "S") {
        fill(204, 0, 255);
      } else {
        fill(255);
      }
      text(letter, x, y);
      counter++;
    }
  }
  saveCanvas("typographyLetterSketch.p5.png");
}
