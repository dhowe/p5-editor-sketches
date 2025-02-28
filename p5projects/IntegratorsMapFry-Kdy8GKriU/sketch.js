let mapImage,
  locationTable,
  nameTable,
  rowCount,
  dataTable,
  dataMin = -10,
  dataMax = 10,
  closestDist,
  closestText,
  closestTextX,
  closestTextY,
  interpolators = [];

function preload() {
  mapImage = loadImage("map.png");
  nameTable = loadTable("names.tsv", "tsv");
  dataTable = loadTable("random.tsv", "tsv");
  locationTable = loadTable("locations.tsv", "tsv");
}

function setup() {
  createCanvas(640, 400);
  rowCount = dataTable.getRowCount();

  // Setup: load initial values into the Integrator.
  interpolators = [];
  for (let row = 0; row < rowCount; row++) {
    let initialValue = dataTable.getRow(row).getNum(1);
    interpolators[row] = new Integrator(initialValue);
  }
  //textFont(font);
  noStroke();
}

function draw() {
  background(255);
  image(mapImage, 0, 0);
  
  // Draw: update the Integrator with the current values,
  // which are either those from the setup( ) function
  // or those loaded by the target( ) function issued in
  // updateTable( ).
  for (let row = 0; row < rowCount; row++) {
    interpolators[row].update();
  }
  
  closestDist = Infinity;
  for (let row = 0; row < rowCount; row++) {
    let abbrev = locationTable.getString(row, 0);
    let x = locationTable.getNum(row, 1);
    let y = locationTable.getNum(row, 2); 
    //console.log(state+","+x+","+y);
    drawData(x, y, row, abbrev);
  }
  if (closestDist != Infinity) {
    fill(0);
    textAlign(CENTER);
    text(closestText, closestTextX, closestTextY);
  }
}

function drawData(x, y, row, abbrev) {
  // Get the current value.
  let value = interpolators[row].value();
  let radius = 0;
  if (value >= 0) {
    radius = map(value, 0, dataMax, 1.5, 15);
    fill("#4422CC"); // blue
  } else {
    radius = map(value, 0, dataMin, 1.5, 15);
    fill("#FF4422"); // red
  }
  ellipseMode(RADIUS);
  ellipse(x, y, radius, radius);
  let d = dist(x, y, mouseX, mouseY);
  if (d < radius + 2 && d < closestDist) {
    closestDist = d;
    let tableRow = nameTable.findRow(abbrev, 0);
    let name = tableRow.getString(1);
    // Use target (not current) value for showing the data point.
    let val = nfp(interpolators[row].target(), 0, 2);
    closestText = name + " " + val;
    closestTextX = x;
    closestTextY = y - radius - 4;
  }
}

function keyPressed() {
  if (key == " ") updateTable();
}

function updateTable() {
  for (let row = 0; row < rowCount; row++) {
    let newValue = random(-10, 10);
    interpolators[row].target(newValue);
  }
}
