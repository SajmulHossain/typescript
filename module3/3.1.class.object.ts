/**
 * *class
 */

{
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // *!parameter porperties

    constructor(public name: string,public species: string, public sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Germer", 'dog', 'geu geu');
  console.log(dog);
  dog.makeSound();
}
