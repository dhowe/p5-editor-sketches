let numItems = 26;
let radius = 180;

function setup() {
  createCanvas(400, 400);
  background(240);
  textSize(20);
  textAlign(CENTER, CENTER);
  
  let arc = TWO_PI/numItems;
  for (let i = 0; i < numItems; i++) {
    let angle = arc * i;
    let x = width/2 + radius * cos(angle);
    let y = height/2 + radius * sin(angle);
    text(char(65+i), x, y);
  }
}
