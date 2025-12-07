let pets = {
  cats: 9,
  dogs: 6,
  fish: 90,
  gerbel: 1,
};

function setup() {
  createCanvas(400, 400);
  option1();
  option2();
  option3();
}

function option1() {
  let animals = Object.keys(pets);
  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    console.log(animal, pets[animal]);
  }
}

function option2() {
  for (let pet in pets) {
    console.log(pet, pets[pet]);
  }
}

function option3() {
  let entries = Object.entries(pets);
  entries.forEach(keyval => {
    let pet = keyval[0];
    let count = keyval[1];
    console.log(pet, count);
  });
}
