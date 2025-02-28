let img;

function preload() {
  chess = loadImage('https://i.ibb.co/7kbh6ss/grid.jpg');
}

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
	background(50);
	
	push();
	translate(-150, 100);
	rotateY(frameCount * 0.009);
	rotateZ(0.05);
	texture(chess);
	noStroke();
	cylinder(50, 200);
	pop();

}
