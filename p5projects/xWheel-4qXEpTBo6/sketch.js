let txture;
let words = [ "The", "act", "of", "weaving", "became", "making", "the", "device", "to", "weave", "onto", "and", "then", "warping", "the", "loom,", "which", "is", "a", "very", "long", "intensive", "practice.", "And", "then", "I", "didn't", "want", "to", "go", "out", "and", "buy", "yarn,", "first", "of", "all", "because", "I", "didn't", "want", "to", "spend", "all", "that", "money,", "but", "also", "I'm", "really", "big", "into", "contemplating", "waste", "culture,", "especially", "in", "material", "in", "the", "arts.", "And", "in", "a", "way", "that's", "not", "like", "taking", "something", "off", "the", "street", "and", "using", "it,", "but", "kind", "of", "seeing", "what", "is", "wasted", "in", "this", "studio", "or", "what", "is", "wasted", "amongst", "my", "peers.", "And", "so", "I", "was", "collecting", "all", "these" ];
words = words.slice(0,10);

function setup() {
  createCanvas(400, 400);
  txture = createGraphics(width, height);
  txture.background(255);
  txture.textFont('Source Code Pro');
  txture.textAlign(CENTER);
  txture.textSize(33);
  txture.fill(3, 7, 11);
  txture.noStroke();
  txture.text('1234', width * 0.5, height * 0.5);
  for (let i = 0; i < words.length; i++) {
	txture.text(words[i], width * 0.5, i * 10);
  }
  image(txture,0, 0);
}

function drawx() {
  background(255);
  scale(2.5);
  rotateX(millis() / 3000);
  texture(txture);
  sphere();
}