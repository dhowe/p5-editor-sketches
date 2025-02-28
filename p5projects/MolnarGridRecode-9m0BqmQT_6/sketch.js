function setup() {
  createCanvas(490, 490);
  noFill();
  background(220);

  for (let i = 0; i++ < 7;) {
    for (let j = 0; j++ < 7;) {
      for (let k = 0; k++ < 9;) {

        let sz = k * 7;
        let x1 = (j * 60 - sz / 2) + random(-k, k);
        let y1 = (i * 60 - sz / 2) + random(-k, k);

        let x2 = x1 + sz + random(-k, k);
        let y2 = y1 + random(-k, k);

        let x3 = x1 + sz + random(-k, k);
        let y3 = y1 + sz + random(-k, k);

        let x4 = x1 + random(-k, k);
        let y4 = y1 + sz + random(-k, k);

        strokeWeight(random(0.5, 2));
        stroke(random(70, 180));
        
        if (random() < k / 4) {
          quad(x1, y1, x2, y2, x3, y3, x4, y4);
        }
      }
    }
  }
}