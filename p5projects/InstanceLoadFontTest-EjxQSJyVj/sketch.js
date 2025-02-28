var s = function(p) {
  
  var font;
  p.preload = function() {
    console.log('preload', typeof font);
    font = p.loadFont('Resagokr.otf');
    console.log('preload.done', typeof font);
  };
  
  p.setup = function() {
    console.log('setup', typeof font);
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    console.log('draw', typeof font);
    p.background(255);
    p.textFont(font, 100);
    p.text('hello', 100,200);
    p.noLoop();
  };
};

new p5(s);