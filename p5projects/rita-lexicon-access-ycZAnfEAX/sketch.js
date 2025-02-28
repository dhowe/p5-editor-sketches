function setup() {
  
  let dict = RiTa.lexicon().data;
  
  console.log(RiTa.hasWord('aband')); // false: not in dict
  
  // add a custom word/part-of-speech
  dict['aband'] = ["ah b-ae1-n-d", "nn"];
  
  console.log(RiTa.hasWord('aband')); // true: now exists in dict
  
  console.log(RiTa.hasWord('abandon')); // true: exists in dict
  
  // remove word from dict
  delete dict['abandon']; 
  
  console.log(RiTa.hasWord('abandon')); // false: no longer in dict
}