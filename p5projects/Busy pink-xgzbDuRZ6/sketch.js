let rows = 6, cols = 11;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(0);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let w = width / cols;
      let h = height / rows;
      let x = i * width / cols;
      let y = j * height / rows;
      fill(255);
      //rect(x, y, width / cols, height / rows);
      eRect(x + width / cols / 2, y + height / rows / 2, width / cols, height / rows);
    }
  }
  let gx = floor(mouseX/width *cols);
  let gy = floor(mouseY/height *rows);
  
  stroke(200,0,0);
  //text(gx+","+gy,50,50);
  line((gx* width / cols),(gy* height / rows),  ((gx+1)* width / cols),((gy+1)* height / rows));
  line(((gx+1)* width / cols),(gy* height / rows),  ((gx)* width / cols),((gy+1)* height / rows));
}

function eRect(x, y, w, h) {
  for (let k = 0; k < 10; k++) {
    fill(map(k, 0, 9, 255, 0))
    ellipse(x, y, w / k, h / (k + 1));
  }
}