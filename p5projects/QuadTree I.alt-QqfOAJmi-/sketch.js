let tree;

function setup() {
  createCanvas(800, 800);
  tree = new QuadTree(0, 0, width, height);
}

function draw() {
  background(220);
  tree.render();
  text(tree.size() + ' entries', 10, 15);
  // if (mouseIsPressed) tree.insert({ x: mouseX, y: mouseY });
}

function mouseClicked() {
  tree.insert({ x: mouseX, y: mouseY });
}

