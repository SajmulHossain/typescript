// * generic contraint with keyof operator

{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicle;

  const person1: Owner = "bike";
  const person2: Owner2 = "car";

  const getPropertyValue = <
    X,
    Y extends keyof X /* 'name' | 'age' | 'address' */ 
  >(
    obj: X,
    key: Y
  ) => {
    return obj[key];
  };

  const user = {
    name: "Sajmul",
    age: 20,
    address: "ctg",
  };

  const car = {
    model: "totyota 100",
    brand: "totyoa",
  };

  const res2 = getPropertyValue(car, "model");

  const res1 = getPropertyValue(user, "name");
}
