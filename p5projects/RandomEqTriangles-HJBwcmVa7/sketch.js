function setup() {
  createCanvas(200, 200);
  noFill();
  background(245);
  
    for (var i = 0; i < 20; i++) {
      var len = random(20,50);
      eqTriangle(random(50,150),random(50,150),len);
      
    }
  
}

function eqTriangle(x, y, len) {
  var ax = x;
  var ay = y - (len * (sqrt(3) / 3));
  var bx = x - len / 2;
  var by = y + (len * (sqrt(3) / 6));
  var cx = x + len / 2;
  var cy = y + (len * (sqrt(3) / 6));
  triangle(ax, ay, bx, by, cx, cy);
}