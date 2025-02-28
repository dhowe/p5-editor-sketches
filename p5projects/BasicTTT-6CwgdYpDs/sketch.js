let game;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textFont("courier", 150);
  strokeWeight(6);
  game = new TicTacToe();
  game.render();
}

function mouseReleased() {
  if (!game.over()) {
    game.update(mouseX, mouseY);
    game.render();
  }
}

//////////////////////////////////////////////////

class TicTacToe {
  constructor() {
    this.values = ["", "X", "O"];
    this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.size = max(width, height) / 3;
    this.turn = 1; // 1 (X) or 2 (O)
    this.winner = 0;
  }
  
  update(mx, my) {
    if (!this.winner) {
      let x = floor((mx / width) * 3);
      let y = floor((my / height) * 3);
      let idx = x + y * 3;
      if (!this.state[idx]) {
        this.state[idx] = this.turn;
        this.winner = this.checkForWinner();
        this.turn = this.turn == 1 ? 2 : 1;
      }
    }
  }
  
  checkForWinner() {
    let s = this.state;
    if (s[0] && s[0] == s[1] && s[1] == s[2]) return [0, 1, 2];
    if (s[3] && s[3] == s[4] && s[4] == s[5]) return [3, 4, 5];
    if (s[6] && s[6] == s[7] && s[7] == s[8]) return [6, 7, 8];

    if (s[0] && s[0] == s[3] && s[0] == s[6]) return [0, 3, 6];
    if (s[1] && s[1] == s[4] && s[1] == s[7]) return [1, 4, 7];
    if (s[2] && s[2] == s[5] && s[2] == s[8]) return [2, 5, 8];

    if (s[0] && s[0] == s[4] && s[4] == s[8]) return [0, 4, 8];
    if (s[2] && s[2] == s[4] && s[4] == s[6]) return [2, 4, 6];
    return 0;
  }

  render() {
    background(255);
    for (let i = 0; i < this.state.length; i++) {
      let x = (i % 3) * this.size;
      let y = floor(i / 3) * this.size;
      rect(x, y, this.size);
      text(this.values[this.state[i]], x + this.size / 2, y + this.size / 2);
    }
    if (this.over()) this.finish();
  }

  over() {
    return this.winner ? true : false;
  }
  
  finish() {
    let pts = [ this.winner[0] % 3, floor(this.winner[0] / 3),
      this.winner[2] % 3, floor(this.winner[2] / 3),
      ].map((p) => p * this.size + this.size / 2);
    line(...pts);
    textSize(85);
    fill(200, 0, 0);
    text(
      this.values[this.state[this.winner[0]]] + " wins",
      width / 2,
      height / 2 + 75
    );
  }
}
