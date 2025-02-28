class Word {
  
  constructor(t,x,y) {
    this.text = t;
    this.color = 'black';
    this.x = x;
    this.y = y;
  }
  
  setColor(c) {
    this.color = c;
  }
  
  render(col) {
    
    fill(this.color);
    text(this.text, this.x, this.y);
  }
}