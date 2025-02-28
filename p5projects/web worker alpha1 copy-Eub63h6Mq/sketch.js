Ncirc = 0;
Nperworker = 0;
Ntot = 0;
Nperworker = 100000000; 
running = 0;

function draw() {
   noLoop(); // only run draw once

   createP("You have " + navigator.hardwareConcurrency + " cores in your CPU");
   createP("Initializing your " + navigator.hardwareConcurrency + " cores as web workers");
   for (n = 1; n <= navigator.hardwareConcurrency; n += 1) {
        workers = new Worker('worker.js');
        workers.onmessage = workerDone;
        workers.postMessage({id: n, count: Nperworker});
	    createP("Worker #" + n + " is initialized and running");
        ++running;
   }
  
} // end draw()

function workerDone(e) {
        --running;
    	Ncirc += e.data.sum;
    	Ntot += Nperworker;
        createP("Worker " + e.data.id + " is done, result: " + e.data.sum);
        if (running === 0) { // <== There is no race condition here, see below
 	    createP("Estimate of pi =" + 4.0*Ncirc/Ntot);
        createP("Estimated - True = " + (4.0*Ncirc/Ntot - PI));
        }
}  
    
