function setup() {
  createCanvas(440, 440);

 for (let i = 0; i < 11; i++) {
  fill(floor(random(2))*255);
  square(i*40,10,40);			
 } 
   for (let i = 0; i < 11; i++) {
  fill(floor(random(2))*255);
  square(i*40,50,40);			
 } 
}
