let Dist;
let scale;
let dirX;
let dirY;
let col;
let time = [];
let rs;
let myLines = [];
let daily;
let vS;
let vM;
let degreePeriod;
let count = 0;
let myFont1;
let myFont2;
let myFont;
let press = false;
let today = [];
let tomonth = [];
let timer, rg, worker;

function preload() {
  img = loadImage("bg.jpg");
  myFont1 = loadFont("Cinzel-Bold.otf");
  myFont2 = loadFont("CinzelDecorative-Bold.ttf");
  myFont = loadFont("SongT.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  fill(250);
  textFont(myFont2);
  textAlign(CENTER, CENTER);
  noStroke();
  daily = createGraphics(height * 1.25, height * 1.25);
  let charac = splitTokens(
    Lunar.fromDate(new Date()).toFullString(),
    " " + "[" + "]"
  );
  daily.fill(255, 215, 172);
  daily.textFont(myFont);
  for (let i = 0; i < charac.length; i++) {
    daily.textSize(random(height / 48, height / 36));
    daily.text(
      charac[i],
      random(0.25 * height, 1.05 * height),
      random(0.25 * height, 1.05 * height)
    );
  }
  lines = periods;
  timer = millis();
  rg = RiTa.grammar(poem);
  worker = new Worker('worker.js');
  worker.onmessage = receivedPoem;
  //console.log(charac);
  worker.postMessage({a:6});
  console.log('Message posted to worker');
}

function receivedPoem(event) {
  console.log('receivedPoem');
  console.log(event);
  //lines = event.data;
}

function drawxx() {
  background(0);
  dirX = (mouseX / width - 0.5) * 4;
  dirY = (mouseY / height - 0.5) * 4;
  Dist = dist(width / 2, height / 2, mouseX, mouseY);
  scale = map(Dist, width / 2, 0, 1.3, 0.25);
  col = color(165 * scale, 120 * scale, 64 * scale);
  push();
  earth();
  pop();
  if (press == false) {
    push();
    translate(0, 0, height / 2.5);
    text("Twenty-four Tourists", 0, 0);
    pop();
  } else {
    words();
    push();
    translate(0, 0, height / 2.5);
    drawPeriod();
    pop();
  }
  push();
  calendar();
  pop();
}

function mouseClicked() {
  press = true;
}
function words() {
  let now = millis();
  console.log(now - timer);
  if (now - timer >= 1000) {
    if (Dist >= 0.345 * height) {
      //lines = [];
      worker.postMessage();
      timer = now;
    }
  }
}

function light() {
  let time = hour();
  let daylight;
  if (time >= 0 && time < 12) {
    daylight = 44 + time * 4;
  } else if (time >= 12 && time < 24) {
    daylight = 92 - time * 4;
  }
  ambientLight(daylight);
  directionalLight(255, 230, 196, dirX, dirY, -0.4);
}
function calendar() {
  light();
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.002);
  rotateY(frameCount * 0.001);
          texture(daily);
  //  for(let i=0;i<3;i++)
  box(height * 0.8);
}
function earth() {
  light();
sphere(0.32*height);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
