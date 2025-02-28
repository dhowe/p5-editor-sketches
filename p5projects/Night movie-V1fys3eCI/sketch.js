function setup() {
  createCanvas(400, 400);

  // How can we find the min value in an array ?
  
  let anArray = [1, 4, 7, 2, -4, 5];
  let minimumVal = anArray[0];
  for (let i = 1; i < anArray.length; i++) {
    let current = anArray[i];
    if (current > minimumVal) {
      minimumVal = current;
    }
  }
  console.log(minimumVal);
  
}
