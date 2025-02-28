let buttonText = [
  '1. Madness & Horrible Trip with Sammy and Freeman',
  '2. Your dearest friend, Scott',
  '3. Body and Random Things',
  '4. Adding Mermaid to Aladdin and Jack',
  '5. Sherlock Holmes for a day'
];

function setup() {
  createCanvas(500, 650);
  background(245);
  textSize(10);
  textAlign(CENTER);
  text('press RIGHT ARROW to start reading our Random Digital Book!', width / 2, 125);
  for (let i = 0; i < buttonText.length; i++) {
	ch1button = createButton(buttonText[i]);
    ch1button.size(400, 30);
    ch1button.center();
    ch1button.position(width / 2 - 200, 150 + i * 50);
    ch1button.mousePressed(() => selectStory(i));	
  }
}

function selectStory(num) {
  switch(num) {
  case 0:
    type = "creepy";
    pic = pic1;
    resource[0] = text1; //how
    resource[1] = text2; //psi
    resource[2] = text3; //qcarroll
    resource[3] = text4; //shoscomb
    break;
  case 1:
    type = "friends";
    pic = pic2;
    resource[0] = text6; //game
    resource[1] = text7; //friends
    break;
  case 2:
    type = "random";
    pic = pic3;
    resource[0] = text8; //mydayoff
    resource[1] = text9; //party
    resource[2] = text10; //tailbear
    break;
  case 3:
    type = "fable";
    pic = pic4;
    resource[0] = text11; //jackbstl
    resource[1] = text12; //lmermaid
    resource[2] = text13; //alad10
    resource[3] = text14; //fable
    break;
  case 4:
    type = 'adventure';
    pic = pic5;
    resource[0] = text15; //mazarin
    resource[1] = text16; //3gables
    resource[2] = text17; //6napolen
    break;
  }
}