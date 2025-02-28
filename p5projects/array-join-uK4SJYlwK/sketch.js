
function setup() {
  createCanvas(400, 200);
  background(0);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  
  // Create an array of strings
  let myWords = ['one', 'two', 'three'];

  // Create a combined string
  let combined = myWords.join(' : ');

  // Display it
  text(combined, 200, 100);
}
