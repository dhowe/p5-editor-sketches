function setup() {
  createCanvas(400, 400);
  background(235);
  noFill();
  
  let pts = randomCurve(10, true);
  
  const controlPoints = pts.map((pt, i) => {
    const prev = pts[(i-1+pts.length)%pts.length]
    const next = pts[(i+1)%pts.length]
    const tangent = next.copy().sub(prev)
    
    const tightness = 0.5
    return {
      pt,
      left: pt.copy().sub(tangent.copy().setMag(min(pt.dist(prev), tangent.mag()/2) * tightness)),
      right: pt.copy().add(tangent.copy().setMag(min(pt.dist(next), tangent.mag()/2) * tightness)),
    }
  })
  
  beginShape();
  let prev = controlPoints.at(-1)
  vertex(prev.pt.x, prev.pt.y)
  controlPoints.forEach((current) => {
    bezierVertex(
      prev.right.x, prev.right.y,
      current.left.x, current.left.y,
      current.pt.x, current.pt.y
    )
    prev = current
    circle(current.pt.x, current.pt.y, 2);
  });
  endShape();
}

function randomCurve(num, sorted = false, margin = 100) {
  let pts = [];
  
  // random points
  for (let i = 0; i < num; i++) {
    pts.push(
      createVector(
        random(margin, width - margin),
        random(margin, height - margin)
      )
    );
  }
  
  if (sorted) pts = sortClockwise(pts);
  
  // repeat the first three
  // for (let i = 0; i < 3; i++) {
  //   pts.push(createVector(pts[i].x, pts[i].y));
  // }
  
  return pts;
}


function sortClockwise(points) { // helper

  if (!points || !points.length) return points;

  // Clone and sort from top to bottom
  const ySortedPoints = [...points].sort((a, b) => a.y - b.y);

  // Get center y of all points
  const cy = (ySortedPoints[0].y + ySortedPoints[ySortedPoints.length - 1].y) / 2;

  // Sort from right to left
  const xSortedPoints = [...ySortedPoints].sort((a, b) => b.x - a.x);

  // Get center x of all points
  const cx = (xSortedPoints[0].x + xSortedPoints[xSortedPoints.length - 1].x) / 2;

  // Angle between center and point
  const angle = (point) => Math.atan2(point.y - cy, point.x - cx);

  //  Sort clockwise by angle
  return [...points].sort((a, b) => angle(b) - angle(a));
}