var position, lastFetch = 0, wind, display = [];
var cities = ['New York', 'Hong Kong', 'Berlin', 'Shanghai'];
var url = 'https://api.apixu.com/v1/current.json?key=513d8003c8b348f1a2461629162106&q=';

function setup() {
  
  createCanvas(250, 200);
  url += cities[floor(random(cities.length))];
  position = createVector(width / 2, height / 2);
  wind = createVector();
  
  loadJSON(url, gotData); // request the data
}

function draw() {
  background(230);

  // draw an arrow pointing in wind direction
  push();
  translate(width-45, 40);
  
  // Rotate by the wind's angle
  rotate(wind.heading() + PI / 2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();

  // Move in the wind's direction
  position.add(wind);

  stroke(0);
  line(0,80,width,80);
  
  noStroke();
  fill(200,0,0);
  ellipse(position.x, position.y, 16, 16);

  // If reach the edge, continue at other side
  if (position.x > width) position.x = 0;
  if (position.x < 0) position.x = width;
  if (position.y > height) position.y = 80;
  if (position.y < 80) position.y = height;

  if (lastFetch > 0) {
    if (millis() - lastFetch > 3000) { // check every 3 seconds
      lastFetch = -1;
      loadJSON(url, gotData);
    }
    display[3] = 'Last update: '+nf((millis()-lastFetch)/1000, 1, 1)+' sec ago';
  }

  fill(0);
  for (var i = 0; i < display.length; i++) {
    text(display[i], 20, 20 + i * 15);
  }
}

function gotData(data) {
  console.log(millis() + ": ", data);

  // Get the angle (convert to radians)
  var angle = radians(Number(data.current.wind_degree));

  // Get the wind speed / dir
  var spd = data.current.wind_mph;
  var dir = data.current.wind_dir;

  display[0] = "Location:  "+data.location.name;
  display[1] = "Temp: " + floor(data.current.temp_c) + "° c";
  display[2] = "Wind: at " + spd + " mph from " + dir;
  wind = p5.Vector.fromAngle(angle);

  lastFetch = millis();
}