function setup() {
  createCanvas(300, 300);
  textAlign(CENTER);
  var x = 0,
    y = 0;
  for (var i = 0; i < 9; i++) {
    
    rect(x, y, 100, 100);
    text(i+"",x+50,y+50);
    if (i%3==2) {
       y += 100;
       x = 0;
    }
    else 
			x+= 100;
  }
}