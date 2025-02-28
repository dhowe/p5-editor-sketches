//filt is filter
let mic,filt;
let handpose;
let video;
let predictions = [];
let threshold = 100;

function setup() {
  createCanvas(640, 480);
  mic = new p5.AudioIn();
  mic.start();
  filt = mic.createBiquadFilter(600, "bandpass");
  console.log('blagh')
  delay.disconnect();
  delay.connect(filter);
  video = createCapture(VIDEO);
  video.size(width, height);
  handpose = ml5.handpose(video, modelReady); // This sets up an event that fills the global variable "predictions" // with an array every time new hand poses are detected
  handpose.on("predict", (results) => {
    predictions = results;
  }); // Hide the video element, and just show the canvas
  video.hide();
  // button = createButton('play/stop');
  // button.mousePressed(toggle);
}
function modelReady() {
  console.log("Model ready!");
}
function draw() {
  translate(width, 0); // Move the origin to the right edge of the canvas
  scale(-1, 1); // Flip horizontally
  image(video, 0, 0, width, height); // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
}

function createFinger(name, points, color) {
  return {
    name: name,
    points: points,
    color: color,
  };
}
// A function to draw ellipses over the detected annotations
function drawKeypoints() {
  if (predictions.length > 0) {
    let prediction = predictions[0];

    // Create finger objects with the labels, points and color
    let fingers = [
      createFinger("thumb", prediction.annotations.thumb, "red"),
      createFinger("pinky", prediction.annotations.pinky, "purple"),
    ];
    // Find the thumb and pinky tips.
    let thumbTip = prediction.annotations.thumb[3];
    let pinkyTip = prediction.annotations.pinky[3];
    print(thumbTip);
    // Calculate the distance between the thumb and pinky.
    let distance = dist(thumbTip[0], thumbTip[1], pinkyTip[0], pinkyTip[1]);
    let y = prediction.annotations.thumb[3][1];
    for (let i = 0; i < fingers.length; i += 1) {
      let finger = fingers[i];
      fill(finger.color);
      noStroke();

      // Access the tip of the finger in the last element of the finger.points list (element with index 3) and draw the ellipse using its x-y coordinates
      let sz = map(distance,0,width,8,100);
      ellipse(finger.points[3][0], finger.points[3][1], sz, sz);
      
    }
  }

}

