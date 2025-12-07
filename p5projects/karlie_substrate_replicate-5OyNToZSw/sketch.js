//Modified & inspired from Jared Tarbell’s “Substrate".
//Original work: www.complexification.net/gallery/machines/substrate/
//___________________________________________________________________

let w = 700;
let h = 700;
let num = 0;
let maxnum = 100;

let cgrid = [];
let cracks = [];

let assignedGrids = 0;
let resScale = 5;

let isFinished = false;
let outlineComplete = false;

//colour parameter
let colorShade=0;

// MAIN METHODS --------------------------------------------

function setup() {
  createCanvas(w, h);
   background(240);
  colorMode(HSB,255,255,255,255);
  begin();
}

function draw() {
  drawOutlines();
}

function mouseClicked(){
  background(240);  
  
  begin();
  
}

// METHODS -------------------------------------------------

function drawOutlines() {
  // crack all cracks
  outlineComplete = true;
  for (var n = 0; n < cracks.length; n++) {
    if (cracks[n].getStopMove() == false) {
      outlineComplete = false;
    }
  }

  if (!outlineComplete) {
    for (var n = 0; n < num; n++) {
      cracks[n].move();
    }
    if (assignedGrids >= (w * 7)) {
      isFinished = true;
      // console.log("finished");
    }
  } else if (cracks.length > 0) {
    // cracks.splice(0, num); //complete drawing. remove all the cracks
  }
}

function makeCrack() {
  // at most 100 cracks
  if (num < maxnum) {
    // a new crack instance
    cracks[num] = new Crack();
    num++;
  }
}

function begin() {
   isFinished = false;
 outlineComplete = false;
  num=0;
  assignedGrids=0;
  colorShade=random(255);
  // erase crack grid
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      cgrid[y * w + x] = 10001; 
    }
  }
   for (var k = 0; k < 16; k++) {
    var i = int(random(w * h - 1)); //pick 16 cells randomly
    cgrid[i] = int(random(360)); // assign an angle to this coordinate
    assignedGrids++;
  }

  for (var k = 0; k < 6; k++) {
    makeCrack();
  }
}
