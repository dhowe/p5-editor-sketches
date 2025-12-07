let font;

async function setup() {
  let x = 200, y = 200, font;

  createCanvas(windowWidth, windowHeight);
  font = await loadFont("./Courier Prime.ttf");

  const myText = "La Garita Stock Driveway Road";
  const name = myText.split(" ").join("\n");
  textFont(font, 12);
  textAlign(CENTER, CENTER);
  const bounds = textBounds(name, 200, 200);
  print(bounds);

  rect(bounds.x, bounds.y, bounds.w, bounds.h);
  text(name, 200, 200);
}
