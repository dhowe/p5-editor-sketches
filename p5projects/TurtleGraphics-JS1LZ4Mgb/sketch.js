let start = 'F';
let rules = {
  F: 'F[-F][+F]'
};

function setup() {
  createCanvas(400, 400);
  background(255);
  translate(width/2, height);
  rotate(-PI/2);
  let t = new Turtle();
  t.draw('F[+F][-F]');  
}
