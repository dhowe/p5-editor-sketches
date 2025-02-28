function setup() {
  createCanvas(400, 400);
  background(255);
  angleMode(DEGREES);
  
  let r = 75;
  let p = createVector(200, 220);
  let v = createVector(1, 1);
  let ang = v.heading();
  let off = degrees(2.5);
  
  circle(p.x, p.y, r * 2); // point on circle in heading direction

  circle(p.x + cos(ang) * r, p.y + sin(ang) * r, 6); 

  //circle(p.x + cos(ang + off) * r, p.y + sin(ang - off) * r, 6);
  circle(p.x + cos(ang - off) * r, p.y + sin(ang - off) * r, 6);

  //circle(p.x + cos(ang - off) * r, p.y + sin(ang + off) * r, 6);
  circle(p.x + cos(ang + off) * r, p.y + sin(ang + off) * r, 6);
}
