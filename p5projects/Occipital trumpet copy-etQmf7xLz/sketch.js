var input;
var button;
var lexicon;
  
function setup() {
  noCanvas();
  lexicon = new RiLexicon();
  input = createInput('Dogs on roses and whiskers on kittens.');
  button = createButton('generate');
  input.changed(processRita);
  button.mousePressed(processRita);
  input.size(300);
  
}

function processRita(){
  var s = input.value();
  var rs = new RiString(s);
  var words = rs.words();
  var pos = rs.pos();
  console.log(words);
  console.log(pos);
  
  
 var output = '';
 for (var i = 0; i < words.length; i++){
 if (/nn.*/.test(pos[i])){
  output += lexicon.randomWord(pos[i]);

 }else{
 output += words[i];
}
   
   
output += " ";
  
}
 
  createP(output);
}

