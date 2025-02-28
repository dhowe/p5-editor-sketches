let result, type, finalText, lastText, resource, texts = [];
let pic, pic1, pic2, pic3, pic4, pic5, count = [];
let fontT, fontD, ch1button, lines = [];
let sign, first, buttons = [];

let textFiles = [
  'empty', 'how.txt', 'psi.txt', 'qcarroll.txt', 'shoscomb.txt', 'empty.txt',
  'game.txt', 'friends.txt', 'mydayoff.txt', 'party.txt', 'tailbear.txt', 'jackbstl.txt',
  'lmermaid.txt', 'alad10.txt', 'fable.txt', 'mazarin.txt', '3gables.txt', '6napolen.txt'
];

let buttonText = [
  '1. Madness & Horrible Trip with Sammy and Freeman',
  '2. Your dearest friend, Scott',
  '3. Body and Random Things',
  '4. Adding Jack into Aladdin and Mermaid',
  '5. Sherlock Holmes for a day'
];

function preload() {
  
  for (let i = 1; i < textFiles.length; i++) { // use arrays
    texts[i] = loadStrings(textFiles[i]);
  }
  pic1 = loadImage('eyes.jpg');
  pic2 = loadImage('fds.jpeg');
  pic3 = loadImage('body1.jpeg');
  pic4 = loadImage('cin.jpg');
  pic5 = loadImage('adv.jpg');
  pic6 = loadImage('body2.jpg');
  
  fontT = loadFont('Monr.otf');
  fontD = loadFont('DFont.otf');
  first = loadStrings('firstPage.txt');
}

function setup() {
  createCanvas(500, 650);
  createButtons();
  background(245);
  textSize(15);
  textFont(fontT);
  textAlign(CENTER);
  text(first, 50, 50, 400, 400);
  textSize(10);
  text('Click the following title to start reading our Random Digital Book!', width / 2, height / 2 - 200);
  textFont(fontD);
  text('DIGITAL STORY', 430, 60);
}

function drawText() {
  background(245);

  buttons[5].show(); // show flip button

  finalText = new RiMarkov(5);
  for (let i = 0; i < resource.length; i++) {
    finalText.loadText(resource[i].join(' '));
    count[i] = result;
  }

  if (type == "fable" || 'random') {
    lines = finalText.generateSentences(8);
  } else {
    lines = finalText.generateSentences(10);
  }

  result = lines.join(' ');
  if (type == 'creepy') {    // use regular expressions
    result = result.replace(/(Ernie|sailor|Sherlok)/i, 'Sammy');
    result = result.replace(/(Bert|Watson|Sultan)/i, 'Freeman');
  }

  textSize(12);
  textAlign(LEFT);
  textFont(fontT);
  text("Type: " + type, 400, 23);
  textSize(10);
  text("If you want to change another type of reading, press enter and then click the button", 10, 645);
  image(pic, 350, 535, 222, 165);
  //image(sign, 120, 570, 200, 140);
  if (type == 'random') {
    image(pic6, 430, 460, 130, 160);
  }

  textSize(15);
  textAlign(CENTER);
  text(result, 50, 50, 400, 400);
}

function flipPage() {
  lastText = lines;
  for (let i = 0; i < lines.length; i++) { //Try to catch the words and chars
    let numChars = lines[i].length;
    let words = lines[i].split(' ');
    let numWords = words.length;
    if (numChars < 100 || numWords < 20) {
      lines = finalText.generateSentences(8);
      // console.log("NEW:" + numChars, "NEW:" + numWords);
    }
  }
  drawText();
}

function selectStory(num) {
  switch (num) {
    case 0:
      type = "creepy";
      pic = pic1;
      resource = [texts[1], texts[2], texts[3], texts[4]]; //how,psi,qcarroll,shoscomb
      break;
    case 1:
      type = "friends";
      pic = pic2;
      resource = [texts[6], texts[7]]; //game,friends
      break;
    case 2:
      type = "random";
      pic = pic3;
      resource = [texts[8], texts[9], texts[10]]; //mydayoff,party,tailbear
      break;
    case 3:
      type = "fable";
      pic = pic4;
      resource = [texts[11], texts[12], texts[13], texts[14]]; //jackbstl,lmermaid,alad10,fable
      break;
    case 4:
      type = 'adventure';
      pic = pic5;
      resource = [texts[15], texts[16], texts[17]]; //mazarin,3gables,6napolen
      break;
  }
  buttons.forEach(b => b.hide()); // hide buttons
  drawText();
}

function createButtons() {
  for (let i = 0; i < buttonText.length; i++) { //From Daniel
    let button = createButton(buttonText[i]);
    button.size(400, 30);
    button.center();
    button.position(width / 2 - 200, 150 + i * 50);
    button.mousePressed(() => selectStory(i));
    buttons.push(button);
  }
  buttons[5] = createButton('Flip Page');
  buttons[5].position(19, 19);
  buttons[5].mousePressed(flipPage);
  buttons[5].hide();
}