this.onmessage = function (e) {
  
  let rg = RiTa.grammar(poem);
  let result = rg.expand();
  let lines = result.split("%");
//  console.log("hello", typeof e.data.rg);
  this.postMessage({ lines });
};
