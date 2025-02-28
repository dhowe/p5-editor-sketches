let txt = "Now that we have dealt with the important business of sizing, setting and distributing our paragraphs compellingly, you may wish to apply a few small enhancements and decorations for the purpose of signposting the document. These nuances concern only certain paragraphs, and choosing which paragraphs to set off is a question of context. With the help of special selectors and combinators, we are able to target specific paragraphs depending on where they appear on the page, making sure that the difference in their design is consistent with their intended role and meaning.";

let N = 7;
let model = {};

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < txt.length - N; i++) {
    let ngram = txt.slice(i, i + N);
    if (!model[ngram]) model[ngram] = [];
    model[ngram].push(txt[i + N]);
  }
  for (let i = 0; i < 10; i++) {
    console.log(i, generate(30));
  }
}

function generate(num) {
  let starts = Object.keys(model).filter(t => /[A-Z]/.test(t[0]));
  let sofar = RiTa.random(starts);
  let output = sofar;
  for (let i = 0; i < num * 5; i++) {
    let choices = model[sofar];
    output += RiTa.random(choices);
    let len = output.length;
    if (len > num && output.endsWith(' ')) {
      break;
    }
    sofar = output.substring(len - N, len);
  }
  return output.trim();
}