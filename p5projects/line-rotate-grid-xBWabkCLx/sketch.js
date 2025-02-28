let rseed;

function setup() {
  createCanvas(400, 400);
  rseed = random(99999);
}

function draw() {
  background(245);
  randomSeed(rseed);
  noFill();

  let sz = 40;
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      push();
      // translate to grid position
      translate(i * 40 + 20, j * 40 + 20);
      
      // line end points
      let x1 = random(-20, 0);
      let x2 = random(0, 20);
      let y1 = random(-20, 0);
      let y2 = random(0, 20);
      
      // translate to line center
      let xmid = x1+(x2-x1)/2;
      let ymid = y1+(y2-y1)/2;
      translate(xmid, ymid);
      
      // rotate with random speed/offset
      let spd = random(1,2);
      rotate(radians(random(TWO_PI)+frameCount/spd));
      circle(0,0, 5); // draw-center
      
      // translate back and draw line
      translate(-xmid, -ymid);
      line(x1,y1,x2,y2);
      pop();
    }
  }
}
