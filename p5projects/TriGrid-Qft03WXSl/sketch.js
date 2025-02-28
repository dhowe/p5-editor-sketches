function setup() {
  
  createCanvas(600, 600);
  rectMode(CENTER);
  noFill();
}

function draw() {
  background(247,245,239,32);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let x = 100+j*100;
      let y = 100+i*100;
      for (let k = 0; k < 10; k++) {
        let sz = (10-k+1) * 10;
        push();
        translate(x,y);
        stroke(i*50,j*50,k*25);
        rotate(PI*sin(frameCount/50));
        rect(0, 0, sz, sz);
        pop();
      }
    }
  }
}