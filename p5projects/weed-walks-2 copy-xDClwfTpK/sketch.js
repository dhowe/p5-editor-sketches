let api = "https://maps.googleapis.com/maps/api/streetview?";
let size = "size=500x500";
let loc = "&location=";
let fov = "&fov=120";
let heading = "&heading=";
let pitch = "&pitch=90";
let apiKey = "&key=YOURKEYHERE";

let cloud;
let caption;

let tracks = [];
let locations = [];
let index = 0;

let numTracks = 1;

function preload() {
  for (let i = 0; i < numTracks; i++) 
  {
    tracks[i] = loadTable('data/table' 
                             + nf(1, 2, 0) 
                             + '.csv', 
                             'csv',
                             'header');
  }

}

function setup() {
  createCanvas(600, 600);
  
  for (let i = 0; i < numTracks; i++)
  {
    for (let j = 0; j < tracks[i].getRowCount(); j++)
    {
      print(tracks[i].getNum(j, 'latitude'));
    }
  }

  // for (let i = 0; i < locations[0].getRowCount(); i++) {
  //   print(locations[0].getNum(i, 'latitude'), 2, 5);
    // print(nf(walk1.getNum(i, 'latitude'), 2,5));
  // }

  //   for (let i = 0; i < numTracks; i++)
  //   {
  //     locations[i] = []; 
  //     for (let j = 0; j < locations[i].length; j++)
  //     {

  //     }
  //   }
  // console.log(getUrl());

}

function draw() {
  background(220);
  if (cloud)image(cloud,0,0)
}

function getCoords() {
   
}

function getUrl() {
  let url = api + size + loc + locations[index] + fov + heading + pitch + apiKey;
  console.log(url);
  return url;
}

function loadCloud() {
  cloud = loadImage(getUrl());
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    index--;
  } else if (keyCode == RIGHT_ARROW) {
    index++;
  }

  index = constrain(index, 0, locations.length);
  console.log(index);
}
