let data;

function preload(){
	data = loadJSON('hkweather.json');	
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(40);
}

function draw() {
  background(245);
  text(data.city.name, 200, 200);  
}