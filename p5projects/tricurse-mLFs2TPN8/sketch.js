let depth = 0,
  maxDepth = 20;

function setup() {
  createCanvas(1200, 800);
  background(255);
  noFill();
  stroke(0);
  strokeWeight(0.1);

  setInterval((_) => { // animate
    if (depth++ < maxDepth) {
      tri([0, 0], [width, 0], [width, height], depth); // left
      tri([0, 0], [0, height], [width, height], depth); // center
    }
  }, 200);
}

function tri(a, b, c, depth) {
  
  if (depth <= 0) return;
//noFill(0);
  //_triangle(a, b, c);

  
  let hyp = hypotenuse([ [a, b], [b, c],[c, a],]);


  // slide along the hypotenuse
  let midpt = pointOnLine(hyp[0], hyp[1], 0.5);
  
      let pts = [a, b, c];

  // let cx = (pts[0][0]+pts[1][0]+ pts[2][0])/3;
  // let cy = (pts[0][1]+pts[1][1]+ pts[2][1])/3;
  fill(0);
  line(pts[1][0],pts[1][1],midpt[0],midpt[1]);
  //circle(cx,cy,10);
  
  //circle(cx,cy,2*dist(cx,cy,midpt[0],midpt[1]));
  
  for (let i = pts.length - 1; i >= 0; i--) {
    if (eq(pts[i], hyp[0]) || eq(pts[i], hyp[1])) {
      pts.splice(i, 1);
    }
  }

  //random() < 0.8 && 
  tri(midpt, pts[0], hyp[0], depth - 1);
  //random() < 0.8 && 
  tri(midpt, pts[0], hyp[1], depth - 1);
}

function hypotenuse(lines) {
  let hyp, longest = 0;
  for (let i = 0; i < lines.length; i++) {
    let [p1, p2] = lines[i];
    let len = _dist(p1, p2);
    if (len > longest) {
      hyp = lines[i];
      longest = len;
    }
  }
  return hyp;
}

function pointOnLine(a, b, t) {
  return [a[0] * (1.0 - t) + b[0] * t, a[1] * (1.0 - t) + b[1] * t];
}

function _triangle(p1, p2, p3) {
  triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function _dist(p1, p2) {
  return dist(p1[0], p1[1], p2[0], p2[1]);
}

function eq(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
}
