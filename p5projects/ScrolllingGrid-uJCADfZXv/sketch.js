let dim = 10, sz;
let xoff = 0,yoff = 0;

function setup() {
  createCanvas(400, 400);
  sz = width/ dim;
}

function mouseDragged() {
  xoff += mouseX - pmouseX;
  yoff += mouseY - pmouseY;
}

function draw() {
  background(255);
  
  for (let i = 0; i < dim+2; i++) {
    for (let j = 0; j < dim+2; j++) {

      let x = ((xoff + j * sz) % (width+sz)) - sz;
      if (x < -sz) x += width+sz;

      let y = ((yoff + i * sz) % (height+sz)) - sz;
      if (y < -sz) y += height+sz;

      rect(x, y, sz, sz);
      text(i * 10 + j, x + sz/2, y + sz/2);
    }
  }
}