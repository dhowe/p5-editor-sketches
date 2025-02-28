function setup() {
  
  createCanvas(800, 700);
  rectMode(CENTER); // not needed
  getColors();
  tile(width/2, height/2, width *.95, height *.95);
  for (let i = 0; i < 2; i++) filter(ERODE);
}

function tile(x, y, w, h) {

  fill(colors[int(random(colors.length))]);
  rect(x, y, w, h);

  if (random() > w/(width/2)) return; // more chance as we get smaller
    
  // pick a dividing point
  let rx = random(x-w*0.3, x+w*0.3); // not too close to edge
  let ry = random(y-h*0.3, y+h*0.3);

  // corner points are helpful
  let lrx = x + w/2, lry = y + h/2;
  let urx = x + w/2, ury = y - h/2;
  let ulx = x - w/2, uly = y - h/2;
  let llx = x - w/2, lly = y + h/2;
  
  if (w > 20 && h > 20) {  // clockwise
    tile(rx - (rx-urx) / 2, ry - (ry-ury) / 2, urx-rx, ry-ury);  // UR
    tile(rx + (lrx-rx) / 2, ry + (lry-ry) / 2, lrx-rx, lry-ry);  // LR
    tile(rx - (rx-llx) / 2, ry - (ry-lly) / 2, rx-llx, lly-ry);  // LL
    tile(rx - (rx-ulx) / 2, ry - (ry-uly) / 2, rx-ulx, ry-uly);  // UL
  }
}

function getColors() { 
  colors = [ color(8,8,0), color(211,213,210),  color(214,211,210),     
             color(183,68,48),color(230,189,90),color(30,63,107)];
}