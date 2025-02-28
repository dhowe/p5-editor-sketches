let x = 200,
  y = 100,
  x1 = 200,
  y1 = 100;
let a = 200,
  b = 300,
  a1 = 200,
  b1 = 300;
let k,j, step = 3;

function setup() {
  createCanvas(400, 400);
  background(250);
  k = random(-10,10);
  j = random(-10,10);
}

function draw() {
  
  x1 += + random(-step, step);
  y1 += random(-step, step);

  a1 += noise(k) * 2 -1;
  b1 += noise(j) * 2 -1;
  
  x1 = constrain(x1,0,width);
  y1 = constrain(y1,0,height);
  a1 = constrain(a1,0,width);
  b1 = constrain(b1,0,height);
  
  fill(0);
  line(x, y, x1, y1);
  line(a, b, a1, b1);
  
  
  x = x1;
  y = y1;
  a = a1;
  b = b1;
  k+=0.09;
  j+=0.095;
}
