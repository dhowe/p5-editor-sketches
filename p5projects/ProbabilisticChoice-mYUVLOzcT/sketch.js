// Question: how to choose from an unknown set 
// of probabilities in an object: { word: prob }

let probs = { // test data
  killed: 0.1,
  jack: 0.4,
  ate: 0.2,
  lay: 0.3, 
};

let results = {};
let tests = 1000000;

function setup() {
  
  createCanvas(250, 200);
  textSize(24);
  
  // test our function 1 million times
  for(let i = 0; i < tests; i++) {
    let choice = choose(probs);
    if (!results[choice]) {
      results[choice] = 0;
    }
    results[choice]++;
  }
}

function draw() {
  
  background(245);
  
  // display the results
  let words = Object.keys(probs)
  for(let i = 0; i < words.length; i++) {
    text(words[i] +':', 40, 50 + 40 * i);
    text(results[words[i]]/tests, 120, 50 + 40 * i);
  }
  
  noLoop();
}

// choose word according to probability
function choose(probs) {
  
  let words = Object.keys(probs); // the words
  let rand = random(0, 1); // our random number
  
  let sofar = 0;
  for (let i = 0; i < words.length; i++) {

    // the probability for the word
    let prob = probs[words[i]];
    
    // increment totall probability 
    sofar += prob;
    
    if (rand < sofar) {
      return words[i];
    }
  }
}

