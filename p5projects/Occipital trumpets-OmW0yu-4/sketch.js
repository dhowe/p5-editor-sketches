var input;
var button;
var lexicon;

function setup() {
  noCanvas();
  input = createInput("Dogs on roses and whiskers on kittens.");
  button = createButton("generate");
  input.changed(processRita);
  button.mousePressed(processRita);
  input.size(300);
}

function processRita() {
  var s = input.value();
  
  var words = RiTa.tokenize(s);
  var pos = RiTa.pos(s);
  console.log(words, pos);

  var output = [];
  for (var i = 0; i < words.length; i++) {
    if (/nn.*/.test(pos[i])) {
      output.push(RiTa.randomWord({ pos: pos[i] }));
    } else {
      output.push(words[i]);
    }
  }

  // join output array back to string
  var sent = RiTa.untokenize(output);
  
  createP(RiTa.capitalize(sent));
}
