class ParticleSystem {
  constructor(px, py) {
    this.particles = [];
    this.x = px;
    this.y = py;
  }
  
  render() {
    for (let i = 0; i < 5; i++) {
      let p = new Particle(this.x, this.y);
      this.particles.push(p)
    }

    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];
      p.update();
      p.render();
      if (p.y > height) {
        this.particles.splice(i, 1);
      }
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xacc = 0;
    this.yacc = 0.098;
    this.xspd = random(-0.5, 0.5);
    this.yspd = random(-3, -5);
    this.size = 5;
  }
  update() {
    this.xspd += this.xacc;
    this.yspd += this.yacc;
    this.x += this.xspd;
    this.y += this.yspd;
  }
  render() {
    fill(0,100);
    circle(this.x, this.y, this.size);
  }
}
