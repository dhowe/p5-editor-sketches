let lines, keys;
let letterCounts = {};

function preload() {
  lines = loadStrings("poem.txt");
}

function setup() {
  createCanvas(400, 400);
  background(220);
  textAlign(CENTER);
  textFont('Tahoma', 14);

  // combine array into a lower case string
  let txt = lines.join(" ").toUpperCase();

  // fill our object with the counts
  letters = countLetters(txt);

  // sort letters only by their counts
  letters = Object.keys(letterCounts);
  letters = letters.filter((k) => /[A-Z]/.test(k));
  letters.sort(sortByVal);  
}

function draw() {
  
  // draw our values in graph
  fill("#275EA7");
  let w = width / (letters.length + 3);
  for (let i = 0; i < letters.length; i++) {
    let count = letterCounts[letters[i]];
    let colH = map(count, 1, 60, 0, height-70);
    rect((i + 2) * w, height - colH-25, w, colH);
  }

  // draw the horizontal scale
  fill(0);
  for (let i = 0; i < letters.length; i++) {
    text(letters[i], (i + 2) * w + w / 2, height - 10);
  }
  
  // draw the vertical scale
  for (let i = 0; i < 70; i+=10) {
    text(i, 15, map(i, 0, 49, height-22, 110));
  }

  textSize(24);
  textAlign(RIGHT);
  text('letter frequencies', width-15, 30);
  
  noLoop();
}

function countLetters(str) {
  // loop over the string, adding counts to our object
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    // add to letterCounts object if not present
    if (!letterCounts[letter]) {
      letterCounts[letter] = 0;
    }

    // increment letterCounts
    letterCounts[letter]++;
  }
}

/*
 * Sort based on value in letterCounts table
 * More on array.sort(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
function sortByVal(a, b) {
  return letterCounts[b] - letterCounts[a];
}
