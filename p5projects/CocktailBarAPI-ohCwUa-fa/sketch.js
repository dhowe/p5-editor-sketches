let txt = 'My date took me to a cocktail bar. I watched the bartender make our %DRINK%. He added';
let json;

function preload() {
  json = loadJSON('https://www.thecocktaildb.com/api/json/v1/1/random.php');
}

function setup() {
  createCanvas(600, 600);
  background(255);
  textFont('Georgia', 24);
 
  let drink = json.drinks[0];
  let stuff = '';
  txt = txt.replace('%DRINK%', drink.strDrink+'s');
  for (let i = 0; i < 15; i++) {
    if (drink['strIngredient'+i]) {
      stuff += drink['strIngredient'+i].toLowerCase() + ', ';
    }
  }
  stuff = stuff.replace(/, $/,'.')
  text(txt+' '+stuff, 20, 20, 500,500);
  loadImage(drink.strDrinkThumb, i => 
            image(i, 20, 150, 400,400))
  console.log(drink);
  
}

