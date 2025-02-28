let axiom = 'F';
let rules = {
  F: 'F[+F]F[-F]F'
};
let angle = 25.7;
let length = 2;
let times = 5;
let ops = 0;
let current;

function setup() {
  createCanvas(400, 600);
  current = axiom;
  while (times-- > 0) {
    current = expand(current);
  }
}

function draw() {
  background(220);
  translate(width/2, height);
  turtleDraw(current, angle, length, ops);
  ops += 20;
  if (ops === current.length) noLoop();
}

function expand(s) {
  let next = '';
  let rnames = Object.keys(rules);
  for (let i = 0; i < s.length; i++) {
	if (rnames.includes(s[i])) {
      next += rules[s[i]];
    }
    else next += s[i];
  }
  return next;
}

function turtleDraw(sent, ang, len, ops) {
  push();
  for (let i = 0; i < min(ops, sent.length); i++) {
    let s = sent[i];
    if (s === "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (s === "f") {
      translate(0, 0, 0, -len);
    } else if (s === "+") {
      rotate(radians(-ang));
    } else if (s === "-") {
      rotate(radians(ang));
    } else if (s === "[") {
      push();
    } else if (s === "]") {
      pop();
    }
  }
  pop();
}
