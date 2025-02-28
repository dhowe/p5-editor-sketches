let imgs = [];
let sz = 100;

function preload() {
  for (let i = 1; i < 10; i++) {
    let img = loadImage(i + ".jpg");
    imgs.push(img);
  }
}

function setup() {
  createCanvas(300, 300);
  //image(imgs[7], 10,10);
  //noLoop();
}

function draw() {
  background(220);

  let k = 0;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let sqX = i * sz;
      let sqY = j * sz;

      square(sqX, sqY, sz);

      // is mouse over this cell ?
      // compare mouseX/mouseY to sqX/sqY
      if (mouseX > sqX && mouseX < sqX + sz) {
        if (mouseY > sqY && mouseY < sqY + sz) {
          image(imgs[k], sqX, sqY, sz, sz);
        }
      }
      k++;
    }
  }
}
