function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let lh = height/6;
  for (let i = 0; i < 5; i++) {
    
	line(0,lh*(i+1),width,lh*(i+1));		
  }

}