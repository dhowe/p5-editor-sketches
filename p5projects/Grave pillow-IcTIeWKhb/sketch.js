function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop();

  textSize(140);

  //rectMode(CENTER);
  const I = textWidth("I");
  const A = textWidth("A");
  console.log("A", A); // 25.60546875 in 2.x, and 26.6796875 in 1.x
  console.log("I", I); // 3.92578125 in 2.x, and 11.11328125 in 1.x'
  
  fill(200);
  noStroke();
  rect(width / 2, height / 2, textWidth("I"),  -textAscent("I"))
  rect(width / 2, height / 2+150, textWidth("A"),  -textAscent("A"))
    
  stroke("red");
  let bb = textBounds("I", width / 2, height / 2);
  rect(bb.x, bb.y, bb.w, bb.h);
  bb = textBounds("A", width / 2, height / 2 + 150);
  rect(bb.x, bb.y, bb.w, bb.h);


  fill(0);
  noStroke();
  text("I", width / 2, height / 2);
  text("A", width / 2, height / 2 + 150);
}
