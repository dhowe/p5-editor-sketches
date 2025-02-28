let pt1, pt2, cp1, cp2, pts, dragIndex;

function setup() {
  createCanvas(400, 400);
  pt1 = createVector(20, 200);
  pt2 = createVector(380, 200);
  cp1 = createVector(150, 100);
  cp2 = createVector(250, 300);
  pts = [pt1,pt2,cp1,cp2];
}

function draw() {
  background(230);

  for (let i = 0; i < 1; i+=0.1){
    // interpolate between pt1 and cp1
    let a = createVector(lerp(pt1.x, cp1.x, i), lerp(pt1.y, cp1.y, i));
    // interpolate between cp1 and pt2
    let b = createVector(lerp(cp1.x, pt2.x, i), lerp(cp1.y, pt2.y, i));
    line(a.x, a.y, b.x, b.y);
  }
  
  for (let i = 0; i < 1; i+=0.1){
    // interpolate between pt2 and cp2
    let a = createVector(lerp(pt2.x, cp2.x, i), lerp(pt2.y, cp2.y, i));
    // interpolate between cp2 and pt1
    let b = createVector(lerp(cp2.x, pt1.x, i), lerp(cp2.y, pt1.y, i));
    line(a.x, a.y, b.x, b.y);
  }
  
  // make draggable
  dragIndex = 0;
  pts.forEach((p,i)=>{
    if (mouseX > p.x - 7 && mouseX < p.x + 7 && mouseY > p.y - 7 && mouseY < p.y + 7) {
      dragIndex = i+1;
    }
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
