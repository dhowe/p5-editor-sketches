let num = 100;
let diameters = [];

function setup() {
  createCanvas(400, 400);
  background(245);
  noFill();

  // horizontal line
  line(0, height * 0.75, width, height * 0.75);

  // fill our array with 100 random sizes
  for (let i = 0; i < num; i++) {
    let diam = random(10, 60);
    diameters.push(diam);
  }

  // start with 1st element as min, max and total
  let minimum = diameters[0];
  let maximum = diameters[0];
  let total = diameters[0];
  
  // loop over the others, keeping track 
  // of the current min, max and total
  for (let i = 1; i < diameters.length; i++) {
    let diam = diameters[i];
    total += diam;
    if (diam < minimum) {
      minimum = diam;
    }
    if (diam > maximum) {
      maximum = diam;
    }
  }

  // now draw each of the circles
  for (let i = 1; i < diameters.length; i++) {
    let diam = diameters[i];
    
    // pick random x,y making sure we don't go out of bounds
    let x = random(diam / 2, width - diam / 2);
    let y = random(diam / 2, height * 0.75 - diam / 2);
    
    // use red fill for smallest and largest
    noFill();
    if (diam == minimum || diam == maximum) {
      fill('red')
    }
    circle(x, y, diam);
  }

  fill(0); // print the stats
  text("min=" + minimum, 20, 330);
  text("max=" + maximum, 20, 350);
  
  // the average is the total divided by the count
  text("avg=" + total / num, 20, 370);
}
