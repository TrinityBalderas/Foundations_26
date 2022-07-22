// Create a Ninja class
// add an attribute: name
// add an attribute: health - give a default value of 100
// add a attribute: speed - give a default value of 3
// add a attribute: strength - give a default value of 3
// add a method: sayName() - This should log that Ninja's name to the console
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
// add a method: drinkSake() - This should add +10 Health to the Ninja

class Ninja {
    constructor ( name, health = 100, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }


    sayName(){
        console.log(`${this.name}`)
    }
    showStats(){
        console.log(`Stats - name: ${this.name}, health: ${this.health}, speed: ${this.speed}, strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10
    }
}


// example output
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
const ninja2 = new Ninja("Naruto")
const ninja0 = new Ninja("Sasuke")
ninja2.sayName()

// -> "Ninja Hyabusa has joined the dojo"
ninja1.showStats();
// -> Ninja Hyabusa stats:\nHealth: 100\nSpeed: 3\nStrength: 3


// might be on assessment idk
// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom()
// copy the superSensei using spread

class Sensei extends Ninja {
    constructor (name, wisdom = 10,strength = 10) {
        super(name, 200, 10, strength)
        // just calling the parent constructor cuz we wrote all that code super() 
        this.wisdom = wisdom
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this
    }

    attack(target) {
        //console.log("$$$$$$$", this);
        //console.log("******", target);
        if (target instanceof Ninja) {
            target.health -= this.strength *5
        //this.showStats()
    }
}

}
// example output
const super_sensei = new Sensei("Master Splinter");
const super_senseiClone = {...super_sensei}
const poser_sensei = new Sensei("Master sprinter", 200, 3, 4, 10);
super_sensei.speakWisdom().speakWisdom()
super_sensei.attack(poser_sensei)
poser_sensei.showStats();
// function fdsa(...args) // takes arguments in an array
// example output
// const super_sensei = new Sensei("Master Splinter");
// const poser_sensei = {...super_sensei}

// super_sensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."

// super_sensei.attack(poser_sensei)
// poser_sensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// BONUS
// create an attack function on the sensei class...EXTRA BONUS check if the object attacking is a type of ninja
