let myp5 = new p5(p => {

  let x = 100, y = 100, active = false;

  p.setup = () => {
    p.createCanvas(600, 600);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };

  p.mouseReleased = () => {
    active = false;
    console.log('p.mouseReleased');
  };

  p.mousePressed = () => {
    console.log('p.mousePressed');
    active = (p.mouseX > x && p.mouseX < x + 50 && p.mouseY > y && p.mouseY < y + 50);
  };

  p.mouseDragged = () => {
    console.log('p.mouseDragged');
    if (active) {
      x += p.mouseX - p.pmouseX;
      y += p.mouseY - p.pmouseY;
    }
  };
});
