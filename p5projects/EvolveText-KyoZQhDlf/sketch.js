let size = 50;
let population = [];
let target = "SAY NO TO WAR";
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
let mutationRate = 0.01;

function setup() {
  createCanvas(400, 1000);
  background(245);
  textFont("courier", 18);
  for (let i = 0; i < size; i++) {
    population[i] = [];
    for (let j = 0; j < target.length; j++) {
      population[i].push(random(Array.from(alphabet)));
    }
  }
  frameRate(10);
}

function draw() {
  background(245);
  population.sort((a, b) => fitness(b) - fitness(a));
  population.forEach((p, i) =>
    text(p.join('') + ' ' + nf(fitness(p), 0, 2), 20, 30 + i * 19)
  );
  text("Gen #" + frameCount, 300, 20);
  if (fitness(population[0]) < 1) evolve();
  else noLoop();
}

function evolve() {
  let nextGen = [population[0]];
  for (let i = 0; nextGen.length < size; i++) {
    let mom = pselect(population);
    let dad = pselect(population);
    let crossPt = floor(random(1, mom.length - 2));
    let child = [...mom.slice(0, crossPt), ...dad.slice(crossPt)];
    // mutate
    for (let i = 0; i < child.length; i++) {
      if (random() < mutationRate) {
        child[i] = random(Array.from(alphabet));
      }
    }
    nextGen.push(child);
  }
  population = nextGen;
}

function pselect(pool) {
  let sum = pool.reduce((acc, ele) => acc + fitness(ele), 0);
  let rand = Math.random() * sum; // from 0 - sum
  return pool.find((ele) => (rand -= fitness(ele)) < 0);
}

function fitness(cand) {
  return cand.filter((c, i) => c === target[i]).length / target.length;
}
