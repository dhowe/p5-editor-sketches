const fills = [
    '#00cbd6', '#83d302', '#e80051', '#2087db', '#f4d002',
    '#eda3d4', '#2e8720', '#ea2ebb', '#213877', '#fc771e',
    '#a6dbd9', '#c8e067', '#ed5131', '#e2d9d9', '#f4eea8'
];

const patterns = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiVFBQ2M8ABPfv33dkQAJMDDgA4////7FK4NRBugRAgAEAXhEHBXvZgh4AAAAASUVORK5CYII%3D',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB1JREFUeNpiUFBQ2P///38GEGYEETDAxIAEAAIMACllChoZz6oRAAAAAElFTkSuQmCC',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1JREFUeNpiVFBQ2M/AwODIgAAgPgMTNkGYBIYgSDETNkGYDgxBdKNQ7AIIMABhpgcrohF6AgAAAABJRU5ErkJggg%3D%3D',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADJJREFUeNpi+P//PwMyVlBQ2M/EgAQUFRX3AylHJnQBEJsJXQAEGEFmIAvcv3+fASDAANwmFUHSvnUvAAAAAElFTkSuQmCC',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAGCAYAAADkOT91AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpiUFBQ2P///38GGGZiQAOEBRhB+vCqAAgwAAmADR3HFFILAAAAAElFTkSuQmCC',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEdJREFUeNpiUlBQ2A/EDP///wdjdD4jiAME+4HYERvNxAAByIIofEaQMYqKigy4ANiE+/fvwwVAbGQ+A50ciQ8wMRAAAAEGAKNCOWlhLo6PAAAAAElFTkSuQmCC'
];

let patts;

function preload() {
  patts = patterns.map(p => loadImage(p).canvas);
}

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  noStroke();
  patts = patts.map(p => drawingContext.createPattern(p, 'repeat'));
}

function draw() {
  background(245);

  drawingContext.fillStyle = random(fills);
  rect(10,10,width-20,height-20);
  
  drawingContext.fillStyle = random(patts);
  rect(10,10,width-20,height-20);
}


// POP-ART palette from Akimitsu Hamamuro 
