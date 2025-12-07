/* 
  Note that this is a bare-bones example. For better output, pre and post-processing of the text is recommended. 

  For an example of how n-grams pull fragments from various sources, see https://observablehq.com/@dhowe/annograms

  More advanced features also described here: https://observablehq.com/@dhowe/tut-rita-ngrams#advanced

  The RiTa lib is included via the index.html, while the text files are local to the project
*/

let lines, markov, txt1, txt2;
let x = 160, y = 240;

function preload() {

  txt1 = loadStrings('wittgenstein.txt');
  txt2 = loadStrings('kafka.txt');
}

function setup() {

  createCanvas(500, 500);
  textFont('helvetica', 16);
  textLeading(21);
  textAlign(LEFT);

  lines = ["click to (re)generate"];
  
  // create a markov model w' n=4
  markov = RiTa.markov(4);

  // load text into the model
  markov.addText(txt1.join(' '));
  markov.addText(txt2.join(' '));

  drawText();
}

function drawText() {
  background(50, 30, 40);
  fill(220);
  text(lines.join(' '), x, y, 420, 440);
}

function mouseClicked() {
  lines = markov.generate(10);
  x = y = 40;
  drawText();
}

  
 




