  let sound;

  function preload(){
    sound = loadSound("beat.wav");
  }

  function setup(){
    createCanvas(700, 200);
    background(0,255,0);
    sound.play();
  }