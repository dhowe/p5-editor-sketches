let json, api = "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
function preload() {
  json = loadJSON(api);
}
function setup() {
  createCanvas(400, 400);
  console.log(json);
}

