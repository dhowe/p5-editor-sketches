function setup() {
  console.log('start');
  // here we use a callback to display the image after loading
  loadImage('banner.png', (err,img) => {
    if (err) throw err;
    image(img, 0, 0);
  });
  console.log('finish');
}