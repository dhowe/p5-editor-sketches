let locs;
function setup() {
  createCanvas(400, 400);
  loadJSON("nl.json", (json) => {
    locs = json.data;
    locs.forEach((loc) => {
      if (loc.long > 100) loc.cases = 0;//floor(random(1,10));
      if (loc.cases > 0 && loc.lat > 80) loc.cases = 0;
      if (loc.cases === 0 && loc.long < 0) {
      //  loc.cases = 7;
        console.log('hit')
      }
      // loc.lat = map(loc.lat, -90, 90, -1, 1);
      // loc.long = map(loc.long, -180, 180, -1, 1);
      // loc.cases = loc.cases > 0 ? 1 : -1;
    });
    saveJSON(locs,'nl-locations.json');
    background(240);

    locs.forEach((l) => {
      noStroke();
      fill(200, 200, 0);
      if (l.cases > 0) fill(200, 0, 0);
      ellipse(map(l.lat,-90,90,0,width), 
              map(l.long,-180,180,height, 0), 15);
    });
  });
}
