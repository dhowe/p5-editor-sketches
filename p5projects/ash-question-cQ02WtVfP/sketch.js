let lines, words;

function preload() {
  lines = loadStrings("/HeikoJulien_EnjoyCommonThings.txt");
}

function setup() {
  let poem = lines.join(" ");
  words = poem.split(" ");
  
  print(words);
}