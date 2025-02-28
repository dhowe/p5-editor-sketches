function setup() {
  createCanvas(400, 400);
  var ritaMarkov = new RiMarkov(3);
  var markovSource;
  fetch("https://rednoise.org/misc/markov-source.txt")
    .then((response) => response.text())
    .then((text) => loadMS1(text, hideLoading));
}
