function setup() {
  createCanvas(400, 400);
  background(255);

  textSize(40);
  console.log("A", fontWidth("A")); // 26.6796875
  console.log("I", fontWidth("I")); // 1.11328125

  fill(200);
  noStroke();
  rect(width / 2, height / 2, fontWidth("I"), fontAscent());
  rect(width / 2, height / 2 + 100, fontWidth("A"), fontAscent());

  fill(0);
  text("I", width / 2, height / 2);
  text("A", width / 2, height / 2 + 100);
}





