let x=100, y= 100, angle = 20,
    rad = 50, sx, sy;
function setup() {
  createCanvas(400, 400);
  background(255);
  angleMode(DEGREES);
  noFill();
  circle(x,y,rad*2);
  sx = x + rad * 2 * cos(angle);
  sy = y + rad * 2 * sin(angle);
  circle(sx,sy,rad*2);
  
  let num = 5, view = 45;
  samplePoints().forEach(p => circle(p[0], p[1], 5));
}

class Tester {
 samplePoints(viewport = 120) {
    let num = 7, pts = [];
    let nextX = x + rad * 2 * cos(angle);
    let nextY = y + rad * 2 * sin(angle);
    pts.push([nextX - rad/2 * cos(angle), nextY - rad/2 * sin(angle)]);
    pts.push([nextX + rad/3 * cos(angle), nextY + rad/3 * sin(angle)]);
    for (let i = 0; i < num; i++) {
      let s = angle-viewport;
      let theta = map(i, 0, num-1, angle-viewport, angle+viewport);//angle - viewport, angle + viewport);
      print(theta);
      let sx = nextX + rad * cos(theta);
      let sy = nextY + rad * sin(theta);
      //console.log(sx,nx)
      pts.push([sx, sy]);//, [nx2, ny2]);
    }
    return pts;
  }


  stepCausesCollisionPixels(rad = this.radius, angle = this.angle, viewport = 45) {
    loadPixels();
    let hit = this.samplePoints(this.x, this.y, rad, angle, viewport).find(pt => {
      let index = 4 * pd * (pt[1] * pd * width + pt[0]);
      return pixels[index] === 0;
      //hit && console.log('hit', pt, get(pt[0], pt[1]));
      return hit;
    });
    return hit ? true : false;
  }
}
