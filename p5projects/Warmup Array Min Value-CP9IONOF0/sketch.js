// Exercise: How can we find the min value in an array ?

let anArray = [ 1, 4, 7, 2, -4, 5 ];
    
function setup() {
  createCanvas(400, 400);
  
  // start with the minimum as the 1st element
  let minimum = anArray[0];
  
  // loop over the rest of array
  for (let i = 1; i < anArray.length; i++) {
    
    // look at each element
    let element = anArray[i];
    
    // compare it to the current minimum
    if (element < minimum) {
      
      // if its smaller, then make IT the new minimum
      minimum = element;
    }
  }
  
  // now we should have the correct minimum
  console.log(minimum);
}
