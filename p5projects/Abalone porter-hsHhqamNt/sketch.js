let url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=$YOUR_API_KEY";
let postData = {
  contents: [
    {
      parts: [{ text: "Give me the steps to lose 10 pounds" }],
    },
  ],
};

function setup() {
  createCanvas(100, 100);
  background(200);
}

function mousePressed() {
  httpPost(url, "json", postData, processResult);
}

function processResult(result) {
  strokeWeight(2);
  text(result.body, mouseX, mouseY);
}
