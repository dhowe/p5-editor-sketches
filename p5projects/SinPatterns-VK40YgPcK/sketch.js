function setup() {
  createCanvas(400, 400);
  frameRate(30);
  //createLoop({duration:5, gif:{render:false, download:true}});
}

function draw() {
  background(220,32);
  let k = 0;
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      let sfc = sin(frameCount/25+k);
      let sfc2 = cos(frameCount/20+k);
      let sz = map(sfc, -1, 1, 20, 80);
      let f = map(sfc2, -1, 1, 0, 200);
      fill(f,32);
      circle(i*40+20, j*40+20, sz);
      k++;
    }
  }
}