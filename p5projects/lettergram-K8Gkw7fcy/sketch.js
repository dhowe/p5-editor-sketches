let N = 7; // adjust me

let lines, model = {}, result = "";

function preload() {
  lines = loadStrings("kafka.txt");
}

function setup() {
  createCanvas(800, 200);
  textFont("Georgia", 40);
  textAlign(CENTER, CENTER);
  frameRate(7);
  fill(255);
  
  makeModel(lines);
}

function draw() {
  background(0);
  
  // display all the centered text
  text(result, width / 2, height / 2);
  
  // generate the next letter
  result = selectNext(result);
}

function selectNext(sofar) {
  
  // first-time only, pick a random key
  if (sofar.length === 0) {
    let options = Object.keys(model);
    sofar = random(options);
  }
  
  // get the last N-1 characters
  let last = sofar.substring(sofar.length - N);
  
  // and randomly pick a next letter 
  let next = random(model[last]);
  
  //  add it to what we have so far
  return sofar + next;
}

function makeModel(lines) {
  
  // remove any blank lines
  let noBlanks = lines.filter(l => l.length > 0);
  
  // join all the lines into a string
  let combined = noBlanks.join(" ");
  
  // loop, looking at each sequence of N letters
  for (let j = 0; j < combined.length; j++) {
    
    // make the end wrap around to the start
    let endIndex = (j + N) % combined.length;
    
    // the key is a sequence of N-1 letters
    let sequence = combined.substring(j, endIndex);
    
    // the value the Nth letter
    let next = combined[endIndex];
    
    // have we seen this key before?
    if (!model[sequence]) {
      
      // if not, add it with an empty array as value
      model[sequence] = [];
    }
    
    // add the value to the array of possible next letters
    model[sequence].push(next);
  }
}
