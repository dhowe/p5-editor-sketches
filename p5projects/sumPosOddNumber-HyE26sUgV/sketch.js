function setup() {
  createCanvas(400, 400);
  console.log(sumNumber(1, 5)); // 15
  console.log(sumAltNumber(1, 5)); // 3
  console.log(sumOddNumber(-5, 5)); // 0
  console.log(sumPosOddNumber(-5, 5)) // 18
  console.log(sumPosOddNumber(0, 5)) // 9
  console.log(sumPosOddNumber(-5, -1)) // 9
}

function sumNumber(m, n) {
  var sum = 0;
  for (var i = m; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumAltNumber(m, n) {
  var sum = 0;
  var sign = 1;
  for (var i = m; i <= n; i++) {
    sum += sign * i;
    sign = -1 * sign;
  }
  return sum;
}

function isOdd(n) {
  return (abs(n) % 2 == 1);
}

function sumOddNumber(m, n) {
  if (isOdd(m)) {
    return (sumNumber(m, n) + sumAltNumber(m, n)) / 2;
  } else {
    return (sumNumber(m + 1, n) + sumAltNumber(m + 1, n)) / 2;
  }
}

function sumPosOddNumber(m, n) { 
  var sum = 0;
  if (m < 0 && n < 0) {
    sum = sumOddNumber(-n, -m);
  }
  else if (m < 0 && n >= 0) {
    sum = sumOddNumber(0, -m) + sumOddNumber(0, n);
  }
  else if (m >= 0 && n >= 0) {
    sum = sumOddNumber(m, n);
  }
  return sum;
}