
class ColorLines {
  
  //filling colours with lines
  constructor() {
    this.c;
    this.randomness = random(0.05, 0.1);
  }

  render(x, y, originalX, originalY) {
    this.randomness += random(-0.05, 0.05);
    this.c = pixelColours[int(originalX / resScale)][int(originalY / resScale)];
    this.randomness = constrain(this.randomness, 0, 1);
    
    let h = floor(map(hue(this.c), 0, 255,colorShade, (colorShade+120)%255)/60)*60;
    let s = map(brightness(this.c), 0, 255, 255, 150);
    let b = map(brightness(this.c), 0, 255, 255, 80);
    let a = 200;
    strokeWeight(1);
    stroke(h, s, b, a);
    line(originalX, originalY, originalX + (x - originalX) * this.randomness * 0.6, originalY + (y - originalY) * this.randomness * 0.6);
  }
}
