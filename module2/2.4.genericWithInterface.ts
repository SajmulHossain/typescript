/**
 * *generic type with interface
 */

{
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike? : X,
  }

  const poorDeveloper: Developer<XiaomiWatch> = {
    name: "Sajmul",
    computer: {
      brand: "lenovo",
      model: "abc",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "xiaomi",
      model: "cba",
      display: "oled",
    },
  };

  interface XiaomiWatch {
    brand: string;
    model: string;
    display: string;
  }

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Bike {
    brand: string,
    engineCapacity: string
  }

  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "zihan",
    computer: {
      brand: "lenassovo",
      model: "abcsd",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "apple",
      model: "cba",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
        brand: 'QJ',
        engineCapacity: '180cc'
    }
  };
}
