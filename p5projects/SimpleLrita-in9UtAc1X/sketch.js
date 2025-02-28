let rules = {
  start: 'X',
  F: 'FF',
  X: 'F+[-F-XF-X][+FF][--XF[+X]][++F-X]'
};
let angle = 10;
let length = 7;

let rg, result;

function setup() {
  createCanvas(400, 400);
  background(255);

  rg = RiTa.grammar(rules);
  
  for (let i = 0; i < 4; i++) {
    result = rg.expand().toUpperCase();
    rg.rules.$$start = result.replace(/([AB])/g, "$$$1");
  }
  
  console.log(result);
  //turtle = new Turtle({ length, angle });
  // translate(200, 200);
  // turtle.draw(result);
}