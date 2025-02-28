function setup() {
  
  createCanvas(600, 600);
  rectMode(CENTER);
  noFill();
  strokeWeight(1.3);
  background(247,245,239);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let x = 100+j*100;
      let y = 100+i*100;
      rect(x, y, 90, 90);
      for (let k = 0; k < 10; k++) {
        let sz = (k+1) * 10;
        if (random(1) < .6) {
          rect(x+random(-25,25), y+random(-25,25), sz, sz);
        }
      }
    }
  }
}