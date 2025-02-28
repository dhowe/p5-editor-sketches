var slider;
function setup() {
	createCanvas(200,200);
  slider = createSlider(0, 255, 100);
}

function draw() {
  var val = slider.value();
  background(val);
}