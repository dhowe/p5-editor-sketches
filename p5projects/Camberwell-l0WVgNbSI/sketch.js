let mappa, myMap, canvas;
let locfind = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=%lat%&lng=%lng&zoom=12&addressdetails=1';

const options = {
  lat: 51.4741,
  lng: -0.0828,  
  zoom: 12,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(640,640);
  mappa = new Mappa('Leaflet');
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas) 

  // redraw when the map changes, not every frame
  myMap.onChange(drawPoint);
}

function requestJSON(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data));
}

function loadData(json) {
  print(json);
  name = json.name;
  imgUrl = json.sprites.front_default;
  img = loadImage(imgUrl);
}


function mouseClicked(event){
  const {lat, lng} = myMap.pixelToLatLng(mouseX, mouseY);
  options.lat = lat;
  options.lng = lng;
  
  drawPoint();
  
  locfind.replace('%lat%', lat).replace('%lng%', lng);
  requestJSON(locfind, (json) => {
    console.log(json);
  });
}

function drawPoint(){
  clear();
  const cmb = myMap.latLngToPixel(options.lat, options.lng);
  fill('green');
  circle(cmb.x, cmb.y, 10);
}