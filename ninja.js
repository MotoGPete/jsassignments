class Ninja {
    constructor(ninjaname, health, speed, strength) {
    this.ninjaname = ninjaname;
    this.health = 0;
    this.speed = 3
    this.strength = 3
    }

    sayName(){
        console.log(this.ninjaname);

    }

    showStats(){
        console.log(this.ninjaname);
        console.log(this.strength);
        console.log(this.speed);
        console.log(this.health);
    }
    drinkSake(){
        this.health+=10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();