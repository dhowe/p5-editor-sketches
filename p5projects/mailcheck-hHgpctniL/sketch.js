let invalid = [
  "J3536en",
  "marco@gmail",
  "{}@aol.com",
  "Dan435iel",
  "Wing@-@#$",
];

let valid = [
  "jake@whitenoise.com",
  "marco@gmail.com",
  "fuzz@gmail.com",
  "marco47@mail.com.hk",
  "marco47@mail.com.hk",
];

let re = /[0-9a-zA-Z]+@[0-9a-zA-Z]+(\.[0-9a-zA-Z]+)+/;

function setup() {
  noCanvas();
  
  // should succeed
  for (let i = 0; i < valid.length; i++) {
    if (re.test(valid[i])) {
      console.log("OK");
    } else {
      console.log("FAIL");
    }
  }

  // should fail
  for (let i = 0; i < invalid.length; i++) {
    if (re.test(invalid[i])) {
      console.log("FAIL");
    } else {
      console.log("OK");
    }
  }
}
