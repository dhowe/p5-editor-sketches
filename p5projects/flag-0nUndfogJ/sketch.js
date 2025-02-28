let lines = [
  'This is a police warning.',
  'Your are displaying flags or',
  'banners / chanting slogans / or',
  'conducting yourselves with',
  'an intent such as secession or',
  'subversion, which may',
  'constitute offences under the',
  '"HKSAR National Security Law".',
  'You may be arrested',
  'and prosecuted.'
];

let fontSz = 28;

function setup() {
  createCanvas(600, 450);
  background('#81379C');
  textAlign(CENTER);
  textFont('arial black');
  textSize(fontSz);
  fill(255);
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], width/2, 70+(fontSz*1.25)*i);
  }
}