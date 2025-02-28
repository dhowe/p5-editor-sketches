
let pt1, pt2, cp1, cp2, pts, dragIndex;

function setup() {
  createCanvas(400, 400);
  pt1 = createVector(20, 200);
  pt2 = createVector(380, 200);
  cp1 = createVector(150, 100);
  cp2 = createVector(250, 300);
  pts = [pt1, pt2, cp1, cp2];
} 

function draw() {
  background(230);
  noFill();
  stroke(0);
  
  // draw cubic bezier curve using only line()  
  beginShape();
  for (let i = 0; i <= 1.01; i+=0.01){
    let a = createVector(lerp(pt1.x, cp1.x, i), lerp(pt1.y, cp1.y, i));
    let b = createVector(lerp(cp1.x, cp2.x, i), lerp(cp1.y, cp2.y, i));
    let c = createVector(lerp(cp2.x, pt2.x, i), lerp(cp2.y, pt2.y, i));
    let d = createVector(lerp(a.x, b.x, i), lerp(a.y, b.y, i));
    let e = createVector(lerp(b.x, c.x, i), lerp(b.y, c.y, i));
    let f = createVector(lerp(d.x, e.x, i), lerp(d.y, e.y, i));

    circle(d.x, d.y, 5);
    circle(e.x, e.y, 5);
    line(d.x, d.y, e.x, e.y);
    vertex(f.x, f.y);
  }
  stroke('red');
  endShape();

   // make draggable
  dragIndex = 0;
  pts.forEach((p,i)=>{
    if (mouseX > p.x - 7 && mouseX < p.x + 7 && mouseY > p.y - 7 && mouseY < p.y + 7) dragIndex = i+1;
    fill('red');
    circle(p.x,p.y,7)
  });

}
function mouseDragged() {
  if (dragIndex) {
    let dragPt = pts[dragIndex-1];
    dragPt.x = mouseX;
    dragPt.y = mouseY;
  }
}

