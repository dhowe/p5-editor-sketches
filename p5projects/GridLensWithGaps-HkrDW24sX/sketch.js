function setup() {
  
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  
  background(200);
  
  var sz = width / 17;
  
  for (var i = 0; i < 17; i++) {
    for (var j = 0; j < 17; j++) {
      var x = i * sz + (sz / 2);
      var y = j * sz + (sz / 2);
      fill((dist(mouseX,mouseY,x,y)/60)*200);
      rect(x, y, sz - 3, sz - 3);
    }
  }
}