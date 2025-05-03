// *reference type ===>> Object

const user: {
  fatherName: "Abul Hossain"; // * type --------> literal types
  readonly motherName: string;
  firstName: string;
  middleName?: string; // * optional type
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "Sajmul",
  middleName: "Hossain",
  lastName: "Zihan",
  isMarried: true,
  fatherName: "Abul Hossain",
  motherName: "Shirina Akter",
};

// user.motherName = 'Shirina Akter';  // ! cannot reassign because this is wrapped with readonly property
