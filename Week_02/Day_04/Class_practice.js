// Create a Ninja class  
// add an attribute: name  
// add an attribute: health - give a default value of 100 
// add a attribute: speed - give a default value of 3  
// add a attribute: strength - give a default value of 3  
// add a method: sayName() - This should log that Ninja's name to the console  
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.  
// add a method: drinkSake() - This should add +10 Health to the Ninja



// example output
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "Ninja Hyabusa has joined the dojo"
ninja1.showStats();
// -> Ninja Hyabusa stats:\nHealth: 100\nSpeed: 3\nStrength: 3



// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom()
// copy the superSensei using spread

// example output
const super_sensei = new Sensei("Master Splinter");
const poser_sensei = new Sensei("Master sprinter");
super_sensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
super_sensei.showStats();
super_sensei.attack(poser_sensei)
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// BONUS 
// create an attack function on the sensei class...EXTRA BONUS check if the object attacking is a type of ninja
