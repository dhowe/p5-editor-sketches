let size = 40;
let population = [];
let target = "SOFTWARE ART STUDIO";
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXZ ";

function setup() {
  createCanvas(400, 1000);
  textFont('courier', 18);
  for (let i = 0; i < size; i++) {
    let ind = [];
    while (ind.length < target.length) {
      ind.push(random(Array.from(alphabet)));
    }
    population.push(ind);
  }
  console.log(population);
}

function fitness(ind) {
  let matches = ind.filter((chr,idx) => chr === target[idx]);
  return matches.length / target.length;
}

function draw() {
  background(245);
  population.sort((a,b) => fitness(b) - fitness(a));
  population.forEach((p,i) => text(p.join('')+'  '+nf(fitness(p),0,2), 20, 30+i*20));
  noLoop();
}

