function drawPeriod() {

  textFont(myFont1);
  let vS = createVector(0, height / 2);
  let vM = createVector(mouseX - width / 2, mouseY - height / 2);
  let angleBetween = vS.angleBetween(vM);
  let degreePeriod = floor(degrees(angleBetween).toFixed(2));
  let count = int(map(degreePeriod, -180, 180, 0, 24));
  fill(250);
  textSize(height / 72);
  text(periods[count], 0, -height / 32);

  let today = day();
  let tomonth = month();
  let mylines = splitTokens(lines[count % 24], "&");
  let tlength = textWidth(lines[count % 24]);
  
  fill(col);
  if (tlength >= 0.16 * height) {
    textSize(height / 88);
    text(mylines[0], 0, -4 + height / 128);
    text(mylines[1], 0, 12 + height / 128);
  } else {
    textSize(height / 84);
    text(lines[count % 24], 0, height / 128);
  }

  let an1 = (PI / 12) * [count % 24];
  let an2 = (PI / 6) * (tomonth - 6) + ((today - 22) * PI) / 182.625;
  push();
  rotate(an1);
  fill(250);
  text(date[count % 24], 0, -height / 4.3);
  pop();
  push();
  if (abs(an1 - an2) <= 0.1309) {
    fill(128, 94, 48);
  } else {
    fill(250);
  }
  rotate(an2);
  text(months[tomonth - 1] + " " + today, 0, -height / 4);
  pop();
}
