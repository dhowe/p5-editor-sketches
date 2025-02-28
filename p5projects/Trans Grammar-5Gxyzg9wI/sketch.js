// Mouse over a word for the french translation

let grammar = {
  start: "$verb this/ceci as_a/comme $thing",
  thing: "model/modèle",
  verb: "Use/Utilise",
};

let rg = RiTa.grammar(grammar);

function setup() {
  noCanvas();
  
  let div = createDiv()
    .style('width: 200px; background: white; padding: 10px; font-size: 20px');
  
  let html = '', words = rg.expand().split(" ");
  
  for (let i = 0; i < words.length; i++) {
    let trans = words[i].replace('_', ' ').split('/');
    html += `<span title="${trans[1]}">${trans[0]} </span>`;
  }
  
  div.html(html);
}
