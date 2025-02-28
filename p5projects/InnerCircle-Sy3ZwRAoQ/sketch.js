function setup() {
    createCanvas(400, 400);
    noFill();
    var x = width / 2;
    var sz = width;
    for (var i = 0; i < 5; i++) {
      ellipse(x, height / 2, sz);
      x += sz/4;
      sz /= 2;
    }
  }
