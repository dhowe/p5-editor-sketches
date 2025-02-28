// Mouse over a word for chinese translation

let grammar = {
  start: "The_large $prey was_eaten by the_small $predator",
  predator: "cat",
  prey: "mouse"
};

let rg = RiTa.grammar(grammar);

function setup() {
  noCanvas();
  
  let div = createDiv()
    .style('width: 200px; background: white; padding: 10px; font-size: 20px');
  
  let result = rg.expand();
  let words = result.split(' ');
  
  let html = '';
  for (let i = 0; i < words.length; i++) {
    let phrase = words[i].replace(/_/g, ' ');
    let trans = dict[words[i]];
    console.log(words[i], trans);
    html += `<span title="${trans}">${phrase} </span>`;
  }
  
  div.html(html);
}

let dict = {
  'The_large': '大',
  'mouse': '老鼠',
  'was_eaten': '吃掉了',
  'by': '被',
  'the_small': '小',
  'cat': '貓',
}
