// * distructuring =>

{
  const obj1 = {
    id: 12321,
    name: {
      firstName: "Sajmul",
      middleName: "Hossain",
      lastName: "Zihan",
    },
    contactNo: "1023920",
    address: "Kachua",
  };

  const {
    contactNo,
    name: { lastName : lName },
  } = obj1;


//   * array destructuring

const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'pb'];

const [ , , bestFriends, ...rest] = myFriends;
}
