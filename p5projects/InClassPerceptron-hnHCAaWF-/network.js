class NeuralNetwork {

  constructor() {
    this.errors = 0;
    this.learnRate = 0.001;
    this.weights = [
      random(-1, 1),
      random(-1, 1),
      random(-1, 1)
    ];
  }

  drawCurrent() {
    stroke(0); // current guess at line
    let y1 = scrY(this.guessedY(-1));
    let y2 = scrY(this.guessedY(1));
    line(0, y1, width, y2);
  }

  train(inputs, label) {
    let guess = this.classify(inputs);
    if (guess !== label) this.errors++;
    let error = label - guess;
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * this.learnRate * inputs[i];
    }
  }

  guessedY(x) {
    // y = mx + b
    let w0 = this.weights[0];
    let w1 = this.weights[1];
    let w2 = this.weights[2];
    return -x * w0 / w1 - w2 / w1; // y
  }

  classify(inputs) {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activation(sum);
  }

  activation(n) {
    return n > 0 ? 1 : 0;
  }
}