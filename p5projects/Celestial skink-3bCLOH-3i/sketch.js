function setup() {
  createCanvas(200, 200);
  let inp = [ 1, 3, -2, 3, 3, 1.5, 1.5 ];
  mostCommon(inp); 
}

/*
 *  Returns the most frequent occurrence of a set of numbers.
 *  If more than one # are tied, either can be returned.
 *
 *  let input = [ 1, 3, -2, 3, 1.5 ];
 *  mostCommon(input) should return 3
 */
function mostCommon(numbers) {
  
  let counts = {};
  for (let i = 0; i < numbers.length; i++) {
    if (!counts[numbers[i]]) {
      counts[numbers[i]] = 0;
    }
    counts[numbers[i]] += 1;
  }

  return 0; // return entry in object with highest count
}
