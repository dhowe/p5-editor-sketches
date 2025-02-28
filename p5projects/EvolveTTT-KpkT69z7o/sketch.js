let size = 50;
let mutationRate = 0.01;
let winMatrix, population;

// TODO: fix genes to be []
// TODO: do crossover/mutation (evolveText)
// TODO: merge candidates/population

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textFont("courier", 150);
  strokeWeight(6);

  winMatrix = initPop();
  let candidates = playAll();
}

function playAll(render) {
  let numGames = 0;
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      if (i == j) continue;
      let winner = play(population[j], population[i], render);
      let wstr = winner === population[j] ? j + "(X)" : i + "(O)";
      winMatrix[j][i] = winner === population[j] ? "X" : "O";
      numGames++;
    }
  }
  console.log(numGames + " Games");
  let candidates = assessFitness(numGames);
  logGen(numGames, winMatrix, candidates);
  return candidates;
}

function assessFitness(numGames) {
  let wins = Array(size).fill(0);
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      if (winMatrix[j][i] === "X") wins[j]++;
      if (winMatrix[j][i] === "O") wins[i]++;
    }
  }
  let cands = wins.map((w, i) => ({
    genes: population[i],
    fitness: wins[i] / numGames,
    index: i,
    wins: w,
  }));
  return cands.sort((a, b) => b.fitness - a.fitness);
}

function logGen(numGames, result, cands) {
  console.log("-------------");
  let num = 0;
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      if (i == j) continue;
      let wstr = winMatrix[j][i] === "X" ? j + "(X)" : i + "(O)";
      console.log(++num + ") " + j + "(X) vs " + i + "(O) -> " + wstr);
    }
  }
  console.log("\nWIN-MATRIX\n-------------");
  for (let i = 0; i < size; i++) {
    console.log(i, winMatrix[i].map((r) => (r ? r : "-")).join(" "));
  }
  console.log("\nCANDIDATES\n-------------");
  cands.forEach((c, i) => console.log(i, c));
}

function play(a, b, render) {
  let game = new TicTacToe();
  let match = { X: a, O: b };
  let winner;
  let player = a;
  for (let i = 0; i < 9; i++) {
    let ok = move(game, player, render);
    let next = player === a ? b : a;
    if (!ok) return next;
    player = next;
  }
  return match[game.winner];
}

function move(game, player, render = false) {
  let next = player[game.state.join("")];
  if (game.state[next]) {
    let team = game.values[game.turn];
    0 && console.log("illegal move for " + team + "s index[" + next + "]");
    return false;
  }
  game.update(next);
  if (render) game.render();
  return true;
}

function initPop(game) {
  population = [];
  let perms = permutations([0, 1, 2], 9);
  for (let j = 0; j < size; j++) {
    let strs = perms.slice();
    let genes = {};
    //console.log(genes.length, genes[0].length);
    for (let i = 0; i < strs.length; i++) {
      genes[strs[i]] = floor(random(9));
    }
    population.push(genes);
  }
  return [...Array(size)].map(() => [...Array(size)]);
}

function permutations(numbers, strlen) {
  let result = [];
  let total = numbers.length ** strlen;
  for (let i = 0; i < total; i++) {
    let r = i.toString(numbers.length); // convert to base
    while (r.length < strlen) r = "0" + r; // pad
    result.push(r);
  }
  return result;
}

function permutations(numbers, strlen) {
  let result = [];
  let total = numbers.length ** strlen;
  for (let i = 0; i < total; i++) {
    let r = i.toString(numbers.length); // convert to base
    while (r.length < strlen) r = "0" + r; // pad
    result.push(r);
  }
  return result;
}

function mouseReleased() {
  if (!game.over()) {
    game.onClick(mouseX, mouseY);
    game.render();
  }
}

class TicTacToe {
  constructor() {
    this.values = ["", "X", "O"];
    this.size = max(width, height) / 3;
    this.reset();
  }

  reset() {
    this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.turn = 1; // 1 (X) or 2 (O)
    this.winner = 0;
  }

  onClick(mx, my) {
    let x = floor((mx / width) * 3);
    let y = floor((my / height) * 3);
    let idx = x + y * 3;
    this.update(idx);
  }

  update(idx) {
    if (!this.winner && !this.state[idx]) {
      this.state[idx] = this.turn;
      this.winner = this.checkForWinner();
      this.turn = this.turn == 1 ? 2 : 1;
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
    textSize(150);
    for (let i = 0; i < this.state.length; i++) {
      let x = (i % 3) * this.size;
      let y = floor(i / 3) * this.size;
      fill(255);
      rect(x, y, this.size);
      fill(0);
      text(this.values[this.state[i]], x + this.size / 2, y + this.size / 2);
    }
    if (this.winner) this.showWin();
  }

  over() {
    return this.winner || !this.state.filter((s) => s != 0).length
      ? true
      : false;
  }

  showWin() {
    let pts = [
      this.winner[0] % 3,
      floor(this.winner[0] / 3),
      this.winner[2] % 3,
      floor(this.winner[2] / 3),
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
