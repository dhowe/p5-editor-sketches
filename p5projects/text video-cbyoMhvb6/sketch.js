let rectW, rectH, lett = 0, txtPos = 0;
let txt = 'That warning, published on a freewheeling online message board in October 2017, was the beginning of the movement now known as QAnon. Paul Furber was its first apostle. The outlandish claim made perfect sense to Mr. Furber, a South African software developer and tech journalist long fascinated with American politics and conspiracy theories, he said in an interview. He still clung to “Pizzagate,” the debunked online lie that liberal Satanists were trafficking children from a Washington restaurant. He was also among the few who understood an obscure reference in the message to “Operation Mockingbird,” an alleged C.I.A. scheme to manipulate the news media. As the stream of messages, most signed only “Q,” grew into a sprawling conspiracy theory, the mystery surrounding their authorship became a central fascination for its followers — who was the anonymous Q? Now two teams of forensic linguists say their analysis of the Q texts shows that Mr. Furber, one of the first online commentators to call attention to the earliest messages, actually played the lead role in writing them. Sleuths hunting for the writer behind Q have increasingly overlooked Mr. Furber and focused their speculation on another QAnon booster: Ron Watkins, who operated a website where the Q messages began appearing in 2018 and is now running for Congress in Arizona. And the scientists say they found evidence to back up those suspicions as well. Mr. Watkins appears to have taken over from Mr. Furber at the beginning of 2018. Both deny writing as Q. The studies provide the first empirical evidence of who invented the toxic QAnon myth, and the scientists who conducted the studies said they hoped that unmasking the creators might weaken its hold over QAnon followers. Some polls indicate that millions of people still believe that Q is a top military insider whose messages have revealed that former President Trump will save the world from a cabal of “deep state” Democratic pedophiles. QAnon has been linked to scores of violent incidents, many of the attackers who stormed the Capitol last year were adherents, and the F.B.I. has labeled the movement a potential terrorist threat.';

let capture;

function setup() {
  createCanvas(600, 300);
  textFont('courier', 9);
  noStroke();
  textAlign(LEFT, TOP);
  frameRate(5);
  
  capture = createCapture(VIDEO)
  capture.size(64,32);
  capture.hide();
  
  rectW = width / capture.width;
  rectH = height / capture.height;
}

function draw() {
  background(0);

  capture.loadPixels();

  lett = txtPos;
  for (let i = 0; i < capture.height; i++) {
    for (let j = 0; j < capture.width; j++) {

      // get index into 1D pixel array
      let idx = (j + i * capture.width) * 4;

      // grab colors (faster than get() function)
      let r = capture.pixels[idx + 0];
      let g = capture.pixels[idx + 1];
      let b = capture.pixels[idx + 2];

      // weak approx of brightness
      let bw = (r + g + b) / 3;

      fill(bw);
      text(txt[lett], j * rectH, i * rectW+2);

      lett = ((lett + 1) + txt.length) % txt.length;
    }
  }
  
  txtPos = (txtPos + 1) % txt.length;
}