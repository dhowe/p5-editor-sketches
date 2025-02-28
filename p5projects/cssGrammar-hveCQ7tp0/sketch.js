let g, div, col = 'black', txt = "click me";
let rules = {
  start: 'This is a $color (poem | story | riddle) % $color',
  $color: 'red | blue | green'
}

function setup() {
  noCanvas();
  div = createDiv();
  div.style('background-color: white; padding: 10px');
  g = RiTa.grammar(rules);  
  mouseClicked();
}

function mouseClicked() {
  let tmp = g.expand().split('%')
  txt = tmp[0];
  col = tmp[1].trim();
  let words = txt.split(' ');
  let html = ''; 
  for (let i = 0; i < words.length; i++) {
	html += '<span';
    //console.log(`"${words[i]}","${col}"`,words[i] === col);
    if (words[i] === col) html += ' style="color: '+col+';"';
    html+= '>'+words[i]+' </span>';
  }
  console.log(html);
  div.html(html);

}
  