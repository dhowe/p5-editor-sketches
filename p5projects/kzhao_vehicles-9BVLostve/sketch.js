let v = [];
let light = [];
let poison = [];
let maxVehicle = 150;

let lightCount = 150;
let poisonCount = 50;

let colors = ["#f08700", "#f49f0a", "#efca08", "#00a6a6", "#bbdef0"];
//["#ff0000","#feb30f","#0aa4f7","#000000","#ffffff"];
let ypos;

function setup() {
  createCanvas(550, 800);
  reload();
}

function draw() {
  for (var i = v.length-1; i >= 0; i--) {
    if (v[i].health <= 0.0001) {
      v.splice(i, 1);
    } else {
      v[i].eat(light, true);
      v[i].eat(poison, false);
      v[i].update();
      v[i].render();
    }
  }
}

function drawFood() {
  for (let i = 0; i < light.length; i++) {
    light[i].render();
  }
  for (let i = 0; i < poison.length; i++) {
    poison[i].render();
  }
}

function refresh() {
  maxVehicle = floor(random(20, 200));
  lightCount = floor(random(100, 200));
  poisonCount = floor(random(50, 200));
  v = [];
  light = [];
  poison = [];
}

function reload() {
  background(0);
  for (let i = 0; i < maxVehicle; i++) {
    let newV = new Vehicle(
      random(30, width - 30),
      height / 2 + random(-5, 5),
      20,
      20,
      createVector(random(5), random(5))
    );
    v.push(newV);
  }

  for (let i = 0; i < lightCount; i++) {
    light[i] = new Dot(true, width / 2, height / 2);
    light[i].pos = createVector(
      random(50, width - 50),
      random(50, height - 50)
    );
  }

  for (let i = 0; i < poisonCount; i++) {
    poison[i] = new Dot(false);
  }
  drawFood();
  fill(200);
  textAlign(CENTER);
  text(
    "Yellow: " +
      lightCount +
      "    Blue: " +
      poisonCount +
      "    Particle: " +
      maxVehicle,
    width / 2,
    height - 10
  );
}

function mouseClicked() {
  refresh();
  reload();
}
