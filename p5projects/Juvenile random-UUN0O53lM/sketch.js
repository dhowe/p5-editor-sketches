let meter;
function setup() {
  createCanvas(400, 400);
  meter = new Tone.Meter();
  const mic = new Tone.UserMedia().connect(meter);
  mic
    .open()
    .then(() => {
      console.log("mic open");
    })
    .catch((e) => {
      // promise is rejected when the user doesn't have or allow mic access
      console.log("mic not open");
    });
}

function draw() {
  background(220);
  console.log(meter.getValue());
}
