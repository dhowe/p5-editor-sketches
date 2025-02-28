let walkers = [];
let maxDist = 100;

function setup() {
  createCanvas(400, 500);
  background(240);
  frameRate(20);
  new Walker(205, 250, PI / 2);
  new Walker(200, 245, PI);
  new Walker(195, 250, -PI / 2);
  new Walker(200, 255, TWO_PI);
}

function draw() {
  noFill();
  circle(width / 2, height / 2, width / 2);
  for (let i = walkers.length - 1; i >= 0; i--) {
    if (!walkers[i].update()) {
      let done = walkers.splice(i, 1)[0];
      
      if (done.path.length > 2) {
        let bpt = done.path[floor(random(1, done.path.length - 1))];
        //console.log("BRANCH: " + bpt);
        fill(200, 20, 0);
        circle(bpt.x, bpt.y, 10);
      }
      done.destroy();
    }
    else {
      walkers[i].render();
    }
  }
}

function paths() {
  let all = [];
  walkers.forEach((w) => all.push(...w.path));
  return all;
}
