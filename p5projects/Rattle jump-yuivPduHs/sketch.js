function setup() {
  createCanvas(400, 300);
  background(245);
  dividedRect(20, 20, 100, 200);
  dividedRect(170, 20, 200, 100);
  dividedRect(160, 160, 150, 100);
}


function dividedRect(x,y,w,h) {
  rect(x,y,w,h);
  line(x,y,x+w,y+h);
}

