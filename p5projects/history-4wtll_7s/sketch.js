let maxSize = 3;
let history = [];

function setup() {
  createCanvas(400, 400);
  remember('a');
  console.log(history.toString());
  remember('b');
  console.log(history.toString());
  remember('c');
  console.log(history.toString());
  remember('d');
  console.log(history.toString());
  remember('e');
  console.log(history.toString());
}

function remember(item) {
  let sz = history.push(item);
  if (sz > maxSize) history.shift();
}
