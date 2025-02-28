let N = 7;
let model = {};
let startSymbol = '%';

function setup() {
  noCanvas();
  createModel();
  generate();
}

function createModel() {
  
  let text = '', sentences = sentenceData.data;
  sentences.forEach(s => text += startSymbol + s +' ');
  for (let i = 0; i < text.length-N; i++) {
    let ngram = text.slice(i,i+N-1);
    if (!model[ngram]) model[ngram] = [];
    model[ngram].push(text[i+N-1]);
  }
}

function generate(minLen=50, maxLen=200) {
  
  let result = random(Object.keys(model).filter(s => s.startsWith('%')));  
  while (result.length < maxLen) {
    let seed = result.slice(-(N-1));
    let options = model[seed];    
    let next = random(options);
    result += next;
    if (result.endsWith('.')) break;
  }
  
  //console.log(result);
  let sentence = result.replace('%','');
  document.getElementById('content').innerText += ' '+sentence;
}

