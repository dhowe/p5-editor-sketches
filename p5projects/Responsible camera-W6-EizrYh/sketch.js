let testWebGL = false;
let font;
// let fontSrc = 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf'
// let fontSrc = 'https://fonts.gstatic.com/s/raleway/v36/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaooCPNLA3JC9c.ttf'
// let fontSrc = 'https://fonts.gstatic.com/s/hennypenny/v18/wXKvE3UZookzsxz_kjGSfMQqt3M7tMDT.ttf'
// let fontSrc = 'https://fonts.gstatic.com/s/breeserif/v18/4UaHrEJCrhhnVA3DgluAx63j5pN1MwI.ttf'
// let fontSrc = 'https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf'
let fontSrc = 'https://fonts.gstatic.com/s/inknutantiqua/v16/Y4GRYax7VC4ot_qNB4nYpBdaKU2_xbj5bBoIYJNf.ttf';

async function setup() {
  font = await loadFont(fontSrc);
  createCanvas(400, 400, testWebGL ? WEBGL : P2D);
}

function draw() {
  background(255);
  push()
  if (!testWebGL) translate(width/2, height/2)
  textAlign(CENTER, CENTER);
  textSize(80);
  textFont(font);

  noStroke();
  fill('red');
  font.textToPoints("p5*js", 0, 0, { sampleFactor: 0.2 })
    .forEach(p => circle(p.x,p.y,3))

  fill("blue");
  text("p5*js", 0, 0);
  pop()
}