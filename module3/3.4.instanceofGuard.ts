// * instance of guard

{
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`I am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am barking!");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log("I am meawing!");
    }
  }

  //   * smart way to handle intance of
  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (/*animal instanceof Dog */ isDog(animal)) {
      animal.makeBark();
    } else if (/*animal instanceof Cat */ isCat(animal)) {
      animal.makeMeaw();
    }
  };

  const dog = new Dog("Drogba Vaiya", "dog");
  const cat = new Cat("Cat vai", "cat");

  getAnimal(cat);
}
