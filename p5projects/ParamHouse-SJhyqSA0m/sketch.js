function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(150);
  
	house(40,100,40,30);	
  house(120,100,100,60);	
	house(250,50,30,200);

  noFill();
  stroke(200,0,0);
	
	rect(40,100,40,30);	
  rect(120,100,100,60);	
	rect(250,50,30,200);
}

function house(x,y,w,h) {
  var rx = x;
  var ry = y+h*.4;
  rect(rx,ry,w,h*.6);
  triangle(rx,ry,rx+w,ry,rx+w/2,ry-h*.4);
}

function houseA(x,y) {
  rect(x,y,40,30);
  triangle(x,y,x+40,y,x+20,y-20);
}