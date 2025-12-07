let ws = [];
 
function setup() {
  createCanvas(400, 400);
  
  let w = {x:100, y:200 }; 
  ws.push(w);
  
  let z = ws[0];
  z.x = 10;
  
  print(ws)
}