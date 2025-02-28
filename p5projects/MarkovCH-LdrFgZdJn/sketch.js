let text = '家 安 春 夢 家 安 春 夢 ！ 家 安 春 夢 德 安 春 夢 ？ 家 安 春 夢 安 安 春 夢 。';

function setup() {
  createCanvas(400, 400);
  console.log(RiTa.VERSION);
  let sentArray = text.match(/[^，；。？！]+[，；。？！]/g);
  let rm = new RiTa.Markov(4);
  rm.addSentences(sentArray);
  let result = rm.generate({ count: 5, startTokens: '家' });
  result.forEach((r, i) => text(r, 200, i * 100 + 50));
}