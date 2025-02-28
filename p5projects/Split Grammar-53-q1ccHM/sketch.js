let grammar = {
  start: 'These $adj ideas $verb endlessly.',
  adj: 'angry | cool | verdant',
  verb: 'scream | spin'
}
let rg = RiTa.grammar(grammar);

function setup() {
  createCanvas(500, 200);
  textSize(26);
  textAlign(CENTER, CENTER);
  mouseReleased();
}

function mouseReleased() {
  
  let result = rg.expand();  
  background(240);
  text(result, width/2, height/2);
}