// there are other options for data structures...
let ruleNum = 30, allRows = [], ruleTable = {}, sz = 20;
let states = ["111", "110", "101", "100", "011", "010", "001", "000"];

function setup() {
  createCanvas(600, 600);
  let ruleStr = decToBin(ruleNum);
  for (let i = 0; i < states.length; i++) {
    ruleTable[states[i]] = parseInt(ruleStr[i]);
  }

  let firstRow = Array(30).fill(0); // all zeros
  firstRow[firstRow.length / 2] = 1;
  allRows.push(firstRow);
  
  print(firstRow);
  noLoop();
}

function draw() {
  
    for (let j = 0; j < allRows.length; j++) {
      let curr = allRows[j]
      for (let i = 0; i < curr.length; i++) {
        let cell = curr[i];
        fill(cell==0 ?  255 : 0);
        square(i*sz, j*sz, sz);
      }
    }

  step();
}

function step() {
  let curr = allRows[allRows.length-1];
  for (let i = 0; i < curr.length; i++) {
    let left = curr[(i-1+curr.length)%curr.length];
    let center = curr[i];
    let right = curr[(i+1)%curr.length];
    let str = left.toString() + center + right;
    fill('red');
    text(str, i*sz, allRows.length*sz)
  }
}







function decToBin(dec) {
  // 0 <= dec < 256
  return dec.toString(2).padStart(8, "0");
}
