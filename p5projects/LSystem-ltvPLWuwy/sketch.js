
let Dragon = {
  axiom: 'F',
  angle: 90,
  rules: {
    F: 'F+G',
    G: 'F-G'
  }
};

let Sierpinksi = {
  axiom: 'F-G-G',
  angle: 120,
  rules: {
    F: 'F-G+F+G-F',
    G: 'GG',
  }
};

let Tree = {
  axiom: 'F',
  angle: 25,
  rules: {
    F: 'FF+[+F-F-F]-[-F+F+F]'
  }
};

let Koch = {
  axiom: 'F',
  angle: 90,
  rules: {
    F: 'F+F-F-F+F'
  }
};


let current = Sierpinksi;
let length = 4;
let sentence, angle, rules;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  background(51);
  sentence = current.axiom;
  angle = current.angle;
  rules = current.rules;
  
  createP(sentence).style('color','#fff');
}

function expand() {
  //length *= .8;
  let result = '';
  for (let i = 0; i < sentence.length; i++) {
    let s = sentence[i];
    if (s in rules) {
      result += rules[s];
    } else {
      result += s;
    }
  }
  sentence = result;
  createP(sentence).style('color','#fff');
}

function draw() {
  background(51);
  resetMatrix();
  translate(width/2,0);
  rotate(-30);
  stroke(255, 100);
  background(51);

  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);
    if (current == "F" || current == "G") {
      line(0, 0, 0, length);
      translate(0, length);
    } else if (current == "+") {
      rotate(-angle);
    } else if (current == "-") {
      rotate(angle);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
  noLoop();
}

function mouseClicked() {
  expand();
  draw();
}


