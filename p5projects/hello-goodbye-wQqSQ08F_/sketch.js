let fontSize = 350;
let pts1, pts2;

function preload() {
  font = loadFont('NotoSans-tiny.ttf')
}

function setup() {
  createCanvas(800, 400)  
  noStroke()
  
  // Convert the text to array of points
  pts1 = font.textToPoints('你好', 55, 340, fontSize);
  pts2 = font.textToPoints('再见', 55, 340, fontSize);
}

function draw() {
  background(0, 50);
  
  // set t to move smoothly between 0-1
  let t = map(sin(frameCount/100),-1,1,0,1);
  
  // lerp between each point and another
  for (let i = 0; i < pts1.length; i++) {
    let j = (i + frameCount) % pts1.length;
    let pt1 = pts1[i], pt2 = pts2[j];
    let x = lerp(pt1.x, pt2.x, t);
    let y = lerp(pt1.y, pt2.y, t);
    ellipse(x,y,5);
  }    
}