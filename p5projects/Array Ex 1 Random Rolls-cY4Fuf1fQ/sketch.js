// Arrays: Let's test whether p5.js is actually random...

let sides = 6;          // number of sides on our die
let tries = 100000;    // number of rolls we will do

function setup() {
  createCanvas(400, 400);
  background(255);
  textAlign(CENTER);
  
  /*
     APPROACH: our array (result) will hold the number of times each 
     number comes up. In result[0] we will store the number of times 0
     has come up on our die. In result[1] we will store the count
     for 1s, result[2] will store 2s, etc.
  */ 
  let result = [];
  
  // Before we start, we want all counts to be 0
  for (let i = 0; i < sides; i++) {
    result[i] = 0; 
  }
  
  // ok, now let's roll our die many times
  for (let i = 0; i < tries; i++) {
    
    let num = floor(random(sides)); // integer 0-5
    
    // KEY: each time we roll a number (3, for example)
    // we increment the counter for that number, result[3]++
	result[num] += 1;		
  }
  
  // finally, display the results as a graph
  for (let i = 0; i < sides; i++) {
    let val = map(result[i], 0, tries/5, 0, height);
    fill((i+1) * 20, 255-(i+1) * 40, 255); // a color gradient (not important)
    rect(20+i*60, height, 50, -val);
    fill(255); // white text
    text(i+'\n'+result[i], 40+i*60, height-50);
  }
}

