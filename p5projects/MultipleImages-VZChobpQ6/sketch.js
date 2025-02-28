let imgs = [];

function preload() {
  for (let i = 1; i < 10; i++) {
    let img = loadImage(i + '.jpg');
    imgs.push(img);
  }
}

function setup() {
  createCanvas(100, 500);
  background(245);
  
  for (let i = 0; i < imgs.length; i++) {
    
    let y = 25 + i * 50;
	image(imgs[i], 25, y, 50, 50);		
  }
}






