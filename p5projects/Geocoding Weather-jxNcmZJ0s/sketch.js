let mappa, myMap, img, canvas, place = 'Camberwell';
let geoUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=%lat%&lon=%lng%&zoom=%zoom%&addressdetails=1`;
let imgUrl = 'https://wttr.in/%lat%,%lng%_0pq.png';

const options = {
  lat: 51.47236, lng: -0.08612, zoom: 18,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
  canvas = createCanvas(640, 640);
  textFont('consolas', 18);

  // Create the mappa instance with params
  mappa = new Mappa('Leaflet');
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas)
  myMap.onChange(draw);
  
  addWeatherOverlay(options);
}

function draw() {
  clear();

  // draw a circle at the position
  let {x, y} = myMap.latLngToPixel(options.lat, options.lng);
  circle(x, y, 10);

  if (img) { // check image is loaded

    // draw the weather image
    image(img, width - img.width, 15);

    fill(0); // black rect
    rect(width - img.width, 0, img.width, 20);

    fill(255); // add place name from openmap
    text(place, width - img.width + 15, 20);
  }

  noLoop();
}

function doubleClicked() {

  // convert mouse to latitude / longitude
  let { lat, lng } = myMap.pixelToLatLng(mouseX, mouseY);
  options.lat = lat;
  options.lng = lng;

  // get the current zoom
  options.zoom = myMap.zoom();

  redraw();
  addWeatherOverlay(options);
  addLocationName(options);
}


// load the weather image from wttr.in
function addWeatherOverlay(opts) {
  let url = imgUrl.replace('%lat%', opts.lat).replace('%lng%', opts.lng);
  loadImage(url, (data) => img = data);
}

// get the location name from openmap
function addLocationName(opts) {
  let url = geoUrl.replace('%lat%', opts.lat).replace('%lng%', opts.lng).replace('%zoom%', opts.zoom);
  loadJSON(url, (data) => place = data.name);
}
