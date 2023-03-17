// Create a ship object for
const humanShip = {name: 'USS Assembly', hull: 5, firepower: 5, accuracy: .7};

class AlienShip {
    constructor()
    {
        //alien = ['Ship 1', 'Ship 2', 'Ship 3', 'Ship 4', 'Ship 5', 'Ship 6'];
        // assign any number between 3 & 6 to this.hull
        this.hull = Math.floor(Math.random() * 4) + 3;

        //assign any number between between 2 and 4 to this.firepower
        this.firepower = Math.floor(Math.random() * 3) + 2;

        // assign any number between between  0.6 and 0.8 to this.accuracy
        this.accuracy = ((Math.floor(Math.random() * 3) + 6) /10);
    }

    // return my properties - this allows me to keep checking the values of my properties
    getStatus(){
        console.log(`Hull: ${this.hull}, firepower: ${this.firepower}, Accuracy: ${this.accuracy}`)
    }

    doAttack(){
        console.log(`THE ALIEN SHIP ATTACKED YOU.`)
    }
}

const testAlien = new AlienShip();
testAlien.getStatus()

// battle 
function BattleBegins() {
// Attack Alien
while( ( Math.floor(Math.random() * 3) + 5)/10 >=  humanShip.accuracy)
{
    testAlien.hull -= humanShip.firepower;
    if(testAlien.hull <= 0){
        console.log('Alien Ship Is Destroyed!')
        return;
    }

}

// Alien Attacking
while(((Math.floor(Math.random() * 3) + 6) /10) >=  testAlien.accuracy)
{
    humanShip.hull -= testAlien.firepower;
    if(humanShip.hull <= 0){
        console.log('Not Good Our SpaceShip Is Destroyed!')
        return;
    }
}

return BattleBegins();

}

BattleBegins();