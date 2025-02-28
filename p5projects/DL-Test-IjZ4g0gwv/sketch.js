function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();

  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {

      //set the relationship between x,y and i,j
      let y = width / 6 * i;
      let x = height / 24 * j;

      //colour in different rows by filling different purple
      if (i < 1) { //row 1
        if ((i + j) % 3 == 0) {
          fill(random(150, 200), random(120, 150), 240);
        }
        if ((i + j) % 3 == 1) {
          fill(random(200, 250), random(170, 190), 250);
        }
        if ((i + j) % 3 == 2) {
          fill(random(200, 250), random(200, 250), 240);
        }

      } else if (i < 2 && i >= 1) { //row 2
        if ((i + j) % 3 == 0) {
          fill(random(140, 170), random(100, 150), 250);
        }
        if ((i + j) % 3 == 1) {
          fill(random(180, 220), random(130, 170), 255);
        }
        if ((i + j) % 3 == 2) {
          fill(random(150, 190), random(110, 150), 255);
        }

      } else if (i < 4 && i >= 2) { //row 3,4
        if ((i + j) % 3 == 0) {
          fill(random(140, 160), random(70, 100), 240);
        }
        if ((i + j) % 3 == 1) {
          fill(random(100, 120), random(50, 70), 180);
        }
        if ((i + j) % 3 == 2) {
          fill(random(90, 100), random(50, 70), 100);
        }

      } else if (i < 5 && i >= 4) { //row 5
        if ((i + j) % 3 == 0) {
          fill(random(160, 200), random(100, 140), 250);
        }
        if ((i + j) % 3 == 1) {
          fill(random(100, 140), random(60, 90), 200);
        }
        if ((i + j) % 3 == 2) {
          fill(random(110, 150), random(50, 80), 220);
        }

      } else {
        fill(123, 159, 220); //row 6
        if ((i + j) % 3 == 0) {
          fill(random(200, 240), random(170, 190), 250);
        }
        if ((i + j) % 3 == 1) {
          fill(random(180, 210), random(160, 180), 250);
        }
        if ((i + j) % 3 == 2) {
          fill(random(140, 170), random(50, 100), 230);
        }
      }
      //create the rectangles by using specific purple
      rect(x, y, width / 24, height / 6);
    }
  }
}