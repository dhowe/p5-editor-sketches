





















var x=[], y=[], xspd=[], yspd=[], radius = 6;

function preload() {
  beep = loadSound('beep.mp3');
}

function setup() {

  createCanvas(500, 500);
  for (var i = 0; i < 5; i++) {
    x[i] = random(200,300);
    y[i] = random(200,300);
    xspd[i] = random(3,6);
    yspd[i] = random(3,6);
  }
  beep.playMode('restart');
}

function draw() {

  background(0);
  for (var i = 0; i < x.length; i++) {

    noStroke();
    var c = map(i, 0, 4, 0, 255);
    fill(c, 255-c, 200+c/5);
    ellipse(x[i], y[i], radius * (i+1), radius * (i+1) );

    x[i] = x[i] + xspd[i];
    y[i] = y[i] + yspd[i];

    var theRate = map(i, 4, 0, 0.1, 1);
    if ((xspd[i] > 0 && x[i] >= width-radius) || (xspd[i] < 0 && x[i] <= radius)) {


      beep.rate(theRate);

      beep.play();
      xspd[i] = -xspd[i];
    }
    if ((yspd[i] > 0 && y[i] >= height-radius) || (yspd[i] < 0 && y[i] <= radius)) {

      beep.rate(theRate);

      beep.play();
      yspd[i] = -yspd[i];
    }
  }
}
