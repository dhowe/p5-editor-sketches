let words = [];

function setup() {
  createCanvas(400, 400);
  textFont('Georgia');
  textSize(32);
  textAlign(CENTER, CENTER);
  
  let x = 20, y = 20;
  for (let i = 0; i < 90; i++) {
	let w = new Word(char(i+35), x, y);	  
    if (i % 10 == 9) {
      y += 40;
      x = -20;
    }
    x += 40;
    words.push(w);
  }
  
  let vowels = words.filter(w => /AEIOU/.test(w));
  console.log(vowels);
}

function draw() {
  background(245);
  words.forEach(w => w.render());
}













