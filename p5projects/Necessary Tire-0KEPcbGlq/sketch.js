let txt;
let numVisible = 20;
let words = [ "The", "act", "of", "weaving", "became", "making", "the", "device", "to", "weave", "onto", "and", "then", "warping", "the", "loom,", "which", "is", "a", "very", "long", "intensive", "practice.", "And", "then", "I", "didn't", "want", "to", "go", "out", "and", "buy", "yarn,", "first", "of", "all", "because", "I", "didn't", "want", "to", "spend", "all", "that", "money,", "but", "also", "I'm", "really", "big", "into", "contemplating", "waste", "culture,", "especially", "in", "material", "in", "the", "arts.", "And", "in", "a", "way", "that's", "not", "like", "taking", "something", "off", "the", "street", "and", "using", "it,", "but", "kind", "of", "seeing", "what", "is", "wasted", "in", "this", "studio", "or", "what", "is", "wasted", "amongst", "my", "peers.", "And", "so", "I", "was", "collecting", "all", "these" ];

function setup() {
  createCanvas(600, 600, WEBGL);
  words = words.slice(0,numVisible);
  txt = createGraphics(125, 350*PI);
  //txt.background(255);
  txt.textFont('Source Code Pro');
  txt.textAlign(CENTER, CENTER);
  txt.textSize(50);
  txt.translate(txt.width/2,txt.height/2);
  txt.line(-txt.width/2,0,txt.width/2,0)
  let sz = 10;//txt.height / (numVisible+1);
  for (let i = 0; i < words.length; i++) {
	txt.text(words[i], 0, 0 + sz + i * sz);
    break;
  }
  
  //txt.noStroke();
  //image(txt,-width/2,-height/2);
}
function draw() {
      
    background(200);
    rotateZ(-PI/2)
    rotateX(-PI/50);
    texture(txt);
    
    rotateY(millis()/-10000);
    
    cylinder(350, 125, 24, 1, false, false);
}