function setup() {
  createCanvas(600, 400);

  let data = { Jen:'Coke', Jerry:'Rice', Heiden:'Hat', Daniel:'Goat' };

  let message = "Dear User,\nThank you for the present.\nSincerely, Jacky";

  background(255);
  textSize(18);
  Object.keys(data).forEach((entry,i)=> {
    let txt = message.replace("User", entry);
    txt = message.replace("present", data[entry].toLowerCase());
    text(txt, 30, 30 + i * 100);
  });
    
}
