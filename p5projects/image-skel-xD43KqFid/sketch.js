let c, img;

function preload() {
  img = loadImage("zverev-sm.png");
}

function setup() {
  c = createCanvas(400, 589);
  print('img', img.elt);
  image(img, 0, 0);
  TraceSkeleton.load().then((tracer) => {
    const { polylines, rects } = tracer.fromCanvas(c.elt);
    print(
      rects.length + " rects", 
      polylines.length + " lines", 
      JSON.stringify(rects,0,2),
      JSON.stringify(polylines,0,2)
    );
  });
}
