let lines;
let rg;
let font, sound;
let counter1 = 0;
let monkey_no = 0;
let crying_counter = 0;
let should_change = false;
let should_cry = false;
let y_open, y_half, y_closed, b_open, b_half, b_closed;
let y_t = [];
let b_t = [];
let current_img;
let current_eye_c = 'y';
let crying_trigger = [];
let redtext_trigger = [];
let bigtext_trigger = [];
let redtext_list = [];
let bigtext_list = [];
let checked_monkey = [];
let loaded = false;
let t_s = 18

function preload() {
  font = loadFont("carbon_type.ttf");
  sound = loadSound("typewriter.mp3");
  sound.rate(2);
  //A font by Vic Fieger and a sound from freesound.org by pakasit21
  y_open = loadImage("y_open.jpg");
  y_half = loadImage("y_half.jpg");
  y_closed = loadImage("y_closed.jpg");
  b_open = loadImage("b_open.jpg");
  b_half = loadImage("b_half.jpg");
  b_closed = loadImage("b_closed.jpg");
  for (let i = 0; i < 7; i++) {
    let tem1 = "y_tear" + str(i + 1) + ".jpg";
    let tem2 = "b_tear" + str(i + 1) + ".jpg";
    y_t[i] = loadImage(tem1);
    b_t[i] = loadImage(tem2);
  }
  //something I draw
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(0);
  textFont(font);
  textSize(t_s);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  fill(255);
  noStroke();
  current_img = y_open;
  rg = new RiGrammar();
  rg.loadFrom("grammar.json", rg_ready);
  lines = ["Click", "To", "Pick One Ape's Work", "To Check"];
  crying_trigger = ["tear", "cry", "sadly", "mourn", "sob", "crying", "sobing", "Sadly,", "tear,", "sad", "tears"];
  redtext_trigger = ["blood", "red", "rose", "Rosy", "rosy", "Red", "roses"];
  bigtext_trigger = ["big", "huge", "oversize", "large", "Big", "Large", "Huge"];
}

function draw() {
  background(0, 150);
  let img_y = height / 2 - current_img.height / 4
  image(current_img, width / 2, img_y, current_img.width / 2, current_img.height / 2);
  fill(255);
  if (should_change) {
    if (counter1 <= 24) {
      redtext_list = [];
      bigtext_list = [];
      let output = rg.expand();
      let tem = output.split("%");
      for (let i = 0; i < lines.length; i++) {
        lines[i] = tem[i];
        for (let j = 0; j < redtext_trigger.length; j++) {
          let tem = split(lines[i], ' ');
          for (let k = 0; k < tem.length; k++) {
            if (tem[k] == redtext_trigger[j]) {
              redtext_list.push([i, k]);
            }
          }
        }
        for (let j = 0; j < bigtext_trigger.length; j++) {
          let tem = split(lines[i], ' ');
          for (let k = 0; k < tem.length; k++) {
            if (tem[k] == bigtext_trigger[j]) {
              bigtext_list.push([i, k]);
            }
          }
        }
      }
      monkey_no = int(random(100000));
      norepeat();
      blinking();
    } else {
      if (current_eye_c == 'y') {
        current_eye_c = 'b';
      } else if (current_eye_c == 'b') {
        current_eye_c = 'y';
      }
      for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < crying_trigger.length; j++) {
          let tem = split(lines[i], ' ');
          for (let k = 0; k < tem.length; k++) {
            if (tem[k] == crying_trigger[j]) {
              should_cry = true;
              break;
            }
          }
        }
      }
      let tem = split(lines[0], " ");
      checked_monkey.push([monkey_no, tem[2]]);
      should_change = false;
      sound.stop();
    }
    counter1++;
  }
  if (should_cry) {
    crying();
  }
  for (let i = 0; i < lines.length; i++) {
    let redline = false;
    let bigline = false;
    for (let j = 0; j < redtext_list.length; j++) {
      let line_index = redtext_list[j][0];
      let word_index = redtext_list[j][1];
      if (i == line_index) {
        redline = true;
        let tem = split(lines[i], ' ');
        let space_num = tem[word_index].length;
        let space = [];
        for (let l = 0; l < space_num; l++) {
          space.push(' ');
        }
        let new_tem = concat(concat(tem.slice(0, word_index), join(space, "")), tem.slice(word_index + 1, tem.length));
        let new_line = join(new_tem, ' ');
        text(new_line, width / 2, height / 2 + t_s + line_index * 60);
        let w = textWidth(join(concat(tem.slice(0, word_index), ''), ' '));
        let w2 = textWidth(new_line);
        push();
        textFont(font);
        textAlign(LEFT);
        textSize(18);
        fill(255, 50, 50);
        noStroke();
        text(tem[word_index], (width - w2) / 2 + w, height / 2 + t_s + i * 60);
        pop();
      }
    }
    for (let j = 0; j < bigtext_list.length; j++) {
      let line_index = bigtext_list[j][0];
      let word_index = bigtext_list[j][1];
      if (i == line_index) {
        bigline = true;
        let tem = split(lines[i], ' ');
        let space_num = tem[word_index].length * 1.5;
        let space = [];
        for (let l = 0; l < space_num; l++) {
          space.push(' ');
        }
        let new_tem = concat(concat(tem.slice(0, word_index), join(space, "")), tem.slice(word_index + 1, tem.length));
        let new_line = join(new_tem, ' ');
        text(new_line, width / 2, height / 2 + t_s + line_index * 60);
        let w = textWidth(join(concat(tem.slice(0, word_index), ''), ' '));
        let w2 = textWidth(new_line);
        push();
        textFont(font);
        textAlign(LEFT);
        textSize(1.5 * t_s);
        noStroke();
        text(tem[word_index], (width - w2) / 2 + w, height / 2 + t_s + i * 60);
        pop();
      }
    }
    if (!bigline && !redline && i != 0) {
      text(lines[i], width / 2, height / 2 + t_s + i * 60);
    } else if (i == 0) {
      push();
      //textSize(20);
      text(lines[i], width / 2, height / 2 + t_s + i * 60);
      pop();
    }
  }
  // text(lines[0], width / 2, 50);
  // text(lines[1], width / 2, 90);
  // text(lines[2], width / 2, 130);
  // text(lines[3], width / 2, 170);
}

function mousePressed() {
  if (!sound.isPlaying() && loaded) {
    should_change = true;
    should_cry = false;
    crying_counter = 0;
    counter1 = 0;
    sound.play();
  }
}

function blinking() {
  if (current_eye_c == 'y') {
    if (counter1 < 6) {
      current_img = y_half;
    } else if (counter1 < 12) {
      current_img = y_closed;
    } else if (counter1 < 18) {
      current_img = b_half;
    } else if (counter1 < 24) {
      current_img = b_open;
    }
  }

  if (current_eye_c == 'b') {
    if (counter1 < 6) {
      current_img = b_half;
    } else if (counter1 < 12) {
      current_img = b_closed;
    } else if (counter1 < 18) {
      current_img = y_half;
    } else if (counter1 < 24) {
      current_img = y_open;
    }
  }
}

//when the gennerated text contains certain worlds, crying animation play
function crying() {
  if (current_eye_c == 'y') {
    if (crying_counter < 6) {

    } else if (crying_counter < 12) {
      current_img = y_t[0];
    } else if (crying_counter < 18) {
      current_img = y_t[1];
    } else if (crying_counter < 24) {
      current_img = y_t[2];
    } else if (crying_counter % 24 < 6) {
      current_img = y_t[3];
    } else if (crying_counter % 24 < 12) {
      current_img = y_t[6];
    } else if (crying_counter % 24 < 18) {
      current_img = y_t[4];
    } else if (crying_counter % 24 >= 18) {
      current_img = y_t[5];
    }
  } else if (current_eye_c == 'b') {
    if (crying_counter < 6) {

    } else if (crying_counter < 12) {
      current_img = b_t[0];
    } else if (crying_counter < 18) {
      current_img = b_t[1];
    } else if (crying_counter < 24) {
      current_img = b_t[2];
    } else if (crying_counter % 24 < 6) {
      current_img = b_t[3];
    } else if (crying_counter % 24 < 12) {
      current_img = b_t[6];
    } else if (crying_counter % 24 < 18) {
      current_img = b_t[4];
    } else if (crying_counter % 24 >= 18) {
      current_img = b_t[5];
    }
  }
  crying_counter++;
}

function rg_ready() {
  loaded = true;
}

function line1w5(n) {
  if (n % 10 == 1 && n % 100 != 11) {
    return "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    return "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    return "rd";
  } else {
    return "th";
  }
}

function recheck_monkeys() {
  if (checked_monkey.length > 99) {
    let tem = checked_monkey.reverse();
    tem.pop();
    checked_monkey = tem.reverse();
  }
}

function norepeat() {
  let tem = split(lines[0], ' ');
  for (let i = 0; i < checked_monkey.length; i++) {
    while (monkey_no == checked_monkey[i][0] && tem[2] == checked_monkey[i][1]) {
      monkey_no = int(random(100000));
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}