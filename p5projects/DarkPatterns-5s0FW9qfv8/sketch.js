function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(245,1);
  let k = 0;
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      let x = i * 50 + 25;
      let y = j * 50 + 25;
      let sn = sin(k + frameCount / 10);
      let sn2 = cos(k + frameCount / 9);
      let r = frameCount%100
      stroke(r, (frameCount / 8) * 2);
      fill((frameCount/50)%155+50, frameCount / 8);
      x = ((x + sn2 * 5) + frameCount) % width;
      
      ellipse(x, 
             y + sn * 10, 
             50 + sn * 80, 
             50 + sn2 * 90);
      k++;
    }
  }
}