let tests = [
  "", false,
  "blah blah blah", false,
  "the dogged perfumery fell apart", false,
  "I have been one acquainted with the night.", true,
  'Arise, fair sun, and kill the envious moon', true,
  'Who is already sick and pale with grief', true
];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < tests.length; i += 2) {
    let result = matchStresses(tests[i]);
    if (result === tests[i + 1]) {
      console.log('OK');
    } else {
      console.log('FAIL: ', tests[i], );
    }
  }
}

function matchStresses(tweet) {
  // turns tweet into the getStresses format
  let strs = RiTa.getStresses(tweet);
  let re = /\d\d\d\d\d\d\d\d/;
  //removes all spaces and slashes
  for (let i = 0; i < strs.length; i++) {
    let result = strs[i].match(re);
    if (result) {
      console.log(result);
      strs[i] = strs[i].replace(result[0], result[1])
    }
  }
  let requirement = '0101010101'.split('');
  return (strs === requirement);
}