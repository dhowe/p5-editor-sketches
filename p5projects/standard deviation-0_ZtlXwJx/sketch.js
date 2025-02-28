function setup() {
  createCanvas(400, 400);
  console.log(stddev([1, 2, 3, 4, 5])); // 1.41
  console.log(stddev([23, 4, 6, 457, 65, 7, 45, 8])); // 145.1
  console.log(
    stddev([
      1.37312,
      1.35973,
      1.35493,
      1.34877,
      1.34853,
      1.35677,
      1.36079,
      1.36917,
      1.36769,
      1.3648,
      1.37473,
      1.37988,
      1.37527,
      1.38053,
      1.37752,
      1.38652,
      1.39685,
      1.39856,
      1.39684,
      1.39027,
    ])
  ); //  0.0152
}

function stddev(arr) {
  let avg = arr.reduce((acc, c) => acc + c, 0) / arr.length;
  let variance = arr.reduce((acc, c) => acc + (c - avg) ** 2, 0) / arr.length;
  return sqrt(variance);
}
