// *utility type

{
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name" | "age">;

  // *omit

  type ContactInfo = Omit<Person, "name" | "age">;

  // * required

  type PersonRequired = Required<Person>;

  // *pertial ---> reverse of required  => optional

  type PertialPerson = Partial<Person>;

  // * readonly object

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "mr. m",
    age: 2000,
    contactNo: "34",
  };

  // person1.name = 'Sajmul';

  // console.log(person1.name);

  // *record

  // type MyObj = {
  //     a: string,
  //     b: string
  // }

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  const emptyObj : Record<string, unknown> = {}
 }
