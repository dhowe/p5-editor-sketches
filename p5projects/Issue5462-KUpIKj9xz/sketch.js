function preload() {
    font = loadFont(font)
}


function setup() {
  textFont(font)
  textSize(100)
  let pts = font.textToPoints('B', 0, 0, 100, {
      sampleFactor: 0.4, // increase for more points
      simplifyThreshold: 0.0 // increase to remove collinear points
  })
  console.log('Points for letter B:', pts)
  
  pts = font.textToPoints('A', 0, 0, 100, {
      sampleFactor: 0.4, // increase for more points
      simplifyThreshold: 0.0 // increase to remove collinear points
  })
  console.log('Points for letter A:', pts)
  
  createCanvas(400, 400);
  background(0);
  fill(255);
  noLoop()
}

function draw() {
  text('B', 200, 200)

  
}