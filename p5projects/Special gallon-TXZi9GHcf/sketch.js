let url = 'https://www.coronavirus.gov.hk/files/5th_wave_statistics/breakdown/Breakdown_by_age%20group_20220404.csv';
let table;

function preload() {
  table = loadTable(url);
}
function setup() {
  createCanvas(400, 400);
  console.log(table);
}

function draw() {
  background(220);
}