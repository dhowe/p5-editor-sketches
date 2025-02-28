const posters = [];
let scrollOffset = 0;

function preload() {
  for (let i = 0; i < 6; i++) {
    const index = (i % 2) + 1;
    posters.push({ img: loadImage(`${index}.png`) });
  }
}

function setup() {
  createCanvas(400, 400);
}

function getPreviousHeightSums(index) {
  let sum = 0;
  for (let i = 0; i < index; i++) {
    sum += posters[i].h;
  }
  return sum;
}

function draw() {
  background(220);

  let middleY = height / 2; // Center of screen
  posters.forEach((poster, index) => {
    const img = poster.img;
    const heightsOfPrevious = getPreviousHeightSums(index)
    const h = height * (1/(posters.length/2));
    const w = width * (1/(posters.length/2));
    const y =  heightsOfPrevious + scrollOffset;
    let stretchFactor = map(abs(y - middleY), 0, middleY, 1, 0.2, true);
    const newH = h * stretchFactor*3;

    const x = width - w;

    image(img, x, y, w, newH);
    poster.h = newH;
  });
}

function mouseWheel(event) {
  scrollOffset -= event.delta;
}
