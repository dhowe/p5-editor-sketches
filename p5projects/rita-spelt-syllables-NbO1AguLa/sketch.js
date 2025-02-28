function setup() {
  
  let dict = RiTa.lexicon().data;
   
  // add custom phonemes for word
  dict['abandon'] = ["a ban don1", "nn"];
    
  console.log(RiTa.analyze('abandon'));
}