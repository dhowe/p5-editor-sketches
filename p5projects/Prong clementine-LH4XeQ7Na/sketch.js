let allRows = [];
let num = 50, sz = 12;
    
function setup() {
  createCanvas(600, 600);
  let first = Array(100).fill(0);
  first[first.length/2] = 1;
  allRows.push(first);
  print(allRows)
}

function draw() {

  background(245);
  for (let j = 0; j < allRows.length; j++) {
    let r = allRows[j];
    for (let i = 0; i < r.length; i++) {
      fill('white'); 
      if (r[i] === 1) {
        print('black')
        fill('black');
      }
	  square(i*sz, j*sz, sz);		
    }
  }
}

function step() {
  let next = [];
  // compute next generation...
  allRows.push(row);
}