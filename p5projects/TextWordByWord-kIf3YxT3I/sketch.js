let words = ['Happy', 'Birthday', 'To', 'You'];
let colors = [ 240, 160, 80, 0 ];

function setup() {
  createCanvas(400, 400);
  textSize(24);
  background(220);
  
  let x = 50;
  for (let i = 0; i < words.length; i++) {
    
    // get the width of the word plus a space
    let twidth = textWidth(words[i]+' ');
    
    // set the color for the word
    fill(colors[i]);
    
    // draw the word
    text(words[i], x, 100);
    
    // position for the next word
    x = x + twidth;
  }

}