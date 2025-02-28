function setup() {
  createCanvas(200, 960);
  background(220);


  stroke(0);
  strokeWeight(1);
  noFill();
  scale(2);
  
  for (var j = 0; j < 10; j++) {
    for (var i = 0; i < 10; i++) {
      
      rect(i * j, i * j, i * j, i * j);
    }
  }

  push();
  translate(0, 120);
  fill(220);
    noStroke();
  rect(0, 0, width, height);
  noFill();
  stroke(0);

  for (var j = 0; j < 10; j++) {
    for (var i = 0; i < 10; i++) {

      rect(i * 10, i * 10, 10, 10);
    }
  }

  translate(0, 120);
  fill(220);
  noStroke();
  rect(0, 0, width, height);
  noFill();
  stroke(0);
  
  for (var j = 0; j < 10; j++) {
    for (var i = 0; i < 10; i++) {

      rect(1 + i * 10, 2 + j * 10, 8, 5);
    }
  }

  translate(0, 120);
  fill(220);
	noStroke();
  rect(0, 0, width, height);
  noFill();
  stroke(0);
  
  for (var j = 0; j < 10; j++) {
    for (var i = 0; i < 10; i++) {
      
      rect(j * 10, 90-j * 10, 10, 10);
    }
  }
  
  
  
  
  
  pop();
  stroke(255);
  strokeWeight(20);

  line(0, 110, width, 110);
  line(0, 230, width, 230);
  line(0, 350, width, 350);
  line(0, 470, width, 470);
}