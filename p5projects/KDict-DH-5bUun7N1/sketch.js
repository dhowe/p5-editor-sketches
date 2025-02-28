let korean, english_n;
let countPressed = 0;
let word, pos, trans, photo;
let open1, open2;
let airport, bank, bookstore, bread, building, bus, butter;
let talk, cup, duckmeat, eat, finger, fork, give, go;
let hat, home,karaoke, laugh, library, love, mail, meat;
let newspaper, park, railway, restaurant, room, salad;
let sandwiches, shoes, sing, swimmingpool, toilet, uni, write;
let gm;

// the names of your pics from dictionary
let picNames = Object.keys(dict).map(k => dict[k].pic);

// to map pic names to loaded images
let images = {};

function preload() {
  english_n = loadStrings('e_noun_sen.json');
  for (let i = 0; i < picNames.length; i++) {
	images[picNames[i]] = loadImage('Pic/'+picNames[i]+'.jpg');
  }
}

function setup() {
  createCanvas(600, 300);
  gm = new RiGrammar();
  open1 = "한국어 사정입니다!";
  open2 = "Welcome to Korean Dictionary";  
}

function draw() {
  background(255);

  fill(56, 66, 90);
  textAlign(CENTER);
  textSize(25);
  textStyle(NORMAL);
  if (countPressed == 0) {
    text(open1, width / 2, height / 2 + 5);
    text(open2, width / 2, height / 2 + 40);
  }
  if (countPressed >= 1) {
    textSize(45);
    text(word, 120, 80);
    textSize(20);
    text(trans, 110, 120);
    textSize(15);
    text(pos, 240,80);
    image(photo,50,100,300,300);
  }
}


function mouseClicked() {
  countPressed++;

  let koreanWord = Object.keys(dict);
  word = koreanWord[floor(random(koreanWord.length))];
  trans = dict[word].eng;
  pos = dict[word].pos;
  let pic = dict[word].pic;
  photo = images[pic];
}