
function setup() {
  
  createCanvas(400, 400);
  getColors();
  background(235);
  tile(5,5,width-10,height-10);
}

function tile(x, y, w, h) {
  
  noStroke();
  //strokeWeight(1);
  if (h > height/2) {
    strokeWeight(random(0,8));
    stroke(255);
  }
  fill(colors[int(random(colors.length))]);
  rect(x+w*random(), y+h*random(), w*random(), h*random());
  
  // pick a dividing point
  let rx = random(x+w*.2, x+w*.8);
  let ry = random(y+h*.2,y+h*.8);
  
  if (w < 150 && h < 150 && random()< .5) return;
  
  // corner points are helpful
  let ulx = x, uly = y;
  let urx = x + w, ury = y
  let lrx = x + w, lry = y + h;
  let llx = x, lly = y + h;
 
  if (w > 10 && h > 10) {  // clockwise
    
    tile(ulx,uly,rx-ulx,ry-uly);
    tile(rx,uly,urx-rx,ry-ury);
    tile(llx,ry,rx-x,h-ry+y);
    tile(rx,ry,w-rx+x,h-ry+y);
  }
}

function getColors() { 
  colors = [ color(8,8,0), color(211,213,210),  color(214,211,210),     
             color(183,68,48),color(230,189,90),color(30,63,107)];
}