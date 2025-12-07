// Introduction to Machine Learning for the Arts, Fall 2024
// https://github.com/ml5js/Intro-ML-Arts-IMA-F24

let proxyUrl = "https://replicate-api-proxy.glitch.me/create_n_get/";
let textInput;
let img;

function setup() {
  createCanvas(512, 512);
  textInput = createInput("land of the lost");
  textInput.size(450);
  createButton("submit").mousePressed(generateImage);
}

function draw() {
  if (img) {
    image(img, 0, 0, width, height);
  }
}

// Generate an image using the Replicate API
async function generateImage() {
  
  console.log("Generating image...");
  
  let prompt = textInput.value();

  // https://replicate.com/stability-ai/stable-diffusion-3
  let data = {
    modelURL:
      "https://api.replicate.com/v1/models/stability-ai/stable-diffusion-3/predictions",
    input: { prompt },
  };

  // Request options for the API call
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // Send request to the proxy server
  let response = await fetch(proxyUrl, options);
  
  console.log("Response received, loading image...");

  // Load the generated image
  let json = await response.json();
  loadImage(json.output[0], gotImage);
}

function gotImage(results) {
  img = results;
  console.log("Image loaded.");
}
