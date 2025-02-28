
function setup() {
  createCanvas(400, 200);
  background(0);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  
  // Create one big string
  let myString = 'one:two:three:four:five';

  // Split it into parts a combined string
  let words = myString.split(':');

  // Display each of the words
  for (let i = 0; i < words.length; i++) {
    text(words[i], 200, (i + 1) * 35);
  }
}
