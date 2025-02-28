let vehicle = {
  color: "purple",
  type: "minivan",
  registration: new Date("2017-01-03"),
  capacity: 7,
  yearsMade: [2007, 2018, 2021]
};

function setup() {
  createCanvas(400, 400);

  console.log(intersection([5, 10, 15, 20], [15, 1, 5, 7, 8])); // -> [5, 15]
  console.log(intersection([5, 10, 15, 20], [15, 1, 5], [5, 8])); // -> [5]
  console.log(intersection([5, 10, 15, 20], [15, 1, 5], [8, 5], [5])); // -> [5]
  console.log(intersection([10, 15, 20], [15, 1, 5], [8, 5], [5])); // -> [5]
}

function intersection(...arrays) {
  return arrays.reduce((sofar, arr) => {
    return arr.filter((a) => sofar.includes(a));
  });
}
