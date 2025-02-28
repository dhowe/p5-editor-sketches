let data;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textSize(30);
  noLoop();
  data = cleanData();
  
}

function draw() {
  background(220);
  data.forEach(([x,y,c]) => {
    fill(0,200,0);
    if (c > 0) fill(200,0,0);
    rect(x,y,10);
  });
}

function cleanData() {
  return locations.map(loc => {
    return [
      map(loc.lat, -90, 90, 0, width),
      map(loc.long, -180, 180, 0, height),
      loc.cases
    ]
  });
}

