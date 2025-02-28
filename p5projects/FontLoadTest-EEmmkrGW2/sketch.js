let p = window, loaded = 0;
function setup() {
  p.createCanvas(240, 240);
  p.background(255);
  p.textSize(27);
  p.fill(0);
  p.strokeWeight(0);

  p.loadFont("Acmesa.ttf", (f) => {
    p.textFont(f);
    p.text("Acmesa" + ".ttf", 10, 40);
    loaded++;
  });
  p.loadFont("AndaleMono.ttf", (f) => {
    p.textFont(f);
    p.text("AndaleMono" + ".ttf", 10, 80);
    loaded++;
  });
  p.loadFont("FiraSans-Book.otf", (f) => {
    p.textFont(f);
    p.text("FiraSans-Book" + ".otf", 10, 120);
    loaded++;
  });
  p.loadFont("Lato-Black.ttf", (f) => {
    p.textFont(f);
    p.text("Lato-Black" + ".ttf", 10, 160);
    loaded++;
  });
  p.loadFont("PlayfairDisplay.ttf", (f) => {
    p.textFont(f);
    p.text("PlayfairDisplay" + ".ttf", 10, 200);
    loaded++;
  });
  
}
function draw() {
  if (loaded===5) {
    loaded = 0;
    saveCanvas("loadedFontSketch.p5.png");
    noLoop();
  }
}
