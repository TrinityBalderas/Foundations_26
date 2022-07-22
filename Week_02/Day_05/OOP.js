//ENCAPSULATION
let power_level = 9000
let times_almost_died = 4
let base_form_level = 2

const get_power_level = (power_level, times_almost_died, base_form_level) => {
    return power_level * ( times_almost_died * base_form_level )
}

let saiyan = {
    power_level: 9000,
    overtime: 10,
    rate: 20,

    get_power_level_method: () => {
        return this.power_level * ( this.times_almost_died * this.base_form_level )
    }
}
//ABSTRACT
class Animal {
    constructor() {
        if (this.constructor == Animal) {
          throw new Error("Abstract classes can't be instantiated.");
        }
      }
    
      say() {
        throw new Error("Method 'say()' must be implemented.");
      }
    
      eat() {
        console.log("eating");
      } 
}
class Cat extends Animal {
    say() {
      console.log("meow");
    }
  }
class Jellyfish extends Animal {
    say() {
        console.log("....");
    }
}

new Cat().eat()
new Jellyfish().eat()
//POLYMORPHISM
//cat and jellyfish are both animals but behave in different ways
new Jellyfish().say()
//jellyfish dont speak or at least what I know of

