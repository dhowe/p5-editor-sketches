function setup() {
  createCanvas(600, 600);
  noStroke();
  background(245);
}

function draw() {
  fill(random(10,frameCount/5), random(10,100),random(200,255),random(20,100));
  rect(
    random(50,450), // x-pos
    random(50,450), // y-pos
    random(5,100),  // height
    random(5,100) // width
  );
}
