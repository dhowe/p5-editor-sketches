let prevSec, millisRolloverTime; // adapted from Golan

function setup() {
  createCanvas(300, 300);
  millisRolloverTime = 0;
}

function draw() {
  background(235); 

  let H = hour();
  let M = minute();
  let S = second();

  // Compute the current millisecond time, checking if the second has rolled over
  // Note that this is more correct than using millis()%1000;
  if (prevSec != S) millisRolloverTime = millis();
  
  let mils = floor(millis() - millisRolloverTime);
  let timeString = "Time: " + (H%12) + ":" + nf(M,2) + ":" + nf(S,2) + ((H>12) ? "pm":"am");
  
  prevSec = S;
  
  noStroke();
  fill('black');
  text(timeString, 10, 25);
  text("Hour: "   + H, 10, 40);
  text("Minute: " + M, 10, 55);
  text("Second: " + S, 10, 70);
  text("Millis: " + mils, 10, 85);

  let hourBarWidth   = map(H, 0, 23, 0, width);
  let minuteBarWidth = map(M, 0, 59, 0, width);
  let secondBarWidth = map(S, 0, 59, 0, width);

  // Make a bar which *smoothly* interpolates across 1 minute.
  // We calculate a version that goes from 0...60,
  // but with a fractional remainder:
  let secondsWithNoFraction = S;
  let secondsWithFraction = S + (mils / 1000.0);
  let secondBarWidthChunky = map(secondsWithNoFraction, 0, 60, 0, width);
  let secondBarWidthSmooth = map(secondsWithFraction,   0, 60, 0, width);

  fill(40);
  rect(0, 100, hourBarWidth, 50);
  fill(80);
  rect(0, 150, minuteBarWidth, 50);
  fill(120);
  rect(0, 200, secondBarWidthChunky, 50);
  fill(160);
  rect(0, 250, secondBarWidthSmooth, 50);
}