let skins = [];
let leftEyes = [];
let rightEyes = [];
let mouths = [];

let numSkins = 1;
let numLeftEyes = 2;
let numRightEyes = 2;
let numMouths = 2;

function preload() {
  skins[0] = loadImage("skinImages_0.png");

  leftEyes[0] = loadImage("leftEyeImages_0.png");
  leftEyes[1] = loadImage("leftEyeImages_1.png");

  rightEyes[0] = loadImage("rightEyeImages_0.png");
  rightEyes[1] = loadImage("rightEyeImages_1.png");

  mouths[0] = loadImage("mouthImages_0.png");
  mouths[1] = loadImage("mouthImages_1.png");
}

function setup() {
  createCanvas(768, 1024);
}

function draw() {
  background(220);
  drawFace(10, 10, 550, 750);
}

//画整张脸
function drawFace(x, y, w, h) {
  if (skins.length === 0 || !skins[0]) {
    fill(0);
    text("背景加载中 / 失败", 20, 20);
    return;
  }

  let skinImg = random(skins);
  image(skinImg, x, y, w, h);

  let leftEyeBaseX = x + w * 0.35;
  let rightEyeBaseX = x + w * 0.65;
  let eyesBaseY = y + h * 0.38;

  let mouthBaseX = x + w * 0.5;
  let mouthBaseY = y + h * 0.7;

  // 让它们在合理位置附近“抖动”一点（随机移动）
  let jitterEyeX = 20;
  let jitterEyeY = 10;
  let jitterMouthX = 25;
  let jitterMouthY = 15;

  drawEye(
    leftEyeBaseX + random(-jitterEyeX, jitterEyeX),
    eyesBaseY + random(-jitterEyeY, jitterEyeY),
    "left"
  );

  drawEye(
    rightEyeBaseX + random(-jitterEyeX, jitterEyeX),
    eyesBaseY + random(-jitterEyeY, jitterEyeY),
    "right"
  );

  drawMouth(
    mouthBaseX + random(-jitterMouthX, jitterMouthX),
    mouthBaseY + random(-jitterMouthY, jitterMouthY)
  );

  let list = side === "left" ? leftEyes : rightEyes;
  if (list.length === 0) return;

  let eyeImg = random(list);
  if (!eyeImg) return;

  // 随机缩放比例
  let s = random(0.6, 1.3);
  let ww = eyeImg.width * s;
  let hh = eyeImg.height * s;

  image(eyeImg, cx - w / 2, cy - h / 2, ww, hh);
}

function drawMouth(cx, cy) {
  if (mouths.length === 0) return;

  let mouthImg = random(mouths);
  if (!mouthImg) return;

  let s = random(0.8, 1.4);
  let w = mouthImg.width * s;
  let h = mouthImg.height * s;

  image(mouthImg, cx - w / 2, cy - h / 2, w, h);
}
