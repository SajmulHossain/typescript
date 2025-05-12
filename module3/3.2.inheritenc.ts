// * inheritence

{
  class CommonClass {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(hour: number) {
      console.log(`${this.name} sleeps ${hour} hours`);
    }
  }

  class Student extends CommonClass {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        super(name, age, address);
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(hour: number) {
      console.log(`${this.name} sleeps ${hour} hours`);
    }
  }

  const student1 = new Student("mr. student", 20, "mirsarai");

  class Teacher extends CommonClass {
    // name: string;
    // age: number;
    // address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
        super(name, age, address)
    //   this.name = name;
    //   this.age = age;
    //   this.address = address;
      this.designation = designation;
    }

    takeClass(no: number) {
      console.log(`${this.name} takes ${no} class a day`);
    }
  }

  const teacher1 = new Teacher("mr. teacher", 40, "bangladesh", "faculty");
  teacher1.getSleep(3)
}
