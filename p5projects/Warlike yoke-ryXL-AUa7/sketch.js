var json;

function preload() {
  
  json = loadJSON('https://rednoise.org/imc/data/pixels.json');
}

function setup() {
  
  createCanvas(512,512);
  console.log(json);
}