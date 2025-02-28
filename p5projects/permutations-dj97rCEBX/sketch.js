function setup() {
  console.log(permutations([0,1,2],4));
}

function permutations(numbers, strlen) {
  let result = [];
  let total = numbers.length ** strlen;
  for (let i = 0; i < total; i++) {
    let r = i.toString(numbers.length); // convert to base
    while (r.length < strlen) r = "0" + r; // pad
    result.push(r);
  }
  return result;
}





