async function setup() {
  createCanvas(400, 400);
  let strs = await loadStrings('test.txt');
  console.log(strs);
}

