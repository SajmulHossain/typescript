/**
 * * never type
 * * nullable
 * * unknown
 */

{
  const searchName = (value: string | null) => {
    // ? ---> this is nullable type
    if (value) {
      console.log("Searching.....");
    } else {
      console.log("There is nothing to search!");
    }
  };

  //   searchName(null);

  const getSpeed = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} m/s`);
    }

    if (typeof value === "string") {
      const [valueInNumber, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} m/s`);
    }
  };

  //   getSpeed('100 kmh')

  //   ? never type

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("oi kire oi kire");
}
