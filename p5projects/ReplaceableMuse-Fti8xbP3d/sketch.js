let txt = "Last Wednesday we decided to visit the zoo. We arrived the next morning after we breakfasted, cashed in our passes and entered. We walked toward the first exhibits. I looked up at a giraffe as it stared back at me. I stepped nervously to the next area. One of the lions gazed at me as he lazed in the shade while the others napped. One of my friends first knocked then banged on the tempered glass in front of the monkey cage. They howled and screamed at us as we hurried to another exhibit where we stopped and gawked at plumed birds. After we rested, we headed for the petting zoo where we petted wooly sheep who only glanced at us but the goats butted each other and nipped our clothes when we ventured too near their closed pen. Later, our tired group nudged their way through the crowded paths and exited the turnstiled gate. Our car bumped, jerked and swayed as we dozed during the relaxed ride home."

function setup() {
  createCanvas(400, 400);
  textFont("Georgia",14);
  update();
}

function draw() {
  background(220);
  text(txt, 20,20,360,360)
  noLoop();
}

function update() {

  let words = RiTa.tokenize(txt); // split into words

  // loop from a random spot
  let r = Math.floor(Math.random()*words.length);
  for (let i = r; i < words.length + r; i++) {

    let idx = i % words.length;
    let word = words[idx].toLowerCase();
    if (word.length < 3) continue; // len >= 3

    // find related words
    let pos = RiTa.tagger.allTags(word)[0];
    let rhymes = RiTa.rhymes(word, { pos });
    let sounds = RiTa.soundsLike(word, { pos });
    let spells = RiTa.spellsLike(word, { pos });
    let similars = [...rhymes, ...sounds, ...spells];

    // only words with 2 or more similars
    if (similars.length < 2) {
      console.log("No sims for " + word);
      continue;
    }

    // pick a random similar
    let next = RiTa.random(similars);

    if (next.includes(word) || word.includes(next)) {
      continue;                     // skip substrings
    }

    if (/[A-Z]/.test(words[idx][0])) {
      next = RiTa.capitalize(next); // keep capitals
    }

    console.log("replace(" + idx + "): " + word + " -> " + next);
    words[idx] = next;             // do replacement
    break;
  }
  
  txt = RiTa.untokenize(words);
  draw();
  setTimeout(update, 2000);
}