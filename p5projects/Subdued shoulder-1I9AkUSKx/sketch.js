let x = 100, y = 100;

function setup(){
  createCanvas(400, 400);
  //rectMode(CENTER);
  noFill();
}

function draw(){
	background(240);
  
    circle(x,y,10);

	// move the origin to the pivot point
	translate(mouseX, mouseY); 

	// then rotate the grid around the pivot point
	rotate(frameCount/100);

	// and draw the square at the origin
	rect(0, 0, 100, 100);
}