function setup() {
  
  let canvas = createCanvas(750, 500);
  let context = canvas.elt.getContext("2d");
  //context.miterLimit = 2;
  context.lineJoin = 'bevel';
  
  background(200);
  
  loadFont('kingthings.ttf', f => {
    textFont(f);
    textSize(42);
    textAlign(CENTER);
    strokeWeight(4);
    //strokeJoin(BEVEL);
    stroke(0);
    translate(width/2, height/2);
    scale(3);
    fill(255);
    text("if I found a fun igloo", -50, 10);
  });
}