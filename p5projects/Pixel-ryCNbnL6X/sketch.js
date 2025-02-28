function setup() {
  createCanvas(128, 128);
  loadStrings('pix.txt', function(s) {
    var x = 0, y = 0;
    for (var i = 0; i < s.length; i++) {
      stroke(parseInt(s[i]));
      point(x++, y);
      if (i % 128 == 0) {
        x = 0, y++;
      }
    }
  });
}