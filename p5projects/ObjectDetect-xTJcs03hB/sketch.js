let img, model;

function preload() {
  img = loadImage('catdog.jpg');
  model = ml5.objectDetector('cocossd', {}, fred);
}

function fred() {
  console.log('model loaded' + model.modelReady);
}

function setup() {
  console.log("setup"+model.modelReady);
  createCanvas(400, 400);
  image(img, 0, 0);
  model.detect(img, onDetect);
}

function onDetect(err, res)  {
  if (err) throw Error(err);
  console.log(res); 
  for (let i = 0; i < res.length; i++) {
    noFill();
    stroke(0,200,20);
    rect(res[i].x,res[i].y,res[i].width,res[i].height);
    fill(0,200,20);
    text(res[i].label+" "+res[i].confidence, res[i].x+10,res[i].y+20)
  }
			
}