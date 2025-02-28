const all = ["The", "act", "of", "weaving", "became", "making", "the", "device", "to", "weave"];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 12; i++) {
    console.log(JSON.stringify(toWin(all, i, 4))); 	
  }
}

function toWin(arr, curs, size) { 
  let start = curs % arr.length
  let end = (curs + size) % arr.length;
  let res = arr.slice(start, start+size);
  for (let i = 0; res.length < size; i++) res.push(arr[i]);
  return res;
}

//res[0] -> 1
//res[0][1] -> 2

