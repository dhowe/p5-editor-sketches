function setup() {
  createCanvas(400, 400);
    loadJSON('missing.json',
    function() {
      console.log('FOUND');
    },
    function() {
      console.log('NOT FOUND');
    });
}

function draw() {
  background(220);
  rect(50,50,50,50);
}