let done = false;

function setup() {

  createCanvasFx(800, 800, 'mysketch');
  background(245);
  text('p5fx.tmpl', 350, 400);
    
  // ... setup code
  
}

function draw() {

  // ... draw code
 
  if (done) {
    noLoop();
    previewFx(); // capture preview
  }
}