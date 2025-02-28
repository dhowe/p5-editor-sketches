radius = 250;

this.onmessage = function(e) {
    var sum, n;
  console.log('worker.onmessage')
    sum = 0;
    for (n = 0; n < e.data.count; ++n) {
	x = radius*(2.0*Math.random()-1.0);
	y = radius*(2.0*Math.random()-1.0);
        if (x*x + y*y < radius*radius) {
	    sum += 1;
	}
    }
    this.postMessage({id: e.data.id, sum: sum});
};
