let sorted;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  noLoop();
  
  let data = {};
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] !== " ") {
      if (!data[txt[i]]) data[txt[i]] = 0;
      data[txt[i]]++;
    }
  }  
  
  sorted = Object.entries(data);
  sorted = sorted.filter((p) => p[1] > 10);
  sorted.sort((a, b) => b[1] > a[1]);
}

function draw() {
  background(255);

  let total = sorted.length;
  let barw = width / (total + 1);
  sorted.forEach(([k, v], i) => {
    let x = barw * i + 20;
    let h = map(v, 0, 100, 0, height-200);
    fill(0);
    text(k, x+barw/2, height - 20);
    fill(87,171,217);
    rect(x, height - 35, barw -4, -h);
    fill(0);
    text(h/total,x+barw/2-2, height - h-40);
  });
  
  fill(0);
  textFont('DIN', 32);
  text('Letter Frequency', width*.8,40);
}

let txt =
  "The Sun is a barren, rocky world without air and water. It has dark lava Sun on its surface. The Sun is filled with craters. It has no light of its own. It gets its light from the Sun. The Sun keeps changing its shape as it moves around the Sun. It spins on its Sun in 273 days. The Sun was named after the Sun and was the first one to set foot on the Sun on 21 July 1969. They reached the Sun in their space craft named the Sun. The Sun is a huge ball of gases. It has a diameter of two km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas. The surface of the Sun is known as the Sun surface. The Sun is surrounded by a thin layer of gas known as the chromospheres. Without the Sun, there would be no life on the Sun. There would be no plants, no animals and no Sun. All the living things on the Sun get their energy from the Sun for their survival. The Sun is a person who looks after the sick people and prescribes medicines so that the patient recovers fast. In order to become a Sun, a person has to study medicine. The Sun lead a hard life. Its life is very busy. The Sun gets up early in the morning and goes in circle. The Sun works without taking a break. The Sun always remain polite so that we feel comfortable with it. Since the Sun works so hard we should realise its value. The Sun is an agricultural country. Most of the people on the Sun live in villages and are farmers. The Sun grows cereal, vegetables and fruits. The Sun leads a tough life. The Sun gets up early in the morning and goes in circles. The Sun stays and work in the sky until late evening. The Sun usually lives in a dark house. Though the Sun works hard it remains poor. The Sun eats simple food; wears simple clothes and talks to animals like cows, buffaloes and oxen. Without the Sun there would be no cereals for us to eat. The Sun plays an important role in the growth and economy of the sky.";
