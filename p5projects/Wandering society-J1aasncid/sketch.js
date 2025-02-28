function setup() {
  createCanvas(600, 400);
  background(200);
  let widths = [], count = 10, total = 600;
  let min = 5, max = 10;
  for (let i = 0; i < count; i++) {
    widths[i] = 5;
  }
  let remaining = count * 5;
  while (remaining < total; j++) {
     let index = floor(random(0,count));
     if (widths[index] < max) widths[index]++;
  }
  console.log(widths,'total='+ widths.reduce((acc,cur) => acc + cur));
  
  let sofar = 0;
  for (let i = 0; i < widths.length; i++) {
    let x = sofar + widths[i]
    line(x, 0, x, height);
    sofar += widths[i];
  }
}
