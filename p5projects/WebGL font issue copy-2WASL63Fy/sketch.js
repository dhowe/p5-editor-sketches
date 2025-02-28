let fontLoaded = false;
function setup() {
  createCanvas(400, 400, WEBGL);
  
  loadFont("SFCompact.ttf", f => {
    textFont(f);
    fontLoaded = true;
  });
}

function draw() {
  background(220);
  if (fontLoaded){
      text("some text", 20, 20);
  }
}