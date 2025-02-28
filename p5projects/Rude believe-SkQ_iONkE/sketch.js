function setup() {

   createCanvas(200, 200)
   background(255);

   // tests for your function
   var a = sumFromAToB(1, 2); // 3
   text(a, 20, 20);

   a = sumFromAToB(-5, 5);  // 15
   text(a, 20, 40);

   a = sumFromAToB(2, 19); // 189
   text(a, 20, 60);
 }

 function sumFromAToB(a, b) {
   var s = 0;
   for (var i = a; i <= b; i++) {
     if (i < 0) continue;
      console.log('adding '+i);
			s += i;
   }
         console.log('got '+s+'\n-------');
   return s;
 }