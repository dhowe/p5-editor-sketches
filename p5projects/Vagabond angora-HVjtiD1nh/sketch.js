function setup() {
  createCanvas(400, 400);
  background(255);
  translate(width/2, height/2)
  scale(20);
  strokeWeight(.1);
  line(0, -height/2,0,height/2);
  line(-width/2,0,width/2, 0);
  point(0,0);
  let v = createVector(3,4);
  stroke('red');
  line(0,0,v.x,v.y);
  console.log(dist(0,0,v.x,v.y));
  
  let theta = radians(36.87);
  let x = 5 * sin(theta);
  let y = 5 * cos(theta);
  stroke('blue');
  line(0,0,x,y);

  
}
