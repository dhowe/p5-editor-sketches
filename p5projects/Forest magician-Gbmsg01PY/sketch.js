function setup() {
  createCanvas(500, 500, WEBGL);
  normalMaterial();
  describe(
    'Camera orbits around a box when mouse is hold-clicked & then moved.'
  );
  camera(0, 0, 50*sqrt(3), 0, 0, 0, 0, 1, 0);
 // perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(3));
}
function draw() {
  background(200);

  // If you execute the line commented out instead of next line, the direction of rotation
  // will be the direction the mouse or touch pointer moves, not around the X or Y axis.
  orbitControl();
  // orbitControl(1, 1, 1, {freeRotation: true});

  rotateY(0.5);
  box(30, 50);
}
