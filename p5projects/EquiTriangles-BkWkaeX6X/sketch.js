function setup() {
  createCanvas(400, 400);
  stroke(240);
}

function draw() {
  
  translate(200,200);
  
  var len = width * sqrt(3)/2;
  for (var i = 0; i < 10; i++) {
    rotate(((i%2*2)-1)*radians(frameCount*(i+1)));
  	eTriangle(0, 0, len);
    len *= sqrt(3)/3; 
  }
  
}


function eTriangle(x, y, len) {
  
  var ax = x;
  var ay = y - (len * (sqrt(3)/3));
  var bx = x - len/2;
  var by = y + (len * (sqrt(3)/6));
  var cx = x + len/2;
  var cy = y + (len * (sqrt(3)/6));
  
  fill(255);
  //ellipse(x, y, len*(sqrt(3)/3));  // inner
  ellipse(x, y, dist(x,y,ax,ay)*2); // outer

  fill(120);
  triangle(ax, ay, cx, cy, bx, by);
}
