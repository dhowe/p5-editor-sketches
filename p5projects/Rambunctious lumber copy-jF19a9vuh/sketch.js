let url = "https://www.googleapis.com/customsearch/v1?";

// let apikey = "AIzaSyB1IYJnFUXyIMAEIJ8SyIohph0b6nejl9o ";
// let engineID = "c840315ff9d69e44b";
//let apikey = "AIzaSyDvhIh52fXXQ3m_mLpvP0GvaaSpmDoJI50";
//let engineID = "670446ea56b7fab18";
 let apikey = "AIzaSyAmsfgj5jQfnJfYj0xMHFvJpwj1PlTIPQE";
let engineID = "63ae06b28736c18e7";
// let apikey = "AIzaSyAgzGr7nzUE-wCTYp4TLMoh2ubTN4byoY4";
// let engineID = "c840315ff9d69e44b";
// let apikey = "AIzaSyA529trH16EnA37R0nNo6qFFJK54ojRPkY";
// let engineID = "03f266edec2fc606c";
// let apikey = "AIzaSyBWCuTmofdbTOwB9358N-aQkIwItl_vCZQ";
// let engineID = "6feb81ca0ba515a55";
// let apikey = "AIzaSyCLcZDqnOmPpX8-Pf7TR28fj6YjMSWKSBs";
// let engineID = "4028e35084414b15b";
// let apikey = "AIzaSyBaYj7GaerTABP6K5czbIUbyNs7PBTHww4";
// let engineID = "e2eff474f4d03028e";
// let apikey = "AIzaSyDYtl5nKKRVOiw1ZvPSDL8C-eG1MucnbK0";
// let engineID = "7330e4c6b17c95a84";
// let apikey = "AIzaSyAsgInMXeSNF7qC--OLWm-ClJ6Q_6Lfz-g";
// let engineID = "c72afe191de8e525b";
// let apikey = "AIzaSyD2v66zXm9IbqY8VEKTd-UZ9arqTUCPGPo";
// let engineID = "43c2f4e5120c21ba3";
// let apikey = "AIzaSyCLg44bFTvceipFCkrcm2DXASGKHMDFGDs";
// let engineID = "3addbf29adbc45370";
// let apikey = "AIzaSyDa0yQWZVcnm8kyG8K4GL1DgR-L1-Mh3jg";
// let engineID = "5a21d360644fd2500";
// let apikey = "AIzaSyC7n9kH6EDfXvA-8vwpd3dchIWrJ_d0bXM";
// let engineID = "7136e3f2c4d3e75c3";

let filterOn = "1";
let exactTerms = "abstract+expressionism";
let hq = "painting";
let imgColorType = "color";
let imgSize = "huge";
let orTerms = "artwork";
let safe = "active";
let query = [];
// let query2 = "rauschenberg+white+painting";
let searchType = "image";

let jsons = [];
// let json2;
let items = [];
let times = 0;
let itemsIndex1 = 0;
let itemsIndex2 = 1;
let jsonsIndex = 0;
let jsonsMaxIndex = 4;
let refreshIndex = 0;

let numParticles = 100;
let particles1 = [];
let particles2 = [];

function preload() {
  query = [
    "cy+twombly",
    "mark+rothko",
    // "jackson+pollock",
    "robert+rauschenberg",
    "willem+de+kooning"
  ];

  let request1;
  for (let i = 0; i < jsonsMaxIndex; i++) {
    request1 =
      url +
      "key=" +
      apikey +
      "&cx=" +
      engineID +
      "&filter=" +
      filterOn +
      "&exactTerms=" +
      exactTerms +
      "&hq=" +
      hq +
      "&=imgColorType" +
      imgColorType +
      "&imgSize=" +
      imgSize +
      "&=orTerms" +
      orTerms +
      "&=safe" +
      safe +
      "&searchType=" +
      searchType +
      "&q=" +
      query[i];

    jsons[i] = loadJSON(request1);
    console.log(request1);
  }

  //   let request2;
  //   request2 =
  //     url +
  //     "key=" +
  //     apikey +
  //     "&cx=" +
  //     engineID +
  //     "&filter=" +
  //     filterOn +
  //     "&imgSize=" +
  //     imgSize +
  //     "&=safe" +
  //     safe +
  //     "&searchType=" +
  //     searchType +
  //     "&q=" +
  //     query2;

  //   json2 = loadJSON(request2);
}

function setup() {
  cnv = createCanvas(1000, 700);
  background(255);

  loadImage(jsons[0].items[itemsIndex1].image.thumbnailLink, gotImage1);
  loadImage(jsons[0].items[itemsIndex2].image.thumbnailLink, gotImage2);
}

function mouseClicked() {
  save(cnv, "myCanvas.jpg");
}

function draw() {

  if (frameCount - times > 5000) {
    times = frameCount;

    particles1 = [];
    particles2 = [];
    
    refreshIndex++;
    if (refreshIndex == 3) {
      background(255);
      refreshIndex = 0;
    }

    itemsIndex1 += 2;
    itemsIndex2 += 2;

    console.log(
      "itemsIndex1:" + itemsIndex1 + " " + "itemsIndex2:" + itemsIndex2
    );

    loadImage(
      jsons[jsonsIndex].items[itemsIndex1].image.thumbnailLink,
      gotImage1
    );

    loadImage(
      jsons[jsonsIndex].items[itemsIndex2].image.thumbnailLink,
      gotImage2
    );

    if (itemsIndex1 >= 8) {
      itemsIndex1 = -2;
      itemsIndex2 = -1;
      jsonsIndex++;
      if (jsonsIndex >= jsonsMaxIndex) {
        jsonsIndex = 0;
      }
    }
  }

  if (particles1.length != 0) {
    for (let a of particles1) {
      a.update();
            a.show();

      a.edges();
      for (let other of particles1) {
        if (a !== other) {
          a.intersect(other);
        }
      }
    }
  }

  if (particles2.length != 0) {
    for (let a of particles2) {
      a.update();
            a.show();

      a.edges();
      for (let other of particles2) {
        if (a != other) {
          a.intersect(other);
        }
      }
    }
  }
}

function gotImage1(img) {
  img.loadPixels();

  for (let i = 0; i < numParticles; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 100);
    let px = floor(x / (width / img.width));
    let py = floor(y / (height / img.height));
    let col = img.get(px, py);
    if (!i) console.log(col);
    let c = color(col[0], col[1], col[2], 32);
    particles1[i] = new Particle1(i, x, y, r, c);
  }
  // image(
  //   img,
  //   0,
  //   0,
  //   jsons[0].items[0].image.thumbnailWidth,
  //   jsons[0].items[0].image.thumbnailHeight
  // );
}

function gotImage2(img) {
  img.loadPixels();

  for (let i = 0; i < numParticles * 0.8; i++) {
    let x = random(width);
    let y = random(height);
    let r = randomGaussian(50, 100);
    let px = floor(x / (width / img.width));
    let py = floor(y / (height / img.height));
    let col = img.get(px, py);
    let c = color(col[0], col[1], col[2], 32);
    particles2[i] = new Particle2(i, x, y, r, c);
  }
  // image(img, 0, 120, 100, 100);
}

// function gotImage2(img) {
//   // let cols = commonColorsFromImage(img);
//   for (let i = 0; i < numParticles; i++) {
//     let x = random(width);
//     let y = random(height);
//     let r = random(10, 40);
//     let phi = random(TWO_PI);
//     let px = floor(x / (width / img.width));
//     let py = floor(y / (height / img.height));
//     let col = img.get(px, py);
//     let c = color(col[0], col[1], col[2], 255);
//     particles1[i] = new Particle(x, y, phi, r, c);
//   }
//   // image(img, 0, 0);
// }

// get the 100 most common colors from the image
// function commonColorsFromImage(img) {
//   let cols = {};
//   // collect all pixel colors and counts
//   for (let j = 0; j < img.height; j++) {
//     for (let i = 0; i < img.width; i++) {
//       let col = img.get(i, j);
//       if (!cols.hasOwnProperty(col)) cols[col] = 0;
//       cols[col]++;
//     }
//   }
//   // return the most common 100 colors
//   return Object.entries(cols)
//     .sort(([, a], [, b]) => b - a)
//     .splice(0, numParticles).map(c => color(...c[0].split(',').map(a => int(a))));
// }