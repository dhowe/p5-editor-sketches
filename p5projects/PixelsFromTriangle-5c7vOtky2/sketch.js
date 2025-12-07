let triPts = [20,380, 200, 20, 380, 380];

function setup() {
  createCanvas(400, 400);
  background(220);
  triangle(...triPts);
  noStroke();
  for (let i = 0; i < width; i+=3) {
    for (let j = 0; j < height; j+=3) {
      if (pointInTri(i, j, triPts)) {
        fill('red');
        circle(i,j,3);
      }
    }
  }
}


function pointInTri(px, py, tp)
{
  if (tp.length !== 6) throw Error('Expecting array[6]');
  
  // winding of the whole triangle:
  let w = (tp[3] - tp[1]) * (tp[4] - tp[2]) - (tp[2] - tp[0]) * (tp[5] - tp[3]);
  let sign = w > 0 ? 1 : (w < 0 ? -1 : 0);

  for (let i = 0; i < 3; i++) // test winding of point with each side
  {
    let i1 = 2 * i;
    let i2 = i1 != 4 ? i1 + 2 : 0;

    let w2 = (tp[i1 + 1] - py) * (tp[i2] - tp[i1]) - (tp[i1] - px) * (tp[i2 + 1] - tp[i1 + 1]);
    let sign2 = w2 > 0 ? 1 : (w2 < 0 ? -1 : 0);

    if (sign * sign2 == -1) // includes edges
    //if (sign != sign2) // excludes edges
      return 0;
  }

  return 1;
}