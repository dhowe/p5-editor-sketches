function setup() {
  createCanvas(400, 400);
  textSize(24);
  rm = RiTa.markov(3);
  rm.addText(fortunes);
  let sentence = rm.generate({disableInputChecks:true});
  background(255);
  text(sentence, 10, 20, width - 20, height - 20);
}
