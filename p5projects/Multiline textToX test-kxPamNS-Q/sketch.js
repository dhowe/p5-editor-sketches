let font;
let args = ["The Dog ate the bone.",50, 50, 500];

async function setup() {
  createCanvas(600, 400);
  background(255);
  
  font = await loadFont("acmesa.ttf");
  textFont(font);
  textSize(64)
  text(...args);
  
 
  font.textToPoints(...args).forEach(p => circle(p.x, p.y, 3));
  
  // textToContours
  args[2]+= 200;
  text(...args);
  let cts = font.textToContours(...args);
  cts.forEach(c => c.forEach(p => circle(p.x, p.y, 3)));
  
  //console.log(pts);
}