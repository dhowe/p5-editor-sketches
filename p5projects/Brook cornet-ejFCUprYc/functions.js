function squarcle(x, y, sz) {
  rectMode(CENTER);
  circle(x, y, sz);
  square(x, y, sz);
  square(x, y, (sz / 2) * sqrt(2));
}