// the same sketch as 'random roll' except 
// using the randomGaussian function, which gives 
// us random numbers following a bell-like curve
let sides = 6, tries = 100000;

function setup() {
  createCanvas(400, 400);
  background(0);
  textAlign(CENTER);
  
  // fill our array with 0s
  let result = [];
  for (let i = 0; i < sides; i++) {
    result[i] = 0; 
  }
  
  // roll many times
  for (let i = 0; i < tries; i++) {
    
    // for this function we give the average we want
    //  (3) and what's called the "standard deviation"
    // (that is, how much it will stray from that average)
    let rg = randomGaussian(3, 2);
    
    let num = floor(rg);
	result[num] += 1;		
  }
  
  // display the results
  for (let i = 0; i < sides; i++) {
    let val = map(result[i], 0, tries/4, 0, height);
    fill((i+1) * 20, 255-(i+1) * 40, 255);
    rect(20+i*60, height, 50, -val);
    fill(255);
    text(i+'\n\n'+result[i], 40+i*60, height-50);
  }
}

