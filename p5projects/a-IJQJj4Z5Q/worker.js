
this.onmessage = function(e) {
  console.log('hello');
  //let lines = ['a.'+this.millis(),'b.'+this.millis()];
  this.postMessage({lines:['a','b']});
};
