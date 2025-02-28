let depth = 1;
let current = '';
let lsys, turtle;

function setup() {
  createCanvas(400, 400);
  background(255);
  translate(width / 2, height);
  rotate(-PI / 2);

  turtle = new Turtle({ angle: 20 });
  lsys = new LSystem({ F: "F[-F][+F]" });
  let s = lsys.expand('F', 4);
}


class LSystem {
  constructor(rules) {
    this.rules = rules;
    this.output = '';
  }
  
  expandOnce(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let s = str[i];
      if (s in this.rules) {
        result += this.rules[s];
      } else {
        result += s;
      }
    }
    return result;
  }


  expand(str, depth) {
    console.log('expand', str);
    let result = str;
    result += 'X';
    console.log(0,result);
    for (let j = 1; j < depth; j++) {
      result = this.expandOnce(result);
      console.log(j,result);
      
    }
    return result;
  }
}

class Turtle {

  constructor(opts={}) { 
    this.curser = 0;
    this.angle = opts.angle || 20;
    this.length = opts.length || 50;
    this.color = opts.color || color(0,0,0);
    this.weight = opts.weight || 1;
    this.rules = opts.rules || 0;
  }
  
  draw(instructions) {
    //push();
    stroke(this.color);
    strokeWeight(this.weight);
    if (!instructions) throw Error('No instructions');
    for (let i = 0; i < instructions.length; i++) {
      let c = instructions[i];
      if (c === 'F') {
        line(0, 0, this.length, 0);
        translate(this.length, 0);
      }
      else if (c === 'G') {
        translate(this.length, 0);
      } else if (c === '+') {
        rotate(radians(this.angle));
      } else if (c === '-') {
        rotate(radians(-this.angle));
      } else if (c === '[') {
        push();
      } else if (c === ']') {
        pop();
      }
    }
    //pop();
  }
}

// function mouseClicked() {
//   step();
// }

// function step() {
//   push();
//   turtle.draw(current); 
//   console.log(current);
//   current = lsys.expand(current);
//   //turtle.length *= .7;
//   pop();
//   //current = next.slice(current.length);
// }