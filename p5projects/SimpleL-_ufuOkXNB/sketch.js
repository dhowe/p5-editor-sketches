let t;

function setup() {
  createCanvas(400, 400);
  t = new Turtle();
  //sierpinski();
  plant();
  //dragon();
}

function dragon() {
    rules = {
    F: 'F+G',
    G: 'F-G'
  };
  t.angle = 90;
  t.length = 5;
  background(255);
  translate(width*.8, height/3);
  t.draw(expand('F',12));
}

function plant() {
  rules = {
    F: 'FF',
    X: 'F+[-F-XF-X][+FF][--XF[+X]][++F-X]'
  };
  t.angle = 10;
  t.length = 7;
  background(255);
  translate(width / 2, height);
  rotate(-PI / 2);
  t.draw(expand('X', 4));
}

function sierpinski() {
  rules = {
    F: 'F-G+F+G-F',
    G: 'GG'
  };
  t.angle = 120;
  t.length = 25;
  background(255);
  translate(0, height);
  t.draw(expand('F-G-G', 4));
}

function expand(s, count) {
  let current = s;
  for (let j = 0; j < count; j++) {
    let pass = '';
    for (let i = 0; i < current.length; i++) {
      let c = current[i];
      pass += rules.hasOwnProperty(c) ? rules[c] : current[i];
    }
    //console.log(j, pass);
    current = pass;
  }
  return current;
}