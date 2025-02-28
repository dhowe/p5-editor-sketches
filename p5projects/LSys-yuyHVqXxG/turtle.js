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