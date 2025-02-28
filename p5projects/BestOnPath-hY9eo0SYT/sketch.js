class C {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
  draw() {
    circle(this.x, this.y, 20);
    fill(255);
    text(this.name, this.x, this.y);
  }
  dataSync() {
    return [this.x, this.y];
  }
}

function distSquared(a,b) { // arrays
  if (a.length != b.length) throw Error('bad inputs');
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += (a[i]- b[i]) * (a[i]- b[i]);
  }
  return d;
}

let choices = [];

function bestOnPath(names,c,t) {
  
  let maxDist = distSquared(c.dataSync(), t.dataSync())
  //let maxDist = dist(c.x,c.y, t.x,t.y);
  //console.log("max="+maxDist);
  let dists = {};
  names.forEach(n => {
    let o = choices[n];
    if (!o) throw Error('candidate "'+n+'" not in model');
    //let dc = dist(o.x,o.y, c.x, c.y), dt = dist(o.x,o.y, t.x, t.y);
    let dc = distSquared(c.dataSync(), o.dataSync());
    let dt = distSquared(t.dataSync(), o.dataSync());
    if (dc < maxDist && dt < maxDist) {
      dists[o.name] = dt + dc * 5; // weight toward current
    }
  });
  // sort by distance
  let sorted = Object.entries(dists).sort(([,a],[,b]) => a - b);
  sorted.forEach(s => console.log(s[0] + ': '+s[1])); // log dists
  
  return sorted.map(s => s[0]);   // return names only, in sorted order
}



function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  background(220);
  
  let t = new C('t',random(20,580),random(20,580));
  let c = new C('c',random(20,580),random(20,580));
  for (let i = 0; i < 10; i++) {
    let nm = char(100+i);
    choices[nm] = new C(nm, random(20,580), random(20,580));
  }

  Object.values(choices).forEach(c => fill(0) && c.draw())
  
  fill(200,100, 200);
  c.draw();
  fill(100,200,100);
  t.draw();
  noFill();
  
  let best = bestOnPath(Object.keys(choices), c, t);
  if (best.length) best.forEach((n,i) => {
    let o = choices[n];
    stroke(100);
    strokeWeight(1);
    if (i == 0) { 
      strokeWeight(4);
      stroke(200, 0, 0);
    }
    circle(o.x, o.y, 30);
  });
}