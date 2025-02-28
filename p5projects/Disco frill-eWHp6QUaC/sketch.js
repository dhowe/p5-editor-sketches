let psystems = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = 100 + j * 200;
      let y = 150 + i * 200;
      let ps = new ParticleSystem(x,y);
      psystems.push(ps);
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < psystems.length; i++) {
    psystems[i].render();
  }
}
