function setup() {

  createCanvas(300, 300);
  background(255);
  let y, lastX;

  for (let i = 0; i < width; i++) {
    y = 50 + (sin(i / 10) / 2 + 0.5) * (width - 100);
    if (i > 0) {
      //strokeWeight(map(i,0,width-1,1,10));
      line(i, y, i - 1, lastY);
      //line(i,0,i,height);
    }
    lastY = y;
  }

  // for (let i = 0; i < height; i++) {
  //   x = 50+(sin(i/10)/2+0.5) * (width-100);
  //   console.log(x,i);
  //   if (i > 0) {
  // line(x, i, lastX, i-1);
  //   }
  //   lastX = x;
  // }


}