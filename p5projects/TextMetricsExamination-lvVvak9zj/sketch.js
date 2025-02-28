let p = window;

function setup() {
  p.createCanvas(1420, 840);
  p.background(240);
  p.fill(0);
  p.textSize(800);
  let s = "?g"; //What's the width of this line?";
  let metrics = p.drawingContext.measureText(s);
  print(metrics);
  print('tw='+metrics.width);

  let tw = metrics.width;
  let x = 30,
    y = 600;
  p.text(s, x, y);

  line(0, y, width, y);
  line(x, 0, x, height);
  line(x +  tw, 0, x + tw, height);
  p.stroke("red");
  let xmin = x + abs(metrics.actualBoundingBoxLeft);
  line(xmin, 0, xmin, height);
  let xmax = x + metrics.actualBoundingBoxRight;
  
  line(xmax, 0, xmax, height);
  print('tw2='+(xmax-xmin));
  print('tw3='+(abs(metrics.actualBoundingBoxRight)-abs(metrics.actualBoundingBoxLeft)));

}
