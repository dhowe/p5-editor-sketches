
let currentImage;
let backgroundImages = [];

let imageNames = [
  "bg-desert.png", "bg-ocean.jpg", "bg-forest.jpg", "bg-sky.jpg"
];


function preload() {
  
  // load our images from an array of image names
  for (let i = 0; i < imageNames.length; i++) {
    
    let img = loadImage(imageNames[i]);
    backgroundImages.push(img);
  }
}

function setup() {
  createCanvas(600, 400);
  
  // select a random item from the array
  currentImage = random(backgroundImages);
}

function draw() {
  background(220);
  // draw the current image every frame
  image(currentImage, 0, 0, width, height);
}

function mouseClicked() {
  
  // select a random item from the array
  currentImage = random(backgroundImages);
}







