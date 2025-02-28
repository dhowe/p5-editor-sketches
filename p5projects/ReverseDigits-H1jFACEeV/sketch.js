function setup() {
  
  createCanvas(400, 400);
  
  text(reverseDigits(123), 20, 40); // 321
  text(reverseDigits(1479), 20, 60); // 9741
  text(reverseDigits(12) + reverseDigits(91), 20, 80); // 21 + 19 = 40
}

function reverseDigits(theInt) {
  
  var answer = '';
  var digits = theInt.toString();
  for (var i = digits.length - 1; i >= 0; i--) {
    answer += digits[i];
  }
  return parseInt(answer);
}