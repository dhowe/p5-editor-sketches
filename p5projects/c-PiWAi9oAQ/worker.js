
this.onmessage = function(e) {
  console.log('hello', typeof rg);
  //let lines = ['a.'+this.millis(),'b.'+this.millis()];
  this.postMessage({lines:['a','b']});
};
