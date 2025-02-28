function setup() {
  createCanvas(400, 400);
  background(240, 242, 234);
  
  rectMode(CENTER);
  fill(62, 61, 57);
  stroke(62, 61, 57);
  
  for (let j = 0; j < width; j += 6) {
    for (let i = 0; i < width; i += 6) {

      if (dist(i, j, width / 2, height / 2) <= 200) {
        if ((i > width / 3 && i < width * 2 / 3 && j < width / 2)) {

          if (random(1) < .1) {
            rect(i, j, random(6, 8), random(3, 4));
          } else if (random(1) < .1) {
            rect(i, j, random(3, 4), random(6, 8));
          }

        } else if (random(1) < .1) {
          rect(i, j, random(4, 20), random(3, 4));

        } else if (random(1) < .1) {
          rect(i, j, random(3, 4), random(4, 20));
        }
      }
    }
  }
}