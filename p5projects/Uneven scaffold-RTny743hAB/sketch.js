let txt;
let numVisible = 40;
let words = [ "The", "act", "of", "weaving", "became", "making", "the", "device", "to", "weave", "onto", "and", "then", "warping", "the", "loom,", "which", "is", "a", "very", "long", "intensive", "practice.", "And", "then", "I", "didn't", "want", "to", "go", "out", "and", "buy", "yarn,", "first", "of", "all", "because", "I", "didn't", "want", "to", "spend", "all", "that", "money,", "but", "also", "I'm", "really", "big", "into", "contemplating", "waste", "culture,", "especially", "in", "material", "in", "the", "arts.", "And", "in", "a", "way", "that's", "not", "like", "taking", "something", "off", "the", "street", "and", "using", "it,", "but", "kind", "of", "seeing", "what", "is", "wasted", "in", "this", "studio", "or", "what", "is", "wasted", "amongst", "my", "peers.", "And", "so", "I", "was", "collecting", "all", "these" ];

function setup() {
  createCanvas(400, 400, WEBGL);
  words = words.slice(0,numVisible);
  txt = createGraphics(width, height);
  //txt.background(255);
  
  txt.textFont('Source Code Pro');
  txt.textAlign(CENTER, CENTER);
  txt.textSize(10);
  txt.noStroke();
}

function draw() {
  background(205, 105, 94);
  rotateX(frameCount * 0.001);
  rotateZ(PI/2);
  cylinder(width/2,height);
}