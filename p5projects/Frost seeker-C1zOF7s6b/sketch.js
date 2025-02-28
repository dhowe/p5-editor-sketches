let json;
function preload() {
  json = loadJSON('https://raw.githubusercontent.com/dhowe/sas/main/nndata.json');
}

function setup() {
  createCanvas(400, 400);
  background(240);
  let pts = json.data.map(d => {
    return [
      map(d.lat,-90,90,-1,1),
      map(d.long,-180,180,-1,1),
      d.cases > 0 ? true : false
    ];
  });
  pts.forEach(p => {
    fill(0);
    let [x,y] = p.slice(0,2);
    x = map(x, -1, 1, 0, width);
    y = map(y, -1, 1, height, 0);
    if (p[2]) fill(200);
    console.log(x,y)
    circle(x,y, 10);
  })
}

