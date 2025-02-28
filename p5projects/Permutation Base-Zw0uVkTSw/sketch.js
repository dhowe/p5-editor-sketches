let perms = [];
function setup() {
  createCanvas(650, 200);
  textFont('courier', 122);
  fill(255);
  for (let i = 0; i < 4096; i++) {
	let base4 = i.toString(4);	
    while (base4.length < 6) base4 = '0' + base4;
    perms.push(base4);
  }
  console.log(perms.slice(0,10));
  frameRate(10);
}
function draw() {
  background(0,0,100);
  text(perms[frameCount%perms.length],100,135)
}

