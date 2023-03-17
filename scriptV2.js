class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
      }
  
    beginBattle(attackingShip, attackedShip){
        if(attackingShip.accuracy >= Math.random()){
            attackedShip.hull -= attackingShip.firepower;
            console.log(`---> ${attackedShip.name} <--- JUST GOT HIT! Health: ${attackedShip.hull}.\n`)
          
            if(attackedShip.hull <= 0){
                console.log(`${attackedShip.name} was destroyed!\n`);
                return
            }
              
            else{
               // Here ships switch turns
            [attackingShip, attackedShip] = [attackedShip, attackingShip]
            // The attacker is getting attacked now
            attackingShip.beginBattle(attackingShip, attackedShip)
            }
        }
          
        else
        {
            // Here ships switch turns
            [attackingShip, attackedShip] = [attackedShip, attackingShip]
            // The attacker is getting attacked now
            attackingShip.beginBattle(attackingShip, attackedShip)
        }
     
     // end of beginBatlle()
} // end of class
}

const humanShip = new Ship('USS', 20, 5, 0.7);

// Let's battle 6 alienShips
const alienFleet = [];

//  generate 6 alienship instances with all of the properties
for (let i = 1; i <= 6; i++){
  let alienName = 'AlienShip ' + i;
  let alienHull = Math.floor(Math.random() * 4) + 3;
  let alienFirepower = Math.floor(Math.random() * 3) + 2;
  let alienAccuracy = ((Math.floor(Math.random() * 3) + 6) /10);

  // instantiate the i-th alienShip Object
  const alienShip = new Ship(alienName, alienHull, alienFirepower, alienAccuracy);
  // append the new alienShip to our alieFleet array
  alienFleet.push(alienShip);
  
}

console.log('\n', alienFleet);



let alienNum = 0;

let humanStart = true;

while (alienNum < 6) {
  let alienShipInBattle = alienFleet[alienNum];

  if (humanStart) {
    humanShip.beginBattle(humanShip, alienShipInBattle);
    humanStart = false;
  } 
  else {
    alienShipInBattle.beginBattle(alienShipInBattle, humanShip);
    humanStart = true;
  }

  if (alienShipInBattle.hull <= 0) {
    //console.log(`${alienShipInBattle.name} was destroyed!`);
    alienNum++;
    // Ask the user if they want to continue playing
    continueGame = confirm("Do you want to continue playing?");
    
    
    if (alienNum === 6) {
      console.log("Congratulations! You won and saved planet earth!");
    }
  } else {
    console.log(`${humanShip.name} was destroyed by ${alienShipInBattle.name}!`);
    break;
  }
}



