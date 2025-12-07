function setup() {
  createCanvas(400, 400);
  
}
function draw() {
  background(200);

  let num = round((mouseX/width) * 50);
  fill(mouseY);

  let sqW = width/num;
  
  let i = 0;
  while (i < num) {
    square(height-sqW-(i*sqW),i*sqW, sqW);
    i++;
  }
  fill(0);
  textSize(24);
  text(num, 20, 20);
}