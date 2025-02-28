let pos = [];

function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(220);
  for (let j = 0; j < pos.length; j++) {
    let coords = pos[j];
    for (let i = 0; i < coords.ringCount; i++) {
      circle(coords.x, coords.y, (i + 1) * 5);
      coords.y += 0.1;
    }
  }
}

function mousePressed() {
  let posObj = {x: mouseX, y:mouseY, ringCount: floor(random(2,20))};
  pos.push(posObj);
  console.log(posObj);
}
