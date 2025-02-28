
this.onmessage = function(e) {
  let lines = ['a.'+millis(),'b.'+millis()]
  this.postMessage({lines});
};
