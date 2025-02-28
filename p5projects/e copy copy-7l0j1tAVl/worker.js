importScripts('rita.js');

this.onmessage = function (e) {
  console.log('LOG',this);
  // let rg = RiTa.grammar(poem);
  // let result = rg.expand();
  let lines = ['a','c']//result.split("%");
//  console.log("hello", typeof e.data.rg);
  this.postMessage({ lines });
};
