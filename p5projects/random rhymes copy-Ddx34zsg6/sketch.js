let rhymes, word;

function setup() {
  createCanvas(300, 300);
  fill(255);
  textFont("Georgia");

  findRhymes();
}

function draw() {
  background(100, 0, 100);

  textSize(36);
  textAlign(RIGHT);
  text(word, 280, 40);

  textSize(14);
  textLeading(17);
  textAlign(LEFT);
  text(rhymes, 30, 73);
}

function findRhymes() {

  let tmp;
  do {
    word = RiTa.randomWord();
    tmp = RiTa.rhymesSync(word, { limit: 13 });
  }
  while (tmp.length < 3)

  rhymes = tmp.join("\n");
  setTimeout(findRhymes, 2000);
}

    


