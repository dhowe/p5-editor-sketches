function setup() {
  createCanvas(500, 500);
  background(255);
  var sz = width * 3;
  for (var j = 0; j < 10; j++) {
		noFill();   
    stroke(0);
    rect(sz / 2, sz / 2, sz, sz);
    for (var i = 0; i < 10; i++) {
      noStroke();
      fill(240-(i*(240/9)));
      ellipse(sz / 2, sz / 2, sz/2/(i+1), sz/2/(i+1));
    }
    sz /= 2;
  }
}