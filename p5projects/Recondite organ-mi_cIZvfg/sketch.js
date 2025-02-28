let imgs = [],img;

function preload() {
   img = loadImage('1.jpg');
}
//   for (let i = 1; i < 9; i++) {
//     let img = loadImage(i+'.jpg');
//     imgs.push(img);
//   }
//   console.log(imgs);
// }

function setup() {
  createCanvas(450, 50);
  background(255);
  console.log('img',img);
//   for (let i = 0; i < imgs.length; i++) {
    
//     image(imgs[i], i*50, 50, 50, 50);
//   }
}

