// Introduction to Machine Learning for the Arts, Fall 2024
// https://github.com/ml5js/Intro-ML-Arts-IMA-F24
// Thank you to Alan Ren!

let inputField;
let submitButton;
let outputContainer;
const proxyURL = "https://replicate-api-proxy.glitch.me/create_n_get/";

// System prompt
let system_prompt =
  "You are a friendly assistant that provides concise answers.";

function setup() {
  noCanvas();
  // Text input for user query
  inputField = createInput("");

  // Submit button to send user query
  submitButton = createButton("Send");
  submitButton.mousePressed(handleSubmit);
  // Container for loading and reply messages
  outputContainer = createDiv("");
}

async function handleSubmit() {
  const userInput = inputField.value();
  if (!userInput) return;

  // Clear the input field after submission
  inputField.value("");

  // Show loading message in display container
  outputContainer.html("Loading...");

  // Fetch response based on user input
  const response = await getChatResponse(userInput);
  
  // Display the bot's response in the container
  outputContainer.html(response);
}

async function getChatResponse(userInput) {
  // Prepare the data for the proxy API call
  const data = {
    modelURL:
      "https://api.replicate.com/v1/models/meta/meta-llama-3-70b-instruct/predictions",
    input: {
      prompt: userInput,
      system_prompt: system_prompt,
      max_tokens: 150,
      temperature: 0.7,
      top_p: 0.9,
    },
  };

  // Configuration for the fetch request
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  // Sends the POST request to the proxy URL
  const raw_response = await fetch(proxyURL, options);

  // Parse the JSON response and return the model's output text
  const json_response = await raw_response.json();
  return json_response.output.join("").trim();
}
