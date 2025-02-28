function setup() {
  var c = createCanvas(400, 400);
  var ctx = c.elt.getContext('2d');
  ctx.font = "500 30px Arial";
  ctx.fillText("Hello World", 10, 30);
  fill(255);
  textFont("500 30px Arial");
  text("Hello World", 10, 60)
}
