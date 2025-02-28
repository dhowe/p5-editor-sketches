importScripts('https://unpkg.com/browse/rita@2.4.501/dist/rita-micro.js');

this.onmessage = function (e) {
  let rg = RiTa.grammar(e.data.poem);
  let result = rg.expand();
  let lines = result.split("%");
  this.postMessage({ lines });
};
