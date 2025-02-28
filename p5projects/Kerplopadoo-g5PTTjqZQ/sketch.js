// Kerplopadoo, by David Gruber

//to make ticker appear
let lines = [];
let val, odometer;
let timeToWait = 3400; //ms

//Dont change this, fool.
let isAbigger = false;
let counter = 0;

//This variable keeps track on the milli-seconds this program is running
let thresholdTime = 0;

//To keep track of the coins (especially when you want to show more than one coin at the time): an arrayList.
let coinList = [];
let img, img1, img2, img3, img4;
let filenames = ["img5.png", "img6.png", "img7.png"]; // images in order

//set of images slideshow
let images = [];
let imageIndex = 0;

//timer for sets of images slideshow
let savedTime;
let totalTime = 10000;
let easing = 0.2;
let numFrames = 15;

function preload() {
  for (let i = 0; i < filenames.length; i++) {
    images[i] = loadImage("data/"+filenames[i]);
  }

  img = loadImage("data/kerdunk1.jpg");
  img1 = loadImage("data/kerdunk2.jpg");
  img2 = loadImage("data/poo.jpg");
  img3 = loadImage("data/poopsmall.jpg");
}

function setup() {
  createCanvas(900, 810);
  smooth();
  frameRate(15);

  //odometer for ticker
  odometer = 0;

  //Timer
  savedTime = millis();
  
  // show image
  image(images[0],0,0, width, height);
}
