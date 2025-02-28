this.onmessage = function(event) {
  console.log('worker.onmessage:');
  console.log(event);
  // let tmp = [];
  // let result = rg.expand();
  // let rule = result.split("%");
  // for (let i = 0; i < rule.length; i++) {
  //   tmp.push(rule[i]);
  // }
  this.postMessage({lines: []});
}