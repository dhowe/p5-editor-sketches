  let x = 100, y = 100, active = false;

  function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(0);
    rect(x, y, 50, 50);
  }

  //function touchEnded() {
  function mouseReleased() {
    active = false;
    console.log('mouseReleased');
    return false;
  }

  //function touchStarted() {
  function mousePressed() {
    console.log('mousePressed',mouseX-pmouseX);
    active = (mouseX > x && mouseX < x + 50 && mouseY > y && mouseY < y + 50);
    return false;
  }

  //function touchMoved() {
  function mouseDragged() {
    console.log('mouseDragged:',mouseX-pmouseX);
    if (active) {
      x += mouseX - pmouseX;
      y += mouseY - pmouseY;
    }
    return false;
  }