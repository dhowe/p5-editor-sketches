let vgbg;

function preload() {
  // Load the background image
  vgbg = loadImage("vgbg1.jpg"); // Replace 'example.jpg' with the filename of your uploaded image
}
function setup() {
  createCanvas(500, 500);
  // Button 1
  createCustomButton(0, 50, 50);
  // Button 2
  createCustomButton(1, 150, 50);
  // Button 3
  createCustomButton(2, 250, 50);
  // Button 4
  createCustomButton(4, 50, 150);
  // Button 5
  createCustomButton(5, 150, 150);
  // Button 6
  createCustomButton(6, 250, 150);
  // Button 7
  createCustomButton(3, 350, 50);
  // Button 8
  createCustomButton(7, 350, 150);
}

function createCustomButton(label, x, y) {
  fill(255);
  rect(x, y, 80, 30, 5);
  fill(0);
  textAlign(CENTER, CENTER);
  text(label, x + 40, y + 15);
}

// WebSocket connection setup
const socket = new WebSocket("wss://vg-test-e145200ca844.herokuapp.com:443");

function mouseClicked() {
  let keyData;

  // Check mouse position and determine the button pressed
  if (mouseX > 50 && mouseX < 130 && mouseY > 50 && mouseY < 80) {
    keyData = { keypress: 0.0 };
  } else if (mouseX > 150 && mouseX < 230 && mouseY > 50 && mouseY < 80) {
    keyData = { keypress: 1.0 };
  } else if (mouseX > 250 && mouseX < 330 && mouseY > 50 && mouseY < 80) {
    keyData = { keypress: 2.0 };
  } else if (mouseX > 50 && mouseX < 130 && mouseY > 150 && mouseY < 180) {
    keyData = { keypress: 4.0 };
  } else if (mouseX > 150 && mouseX < 230 && mouseY > 150 && mouseY < 180) {
    keyData = { keypress: 5.0 };
  } else if (mouseX > 250 && mouseX < 330 && mouseY > 150 && mouseY < 180) {
    keyData = { keypress: 6.0 };
  } else if (mouseX > 350 && mouseX < 430 && mouseY > 50 && mouseY < 80) {
    keyData = { keypress: 3.0 };
  } else if (mouseX > 350 && mouseX < 430 && mouseY > 150 && mouseY < 180) {
    keyData = { keypress: 7.0 };
  }

  // Check if keyData is defined
  if (keyData !== undefined) {
    // Convert keyData to JSON string
    const message = JSON.stringify(keyData);
    // Send message over WebSocket
    socket.send(message);
  }
}
