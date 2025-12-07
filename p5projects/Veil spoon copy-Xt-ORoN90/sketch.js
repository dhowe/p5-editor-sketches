// idea: inspired by Burtynsky
// Turning horrible things into beauty: Blood Diamonds

let rm, data;

function preload() {
  data = loadStrings('cleaned.txt')
}

function setup() {
  noCanvas();

  rm = RiTa.markov(3);

  // add the text
  for (let i = 0; i < data.length; i++) {
    rm.addText(data[i]);
  }
  
  for (let i = 0; i < 20; i++) {
    let sent = rm.generate(); // generate one headline
    sent = sent.replace(/\.$/, ''); // remove period at the end
    console.log(i, sent); // print
  }

}
