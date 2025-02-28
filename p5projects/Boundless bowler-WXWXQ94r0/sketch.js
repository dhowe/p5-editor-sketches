function setup() {
  createCanvas(400, 400);
  let t = [];
  // -90 to 90 for latitude and -180 to 180 for longitude.
  for (let i = 0; i < 100; i++) {
    let lat = floor(random(-90, 90));
    let long = random(-180, 180);
    let cases = random() > .5 ? floor(random(20)) : 0;
    t.push({lat,long,cases});
  }  
  console.log(JSON.stringify(t, function(key, val) {
    return (key === 'lat' || key == 'long' && val.toFixed) ? Number(val.toFixed(3)) : val;
  }));
}

