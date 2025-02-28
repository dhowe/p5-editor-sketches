var sketch = function($){

  var img;

  $.preload = function() {
    img = $.loadImage("shape.png");
  }

  $.setup = function() {
    $.createCanvas(500, 500, $.WEBGL);
  }

  $.draw = function() {
    $.noStroke();
    $.background(240);
    $.texture(img);
    $.plane(300, 300);
  }
}

new p5(sketch);